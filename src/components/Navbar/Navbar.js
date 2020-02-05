import React from 'react'
import { Link } from 'react-router-dom'
import './_Navbar.scss'
import { linksData } from './Navbar.stories'
import { viewBoxData, artworkData } from '../SVG/SVG.stories'

import SVG from '../SVG/SVG'

const Navbar = ({ r, g, b, transparency, textColor, breakpoint, linksArray }) => {
    return (
        <nav className="navbar" style={{ backgroundColor: `rgba(${r ?? 255},${g ?? 255},${b ?? 255}, ${transparency ?? 1})`, color: textColor ?? "#000000" }}>
            <span className="logo-link"><SVG viewBox={viewBoxData} artwork={artworkData} /></span>
            <span className="nav-link-list">
                {linksData.map((elem) => {
                    return <Link key={elem.href}
                        to={elem.href}
                        className="nav-link"
                        style={{ color: textColor ?? "#000000" }}>
                        {elem.linkText}
                    </Link>
                })}
            </span>
        </nav>
    )
}

export default Navbar