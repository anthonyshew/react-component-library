import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import docs from './documentation'
import SlidePanel from './SlidePanel'

export default {
    component: SlidePanel,
    title: 'SlidePanel',
    parameters: {
        info: { text: docs }
    },
    decorators: [withKnobs, withA11y],
    excludeStories: /.*Data$/
}

export const Default = () => (
    <SlidePanel
        image="/media/puppy-1.jpg"
        text="Aren't puppies the cutest?!"
        color="white"
    />
)

export const Mirror = () => (
    <SlidePanel
        mirror
        image="/media/puppy-1.jpg"
        text="Aren't puppies the cutest?!"
        color="white"
    />
)

export const WithBackgroundColor = () => (
    <SlidePanel
        image="/media/puppy-1.jpg"
        text="Aren't puppies the cutest?!"
        color="white"
        backgroundColor="#e5e5e5"
    />
)

export const WithButton = () => (
    <MemoryRouter>
        <SlidePanel
            mirror
            image="/media/eagle.jpg"
            text="Lorem ipsum, lorem ipsum, lorem ispum, you know the freaking drill."
            color="white"
            button
            buttonLink=""
            buttonText="Click me!"
            buttonColor="red"
            buttonBackgroundColor="white"
        />
    </MemoryRouter>
)

export const LongText = () => (
    <SlidePanel
        mirror
        image="/media/eagle.jpg"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec. Mauris commodo quis imperdiet massa tincidunt. Vestibulum mattis ullamcorper velit sed. Ut eu sem integer vitae justo eget. Praesent tristique magna sit amet purus gravida quis blandit turpis. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Ultrices dui sapien eget mi proin sed libero. Odio aenean sed adipiscing diam donec. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Sed enim ut sem viverra aliquet eget sit amet. Fringilla phasellus faucibus scelerisque eleifend. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Scelerisque felis imperdiet proin fermentum leo. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Tellus in metus vulputate eu scelerisque. Arcu felis bibendum ut tristique et egestas quis. Interdum velit laoreet id donec."
        color="white"
    />
)