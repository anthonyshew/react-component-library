import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import Header from './Header'
import Slideshow from './Slideshow'

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

export const noDimmer = () => (
    <Header background="/media/eagle.jpg" containerName="test" noDimmer>
        <h1>Some h1</h1>
        <h2>Another h2</h2>
    </Header>
)

export const MultiBackground = () => (
    <Header
        containerName="test"
        noDimmer
    >
        <h1>Some h1</h1>
        <h2>Another h2</h2>
        <Slideshow
            slides={["/media/eagle.jpg", "/media/giraffe.jpg", "/media/turtle.jpg"]}
            interval={3000}
        />
    </Header>
)