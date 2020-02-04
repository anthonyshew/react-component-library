import React from 'react'
import './_AppWrapper.scss'

const AppWrapper = (props) => {

    return (
        <div className="app-wrapper" style={{ minHeight: props.viewportHeight }}>
            {props.children}
        </div>
    )
}

export default AppWrapper