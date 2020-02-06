import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import StoryCenterer from '../StorybookWrappers/StoryCenterer'
import SVG from './SVG'

export default {
    component: SVG,
    title: 'SVG',
    decorators: [withKnobs, withA11y, story => <StoryCenterer>{story()}</StoryCenterer>],
    excludeStories: /.*Data$/
}

export const Logo = () => <SVG name="logo" />

export const WithClassName = () => <SVG name="logo" className="logo-test" />

export const Hamburger = () => <SVG name="hamburger" handleClick={action('open-menu')} />