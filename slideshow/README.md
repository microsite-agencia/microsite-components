## Reponsive Slide Show v1.0.0 

To use the Responsive Slide Show do you need update ContextV2 with an objects array of type bellow:

<p>&nbsp;</p>

## Type

```
type Image = {
  title: string
  slug: string
  subtitle: string
  description: string
  desktopID: number
  desktop: string
  mobileID: number
  mobile: string
  buttonLabel: string
  buttonLink: string
  order: number
  align: 'left' | 'center' | 'right'
}

type SlideShow = {
  id: number
  title: string
  slug: string
  width: number
  height: number
  animationTime: number
  displayNav: boolean
  displayTitle: boolean
  displaySubtitle: boolean
  displayDescription: boolean
  displayButton: boolean
  slides: Image[]
}

```


<p>&nbsp;</p>

## Import
After update the context do you need import de component from microsite-components folder: 

```  
import { ResponsiveSlideshow } from 'microsite-components/slideshow'
```


<p>&nbsp;</p>

## How use the component
The component wait an id for select an unique slide show of ContextV2 based on its slug
```
<ResponsiveSlideShow id="slug-of-slide-show" >
```

<p>&nbsp;</p>

## How style works
  Inside the theme folder are all the basic style settings used in the component

```
📂slideshow
┗ 📂theme
  ┗ index.ts
```
