const docs = `
##### Purpose\n
Provide a space for a page header.\n
---
##### Features\n
Optional background slideshow.\n
Optional background dimmer to give text a bigger pop.\n
---
##### Props\n
!REQUIRED! containerName: String. Creates className for header of "header-containerName"\n
background: URL string. Background image of header\n
backgroundSize: String. CSS sizing of background size\n
backgroundPosition: String. CSS positioning of background image\n
height: String. Total height of header using a CSS property. Can also be set in stylesheet. Can also be set to be a cross-device full height hero with useViewportDimensions hook.\n
dimmer: Boolean. Enables background dimmer for header element. Dimmer properties need to be set in CSS.\n
slideshow: Array ([['image.jpg', 'image.png'], interval]). Enables slideshow functionality.
`

export default docs