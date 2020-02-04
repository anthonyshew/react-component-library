import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import StoryCenterer from '../lib/StoryCenterer'
import LoadingSpinner from './LoadingSpinner'

export default {
    component: LoadingSpinner,
    title: 'LoadingSpinner',
    decorators: [withKnobs, withA11y, story => <StoryCenterer>{story()}</StoryCenterer>],
    excludeStories: /.*Data$/
}

export const Default = () => <LoadingSpinner />
export const Green = () => <LoadingSpinner color="green" />
export const Slower = () => <LoadingSpinner speed="10" color="blue" />