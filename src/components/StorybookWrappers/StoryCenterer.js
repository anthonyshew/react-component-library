import React from 'react'

const StoryCenterer = ({ children }) => {
    return (
        <div className="storybook-center-center" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
        }}>
            {children}
        </div>
    )
}

export default StoryCenterer