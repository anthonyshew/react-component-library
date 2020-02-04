import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { StateProvider } from '../lib/StateProvider'
import AppWrapper from './AppWrapper'

export default {
    component: AppWrapper,
    title: 'AppWrapper',
    decorators: [withKnobs, withA11y],
    excludeStories: /.*Data$/
}

export const TooShortContent = () => (
    <StateProvider initialState={{ activeTheme: 'light' }}>
        <AppWrapper>
            {[...Array(1)].map((elem, i) => <p key={i}>Lorem ipsum, my dude!</p>)}
            <div style={{ position: "absolute", bottom: 0 }}>Don't cut me off. EVER. Or unless the page is long enough. :D</div>
        </AppWrapper>
    </StateProvider>
)

export const ModerateContent = () => (
    <StateProvider initialState={{ activeTheme: 'light' }}>
        <AppWrapper>
            {[...Array(20)].map((elem, i) => <p key={i}>Lorem ipsum, my dude!</p>)}
            <div style={{ position: "absolute", bottom: 0 }}>Don't cut me off. EVER. Or unless the page is long enough. :D</div>
        </AppWrapper>
    </StateProvider>
)

export const LongContent = () => (
    <StateProvider initialState={{ activeTheme: 'light' }}>
        <AppWrapper>
            {[...Array(100)].map((elem, i) => <p key={i}>Lorem ipsum, my dude!</p>)}
            <div style={{ position: "absolute", bottom: 0 }}>Don't cut me off. EVER. Or unless the page is long enough. :D</div>
        </AppWrapper>
    </StateProvider>
)

export const TooWideContent = () => (
    <StateProvider initialState={{ activeTheme: 'light' }}>
        <AppWrapper>
            <p style={{ width: "1000px" }}>I'm fat as sh{[...Array(1000)].map((elem, i) => <span key={i}>i</span>)}t.</p>
            <p>But I do not create horizontal scrolling.</p>
            <div style={{ position: "absolute", bottom: 0 }}>Don't cut me off. EVER. Or unless the page is long enough. :D</div>
        </AppWrapper>
    </StateProvider>
)

export const WithDarkMode = () => (
    <StateProvider initialState={{ activeTheme: 'dark' }}>
        <AppWrapper>
            <p>Please note that viewport units in an iframe are apparently not the same as devices?</p>
            <p>Please note that viewport units in an iframe are apparently not the same as devices?</p>
            <p>Please note that viewport units in an iframe are apparently not the same as devices?</p>
            <p>Please note that viewport units in an iframe are apparently not the same as devices?</p>
            <p>Please note that viewport units in an iframe are apparently not the same as devices?</p>
            <p>Please note that viewport units in an iframe are apparently not the same as devices?</p>
            <div style={{ position: "absolute", bottom: 0 }}>Don't cut me off. EVER. Or unless the page is long enough. :D</div>
        </AppWrapper>
    </StateProvider>
)