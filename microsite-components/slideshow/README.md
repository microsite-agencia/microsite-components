## Reponsive Slide Show v1.0.0 

#
<br/>

## Type
To use the Responsive Slide Show do you need update ContextV2 with an objects array of type bellow:

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

## How use the component
The component wait an id for select an unique slide show of ContextV2 based on its slug
```
<ResponsiveSlideShow id="slug-of-slide-show" >
```
