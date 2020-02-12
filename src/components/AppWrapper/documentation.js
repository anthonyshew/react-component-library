const docs = `
##### Purpose \n
Contain the app in a predictable, sensible container.\n
---
##### Features\n
Allow for themeing of the rest of the app by pulling a value out of state and applying a className to the top level container.\n
Ensure that the app is always, at least, the height of the viewport with the useViewportDimensions hook and applying the returned viewportHeight as the minHeight style for the app container.\n
---
##### Props\n
children only\n
---
##### Relevant State Values\n
theme: String. Used to assign className to top-level container of entire app.`

export default docs