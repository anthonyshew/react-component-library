import React from 'react'
import { Link } from 'react-router-dom'
import './_Navbar.scss'

import useViewportDimensions from '../../lib/hooks/useViewportDimensions'
import useScrollPosition from '../../lib/hooks/useScrollPosition'

const Navbar = ({ stickyTop, logoHidesOnScroll, breakpoint, logo, hamburger, linksArray, backgroundColor }) => {

    const [viewportWidth, viewportHeight] = useViewportDimensions()
    const scrollPosition = useScrollPosition()

    return (
        <nav className="navbar" style={{
            backgroundColor: backgroundColor,
            position: stickyTop ? "fixed" : "relative",
            top: stickyTop ? "0" : "initial",
            zIndex: stickyTop ? "100" : "initial"
        }}>
            <Logo logo={logo} scrollPosition={scrollPosition} viewportHeight={viewportHeight} logoHidesOnScroll={logoHidesOnScroll} />
            {viewportWidth < breakpoint || breakpoint === 0 ? <span className="container-hamburger">{hamburger}</span> : <span className="nav-link-list">
                {linksArray.map((elem) => {
                    return <Link key={elem.href}
                        to={elem.href}
                        className="nav-link">
                        {elem.linkText}
                    </Link>
                })}
            </span>}
        </nav>
    )
}

export default Navbar

const Logo = ({ logo, scrollPosition, viewportHeight, logoHidesOnScroll }) => {
    return (
        <>
            {scrollPosition.y > viewportHeight && logoHidesOnScroll ? <span aria-hidden="true"></span> : <span className="container-logo"><Link className="logo-link" to="/">{logo}</Link></span>}
        </>
    )
}
