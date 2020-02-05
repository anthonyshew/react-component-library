import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import Navbar from './Navbar'

export default {
    component: Navbar,
    title: 'Navbar',
    decorators: [withKnobs, withA11y, story => <MemoryRouter>{story()}</MemoryRouter>],
    excludeStories: /.*Data$/
}

export const linksData = [
    {
        href: "/",
        linkText: "Home"
    },
    {
        href: "/about",
        linkText: "About"
    }
]

export const Default = () => <Navbar linksArray={linksData} />

export const OpaqueBackground = () => <Navbar linksArray={linksData} r={255} g={0} b={0} transparency={1} textColor="yellow" />

export const TransparentBackground = () => <Navbar linksArray={linksData} r={255} g={255} b={255} transparency={0} textColor="white" />