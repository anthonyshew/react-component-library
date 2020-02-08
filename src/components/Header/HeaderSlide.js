import React from 'react'

const HeaderSlide = ({ className, backgroundImage, children }) => {
    return (
        <div
            className={`header-slide${className ? " " + className : ""}`}
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            {children}
        </div>
    )
}

export default HeaderSlide