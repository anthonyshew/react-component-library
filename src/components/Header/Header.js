import React from 'react'
import './_Header.scss'

const Header = (props) => {
    return (
        <header
            className={`header-${process.env.PUBLIC_URL + props.containerName} header`}
            style={{
                backgroundImage: `url(${props.background})`,
                backgroundSize: `${props.backgroundSize || 'cover'}`,
                backgroundPosition: `${props.backgroundPosition || 'center'}`,
                backgroundRepeat: 'no-repeat',
                height: props.height ? props.height : null
            }}
        >
            {props.noDimmer ? null : <span className="background-dimmer"></span>}
            {props.children}
        </header>
    )
}

export default Header