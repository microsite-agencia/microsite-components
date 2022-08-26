import Image from 'next/image'
import styled, { css, keyframes } from 'styled-components'
import { useConfig } from 'components/admin/context'
import { ContainerProps, InfoProps, ResponsiveSlideProps } from './core/types'

export const ResponsiveSlide = ({ data, height, visible, slideshow, theme, width }: ResponsiveSlideProps) => {
  const { windowWidth } = useConfig()


  return (
    <Container visible={visible} height={height} animationTime={slideshow.animationTime}>
      <Image
        src={windowWidth > 991 ? data.desktop : data.mobile}
        alt={`Slide ${data.title}`}
        width={windowWidth}
        height={height}
        objectFit='cover'
        layout='intrinsic'
      />
      <Info height={height}>
        <InfoContent align={data.align}>
          <Title visible={slideshow.displayTitle} align={data.align} styleTheme={theme} animationTime={slideshow.animationTime}>
            {data.title}
          </Title>
          <Subtitle visible={slideshow.displaySubtitle} align={data.align} styleTheme={theme} animationTime={slideshow.animationTime}>
            {data.subtitle}
          </Subtitle>
          <Description visible={slideshow.displayDescription} align={data.align} styleTheme={theme} animationTime={slideshow.animationTime}>
            {data.description}
          </Description>
          <Button href={data.buttonLink} visible={slideshow.displayButton} align={data.align} styleTheme={theme} animationTime={slideshow.animationTime}>
            {data.buttonLabel}
          </Button>
        </InfoContent>
      </Info>
    </Container>
  )
}

const Container = styled.div<ContainerProps>`${({ visible, animationTime, height }) => css`
  display: ${visible ? 'block' : 'none'};
  animation: ${AppearAndHidden} ${animationTime + 'ms'} linear;
  height: ${height + 'px'};
  width: 100vw;
`}`

const Info = styled.div<InfoProps>`${({ height }) => css`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 30px;
  z-index: 10;
  height: ${height + 'px'};
  margin-top: ${'-' + height + 'px'};
`}`

const InfoContent = styled.div<ContainerProps>`${({ align }) => css`
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${align !== 'center' ? (align === 'left' ? 'flex-start' : 'flex-end') : 'center'};

  @media screen and (max-width: 991px) {
    align-items: center;
  }
`}`

const Title = styled.h1<ContainerProps>`${({ visible, align, styleTheme, animationTime }) => css`
  display: ${visible ? 'block' : 'none'};
  width: fit-content;
  font-size: ${styleTheme?.title.font?.size};
  font-family: ${styleTheme?.title.font?.family};
  font-weight: ${styleTheme?.title.font?.weight};
  margin: -3px 0;
  padding: 5px 10px;
  transform: skew(${styleTheme?.title.skew});
  background: ${styleTheme?.title.background};
  color: ${styleTheme?.title.color};
  text-align: ${align};
  animation: ${align === 'left' ? SlideLeft : SlideRight} ${(animationTime) + 'ms'} linear forwards;

  @media screen and (max-width: 991px) {
    text-align: center;
    font-size: ${styleTheme?.title.font?.sizeMobile};
  }
`}`

const Subtitle = styled.h2<ContainerProps>`${({ visible, align, styleTheme, animationTime }) => css`
  display: ${visible ? 'block' : 'none'};
  width: fit-content;
  font-size: ${styleTheme?.subtitle.font?.size};
  font-family: ${styleTheme?.subtitle.font?.family};
  font-weight: ${styleTheme?.subtitle.font?.weight};
  margin: -3px 0;
  padding: 5px 10px;
  transform: skew(${styleTheme?.subtitle.skew});
  background: ${styleTheme?.subtitle.background};
  color: ${styleTheme?.subtitle.color};
  text-align: ${align};
  animation: ${align === 'right' ? SlideLeft : SlideRight} ${animationTime + 'ms'} linear forwards;

  @media screen and (max-width: 991px) {
    text-align: center;
    font-size: ${styleTheme?.subtitle.font?.sizeMobile};
  }
`}`

const Description = styled.p<ContainerProps>`${({ visible, align, styleTheme, animationTime }) => css`
  display: ${visible ? 'block' : 'none'};
  width: fit-content;
  font-size: ${styleTheme?.description.font?.size};
  font-family: ${styleTheme?.description.font?.family};
  font-weight: ${styleTheme?.description.font?.weight};
  margin: 15px 0;
  transform: skew(${styleTheme?.description.skew});
  background: ${styleTheme?.description.background};
  color: ${styleTheme?.description.color};
  text-align: ${align};
  opacity: 0;
  animation: ${Appear} ${animationTime + 'ms'} forwards 0.8s;

  @media screen and (max-width: 991px) {
    text-align: center;
    margin: 5px 0;
    font-size: ${styleTheme?.description.font?.sizeMobile};
  }
`}`

const Button = styled.a<ContainerProps>`${({ visible, styleTheme, animationTime }) => css`
  display: ${visible ? 'block' : 'none'};
  width: fit-content;
  font-size: ${styleTheme?.button.font?.size};
  font-family: ${styleTheme?.button.font?.family};
  font-weight: ${styleTheme?.button.font?.weight};
  margin: 15px 0;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;
  transform: skew(${styleTheme?.button.skew});
  background: ${styleTheme?.button.background};
  color: ${styleTheme?.button.color};
  opacity: 0;
  animation: ${AfterAppear} ${animationTime + 'ms'} forwards 1s;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.25);
  }

  @media screen and (max-width: 991px) {
    text-align: center;
    font-size: ${styleTheme?.button.font?.sizeMobile};
  }
`}`

const SlideLeft = keyframes`
  0% {
    opacity: 0;
    margin: auto 50vw auto -50vw;
  }
  10% {
    opacity: 1;
    margin: auto 0 auto 0;
  }
  90% {
    opacity: 1;
    margin: auto 0 auto 0;
  }
  100% {
    opacity: 0;
    margin: auto 50vw auto -50vw;
  }
`

const SlideRight = keyframes`
  0% {
    opacity: 0;
    margin: auto -50vw auto 50vw;
  }
  10% {
    opacity: 1;
    margin: auto 0 auto 0;
  }
  90% {
    opacity: 1;
    margin: auto 0 auto 0;
  }
  100% {
    opacity: 0;
    margin: auto -50vw auto 50vw;
  }
`

const AppearAndHidden = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`
const Appear = keyframes`
 0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
`

const AfterAppear = keyframes`
 0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  62.5% {
    opacity: 1;
  }
  67.5% {
    opacity: 0;
  }
`

