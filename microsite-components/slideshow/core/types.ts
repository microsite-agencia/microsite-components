import { TYPE_Slide_V2, TYPE_Slide_v2_Images } from 'components/admin/types'

export type StyleProps = {
  background?: string
  color?: string
  font?: {
    size?: string
    sizeMobile?: string
    family?: string
    weight?: string
  }
  skew?: string
}
export type Theme = {
  background: string
  title: StyleProps
  subtitle: StyleProps
  description: StyleProps
  button: StyleProps
}
export type ResponsiveSlideShowProps = {
  id: string
  theme?: Theme
}
export type ResponsiveSlideProps = {
  slideshow: TYPE_Slide_V2
  data: TYPE_Slide_v2_Images
  width: number
  height: number
  visible: boolean
  theme?: Theme
}
export type ContainerProps = {
  visible?: boolean
  height?: number
  align?: string
  styleTheme?: Theme
  animationTime?: number
}
export type InfoProps = {
  height: number
  align?: string
}
export type Active = {
  slideshow: TYPE_Slide_V2
  current: string
}
