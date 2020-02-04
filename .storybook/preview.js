import '../src/index.css'
import { addParameters } from '@storybook/react'

addParameters({
    backgrounds: [
        { name: 'white', value: '#ffffff', default: true },
        { name: 'black', value: '#000000' }
    ]
})