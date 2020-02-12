import React from 'react'
import PropTypes from 'prop-types'
import './_BackgroundDimmer.scss'

import useBodyScrollLock from '../../lib/hooks/useBodyScrollLock'

const BackgroundDimmer = ({ closeParent }) => {

    useBodyScrollLock()

    return (
        <span className="background-dimmer"
            onClick={closeParent}
        >
        </span>
    )
}

BackgroundDimmer.propTypes = {
    closeParent: PropTypes.func.isRequired
}

export default BackgroundDimmer