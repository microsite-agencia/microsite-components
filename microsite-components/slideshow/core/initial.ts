import { TYPE_Slide_V2 } from "components/admin/types";
import { Theme } from "./types";

export const slideshow: TYPE_Slide_V2 = {
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

export const active = {
  slideshow: slideshow,
  current: '',
}

export const theme: Theme = {
  background: 'linear-gradient(0deg, #cecece, #fefefe)',
  title: {
    background: '#050505',
    color: '#cecece',
    font: {
      size: '2rem',
      sizeMobile: '1.2rem',
      family: 'sans-serif',
      weight: '900',
    },
    skew: '0deg',
  },
  subtitle: {
    background: '#101010',
    color: '#cecece',
    font: {
      size: '3rem',
      sizeMobile: '1.7rem',
      family: 'sans-serif',
      weight: '900',
    },
    skew: '0deg',
  },
  description: {
    background: 'transparent',
    color: '#cecece',
    font: {
      size: '1.5ren',
      sizeMobile: '1rem',
      family: 'sans-serif',
      weight: '300',
    },
    skew: '0deg',
  },
  button: {
    background: '#232323',
    color: '#cecece',
    font: {
      size: '1.5ren',
      sizeMobile: '1rem',
      family: 'sans-serif',
      weight: '300',
    },
    skew: '0deg',
  },
}
