import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { StateProvider } from '../lib/StateProvider'
import PageWrapper from './PageWrapper'

import { svgLogoData, hamburgerData, linksData } from '../Navbar/Navbar.stories'
import AppWrapper from '../AppWrapper'
import Navbar from '../Navbar'

export default {
    component: PageWrapper,
    title: 'Wrappers/PageWrapper',
    decorators: [withKnobs, withA11y],
    excludeStories: /.*Data$/
}

export const Default = () => (
    <MemoryRouter>
        <StateProvider initialState={{ activeTheme: 'light' }}>
            <AppWrapper>
                <Navbar logo={svgLogoData} breakpoint={500} hamburger={hamburgerData} linksArray={linksData} />
                <PageWrapper>
                    {[...Array(1)].map((elem, i) => <p key={i}>Lorem ipsum, my dude!</p>)}
                    <div style={{ position: "absolute", bottom: 0 }}>Don't cut me off. EVER. Or unless the page is long enough. :D</div>
                </PageWrapper>
            </AppWrapper>
        </StateProvider>
    </MemoryRouter>
)

export const WithDarkMode = () => (
    <MemoryRouter>
        <StateProvider initialState={{ activeTheme: 'dark' }}>
            <AppWrapper>
                <Navbar logo={svgLogoData} breakpoint={500} hamburger={hamburgerData} linksArray={linksData} />
                <PageWrapper>
                    {[...Array(1)].map((elem, i) => <p key={i}>Lorem ipsum, my dude!</p>)}
                    <div style={{ position: "absolute", bottom: 0 }}>Don't cut me off. EVER. Or unless the page is long enough. :D</div>
                </PageWrapper>
            </AppWrapper>
        </StateProvider>
    </MemoryRouter>
)