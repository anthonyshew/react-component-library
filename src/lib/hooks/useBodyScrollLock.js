import { useEffect } from 'react'

export const useBodyScrollLock = () => {
    useEffect(() => {
        document.querySelector('body').style.position = 'fixed'
        document.querySelector('body').style.overflowY = 'scroll'

        return () => {
            document.querySelector('body').style.position = 'initial'
            document.querySelector('body').style.overflowY = 'initial'
        }
    }, [])
}