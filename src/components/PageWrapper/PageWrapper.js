import React from 'react'
import './_PageWrapper.scss'
import useStateValue from '../../lib/hooks/useStateValue'

const PageWrapper = ({ children }) => {
    const [{ activeTheme }] = useStateValue()

    return (
        <main className={`page-wrapper theme-${activeTheme}`}>
            {children}
        </main>
    )
}

export default PageWrapper