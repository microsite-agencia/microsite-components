import { useEffect, useRef, useState } from "react"
import { useConfig } from 'components/admin/context'
import { Active, SlideShow } from "../types"

export const initialSlideshow: SlideShow = {
  id: 0,
  slug: '',
  title: '',
  width: 0,
  height: 0,
  animationTime: 0,
  displayNav: true,
  displayTitle: true,
  displaySubtitle: true,
  displayDescription: true,
  displayButton: true,
  slides: [],
}

export const initialState: Active = {
  slideshow: initialSlideshow,
  slideHeight: 0,
  current: '',
}

export function useSlideShow(id: string) {
  const [active, setActive] = useState<Active>(initialState)
  const timer = useRef(0)
  const { v2, windowWidth } = useConfig()


  useEffect(() => {
    const activeSlideshow = v2.slides.find(slideshow => slideshow.slug === id)

    activeSlideshow && setActive(old => ({
      ...old,
      slideshow: activeSlideshow,
    }))
  }, [v2.slides])

  const updateCurrentSlide = () => {
    id
    setActive(old => {
      const total = old.slideshow.slides.length

      if(total > 0) {
        if(total === 1) {
          return {
            ...old,
            current: old.slideshow.slides[0].slug,
          }
        }else {
          const last = total - 1
          const index = old.slideshow.slides.findIndex(slide => slide.slug === old.current)
          const newCurrent = old.slideshow.slides[index === last ? 0 : index + 1].slug

          return {
            ...old,
            current: newCurrent,
          }
        }
      }else {
        return old
      }
    })
  }

  useEffect(() => {
    updateCurrentSlide()
  }, [active.slideshow.slides])

  useEffect(() => {
    active.slideshow.height && setActive(old => ({
      ...old,
      slideHeight: windowWidth > 991
                    ? active.slideshow.height
                    : ((active.slideshow.height / active.slideshow.width) * 991)
    }))
  }, [windowWidth, active.slideshow])

  useEffect(() => {
    window.clearInterval(timer.current)

    if(active.slideshow.animationTime > 0) {
      timer.current = window.setInterval(() => {
        updateCurrentSlide()
      }, active.slideshow.animationTime)
    }
  }, [active.slideshow.animationTime])

  return {
    active
  }
}
