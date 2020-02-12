import React from 'react'
import './_PageWrapper.scss'
import useStateValue from '../../lib/hooks/useStateValue'

const PageWrapper = ({ className, children }) => {
    const [{ activeTheme }] = useStateValue()

    return (
        <main className={`page-wrapper theme-${activeTheme}${className ? " " + className : ""}`}>
            {children}
        </main>
    )
}

export default PageWrapper