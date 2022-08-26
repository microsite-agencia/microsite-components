import { useEffect, useRef, useState } from "react"
import { Active } from "./types"
import * as initial from './initial'
import { useConfig } from 'components/admin/context'

export function useSlideShow(id: string) {
  const [active, setActive] = useState<Active>(initial.active)
  const timer = useRef(0)
  const { v2 } = useConfig()


  useEffect(() => {
    const activeSlideshow = v2.slides.find(slideshow => slideshow.slug === id)

    activeSlideshow && setActive(old => ({
      ...old,
      slideshow: activeSlideshow,
    }))
  }, [v2.slides])

  const updateCurrentSlide = () => {
    setActive(old => {
      const total = old.slideshow.slides.length
      const last = total - 1
      const index = old.slideshow.slides.findIndex(slide => slide.slug === old.current)
      const newCurrent = old.slideshow.slides[index === last ? 0 : index + 1].slug

      return {
        ...old,
        current: newCurrent,
      }
    })
  }

  useEffect(() => {
    window.clearInterval(timer.current)

    timer.current = window.setInterval(() => {
      updateCurrentSlide()
    }, active.slideshow.animationTime)
  }, [active.slideshow.animationTime])

  return {
    active
  }
}
