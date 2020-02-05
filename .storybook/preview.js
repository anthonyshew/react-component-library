import '../src/index.css'
import { addParameters } from '@storybook/react'

addParameters({
    backgrounds: [
        { name: 'white', value: '#ffffff' },
        { name: 'black', value: '#000000' },
        { name: "Blue", value: "#002699", default: true }
    ]
})