import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './_BackgroundDimmer.scss'

const BackgroundDimmer = ({ closeParent }) => {

    useEffect(() => {
        document.querySelector('body').style.position = 'fixed'
        document.querySelector('body').style.overflowY = 'scroll'

        return () => {
            document.querySelector('body').style.position = 'initial'
            document.querySelector('body').style.overflowY = 'initial'
        }
    }, [])

    return (
        <span className="background-dimmer"
            onClick={closeParent}
            data-testid="background-dimmer"
        >
        </span>
    )
}

BackgroundDimmer.propTypes = {
    closeParent: PropTypes.func.isRequired
}

export default BackgroundDimmer