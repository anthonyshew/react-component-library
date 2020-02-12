import React from 'react'

const StoryScroller = ({ children }) => {
    return (
        <div className="storybook-center-center" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "300vh",
            overflowX: "hidden"
        }}>
            {children}
        </div>
    )
}

export default StoryScroller