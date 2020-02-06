import React from 'react'
import { Link } from 'react-router-dom'
import './_Navbar.scss'

import useViewportDimensions from '../../lib/hooks/useViewportDimensions'

const Navbar = ({ breakpoint, logo, hamburger, linksArray, backgroundColor }) => {

    const [viewportWidth] = useViewportDimensions()

    return (
        <nav className="navbar" style={{ backgroundColor: backgroundColor }}>
            <span className="logo-link">{logo}</span>
            {viewportWidth < breakpoint || breakpoint === 0 ? hamburger : <span className="nav-link-list">
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