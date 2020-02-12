const docs = `
##### Purpose\n
An SVG component to better organize project SVGs.\n
---
##### Features\n
Required accessibility tags so it doesn't get forgotten.\n
Can assign handleClick to specific paths if desired.\n
---
##### Props\n
!REQUIRED!name: String. Key value to produce the desired SVG.\n
className: String. Assign an HTML className to the SVg.\n
handleClick: Function. A functin to be ran when the SVG is clicked on.\n
!REQUIRED!title: String. Accessibility title of the SVG.\n
!REQUIRED!desc: String. Accessibility description of the SVG.\n
!REQUIRED!alt: String. Alt tag for the SVG.\n
---
##### Relevant State Values\n
theme: String. Used to assign className to the top-level container of the page.
`

export default docs