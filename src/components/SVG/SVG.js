import React from 'react'
import './_SVG.scss'

const SVG = ({ artwork, viewBox }) => {
    return (
        <>
            <svg className="svg" viewBox={viewBox ?? "0 0 100 100"} fill="none" xmlns="http://www.w3.org/2000/svg">
                {artwork}
            </svg>
        </>
    )
}

export default SVG