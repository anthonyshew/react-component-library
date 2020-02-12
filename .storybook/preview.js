import '../src/index.css'
import { addParameters, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

addDecorator(withInfo)

addParameters({
    backgrounds: [
        { name: 'white', value: '#ffffff' },
        { name: 'black', value: '#000000' },
        { name: "Blue", value: "#002699", default: true }
    ]
})