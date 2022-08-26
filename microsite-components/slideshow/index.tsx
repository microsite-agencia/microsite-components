import styled, { css } from 'styled-components'
import * as initial from './core/initial'
import { Theme } from './core/types'
import { ResponsiveSlide } from './slide'
import { ResponsiveSlideShowProps } from './core/types'
import { useSlideShow } from './core/use-slide-show'
import { useConfig } from 'components/admin/context'

export const ResponsiveSlideshow = ({ id }: ResponsiveSlideShowProps) => {
  const { active } = useSlideShow(id)
  const { windowWidth } = useConfig()
  const slideHeight = windowWidth > 991
                        ? active.slideshow.height
                        : ((active.slideshow.height / active.slideshow.width) * 991)

  const theme: Theme = {
    ...initial.theme,
    background: 'linear-gradient(180deg, black, red)',
  }

  return (
    <Container height={slideHeight} styleTheme={theme}>
      <Content>
        {
          active.slideshow.slides.map(slide => (
            <ResponsiveSlide
              key={slide.slug}
              slideshow={active.slideshow}
              data={slide}
              width={active.slideshow.width}
              height={slideHeight}
              visible={slide.slug === active.current}
              theme={theme}
            />
          ))
        }
      </Content>
    </Container>
  )
}

const Container = styled.div<{ styleTheme: Theme, height: number }>`${({ styleTheme, height }) => css`
  background: ${styleTheme.background};
  height: ${height + 'px'};
`}`

const Content = styled.div`
  width: 100%;
  overflow: hidden;
  background: transparent;
`
