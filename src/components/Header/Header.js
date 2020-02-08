import React from 'react'
import './_Header.scss'

const Header = ({
    containerName,
    background,
    backgroundSize,
    backgroundPosition,
    height,
    noDimmer,
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
            {noDimmer ? null : <span className="background-dimmer"></span>}
            {children}
        </header>
    )
}

export default Header