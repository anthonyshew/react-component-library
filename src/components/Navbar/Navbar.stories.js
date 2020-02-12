import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import Navbar from './Navbar'
import SVG from '../SVG/SVG'
import StoryScroller from '../StorybookWrappers/StoryScroller'

export default {
    component: Navbar,
    title: 'Navbar',
    decorators: [withKnobs, withA11y, story => <MemoryRouter>{story()}</MemoryRouter>],
    excludeStories: /.*Data$/
}

export const hamburgerData = <SVG name="hamburger" handleClick={action('open-menu')} title="Hamburger Button" desc="This image acts as a button used for opening the mobile menu." alt="Hamburger button for opening the mobile menu" />

export const svgLogoData = <SVG name="logo" title="Shewperman Logo" desc="The Shewperman Logo looks a lot like the Superman Logo....with a shoe." alt="Shewperman Logo" />

export const imageLogoData = <img src="/media/eagle.jpg" alt="Alt text." />

export const linksData = [
    {
        href: "/",
        linkText: "Home"
    },
    {
        href: "/about",
        linkText: "About"
    },
    {
        href: "/pricing",
        linkText: "Pricing"
    },
    {
        href: "/anothing-thing",
        linkText: "Another Thing"
    },
    {
        href: "/contact",
        linkText: "Contact Us"
    }
]

export const Default = () => <Navbar logo={svgLogoData} linksArray={linksData} />

export const WithBackground = () => <Navbar logo={svgLogoData} hamburger={hamburgerData} linksArray={linksData} backgroundColor="#e5e5e5" />

export const WithImage = () => <Navbar logo={imageLogoData} hamburger={hamburgerData} linksArray={linksData} />

export const WithBreakpoint = () => <Navbar logo={svgLogoData} breakpoint={500} hamburger={hamburgerData} linksArray={linksData} />

export const AlwaysHamburger = () => <Navbar logo={svgLogoData} breakpoint={0} hamburger={hamburgerData} linksArray={linksData} />

export const StickyTop = () => <StoryScroller><Navbar stickyTop logo={svgLogoData} breakpoint={0} hamburger={hamburgerData} linksArray={linksData} /></StoryScroller>

export const StickyTopAndLogoHides = () => <StoryScroller><Navbar stickyTop logoHidesOnScroll logo={svgLogoData} breakpoint={0} hamburger={hamburgerData} linksArray={linksData} /></StoryScroller>