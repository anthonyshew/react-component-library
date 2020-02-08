import React from 'react'
import './_Header.scss'

import SlideShow from './Slideshow'

const Header = ({
    containerName,
    background,
    backgroundSize,
    backgroundPosition,
    height,
    dimmer,
    slideshow,
    children
}) => {
    return (
        <header
            className={`header-${containerName} header`}
            style={{
                backgroundImage: background ? `url(${background})` : null,
                backgroundSize: `${backgroundSize || 'cover'}`,
                backgroundPosition: `${backgroundPosition || 'center'}`,
                backgroundRepeat: 'no-repeat',
                height: height ? height : null
            }}
        >
            {dimmer ? <span className="background-dimmer"></span> : null}
            {slideshow ? <SlideShow slides={slideshow[0]} interval={slideshow[1]} /> : null}
            {children}
        </header>
    )
}

export default Header