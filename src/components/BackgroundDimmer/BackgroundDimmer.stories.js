import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import BackgroundDimmer from './BackgroundDimmer'

export default {
    component: BackgroundDimmer,
    title: 'BackgroundDimmer',
    decorators: [withKnobs, withA11y, story => <div style={{ height: "2000px", color: "white" }}>This should be scrollable but it is not because of the background dimmer.{story()}</div>],
    excludeStories: /.*Data$/
}

const handleClose = action('handleClose')

export const Default = () => <BackgroundDimmer closeParent={handleClose} />