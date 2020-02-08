import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import Header from './Header'

export default {
    component: Header,
    title: 'Header',
    decorators: [withKnobs, withA11y],
    excludeStories: /.*Data$/
}

export const Default = () => (
    <Header background="/media/eagle.jpg" containerName="test">
        <h1>Some h1</h1>
        <h2>Another h2</h2>
    </Header>
)

export const WithDimmer = () => (
    <Header background="/media/eagle.jpg" containerName="test" dimmer>
        <h1>Some h1</h1>
        <h2>Another h2</h2>
    </Header>
)

export const SlideShowUntested = () => (
    <Header
        containerName="test"
        slideshow={[["/media/eagle.jpg", "/media/giraffe.jpg", "/media/turtle.jpg", "/media/goat.jpg", "/media/grasshopper.jpg"], 5000]}

    >
        <h1>Some h1</h1>
        <h2>Another h2</h2>
    </Header>
)

export const SlideShowWithDimmerUntested = () => (
    <Header
        containerName="test"
        slideshow={[["/media/eagle.jpg", "/media/giraffe.jpg", "/media/turtle.jpg", "/media/goat.jpg", "/media/grasshopper.jpg"], 5000]}
        dimmer
    >
        <h1>Some h1</h1>
        <h2>Another h2</h2>
    </Header>
)