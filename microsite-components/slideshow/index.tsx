import styled, { css } from 'styled-components'
import { ResponsiveSlide } from './components/slide'
import { ResponsiveSlideShowProps, Theme } from './types'
import { useSlideShow } from './hooks/use-slide-show'
import { theme } from './theme'

export const ResponsiveSlideshow = ({ id }: ResponsiveSlideShowProps) => {
  const { active } = useSlideShow(id)

  return (
    <Container height={active.slideHeight} styleTheme={theme}>
      <Content>
        {
          active.slideshow.slides.map(slide => (
            <ResponsiveSlide
              key={slide.slug}
              slideshow={active.slideshow}
              data={slide}
              width={active.slideshow.width}
              height={active.slideHeight}
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
