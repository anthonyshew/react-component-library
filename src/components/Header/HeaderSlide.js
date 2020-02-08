import React from 'react'

const HeaderSlide = ({ className, backgroundImage, styles, children }) => {
    return (
        <div
            className={`header-slide${className ? " " + className : ""}`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                ...styles,
            }}
        >
            {children}
        </div>
    )
}

export default HeaderSlide