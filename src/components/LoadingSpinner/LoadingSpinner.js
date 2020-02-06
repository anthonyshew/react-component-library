import React, { useEffect } from 'react'
import gsap from 'gsap'
import './_LoadingSpinner.scss'

const Loading = ({ color, speed }) => {

    useEffect(() => {
        gsap.fromTo(".loading", { rotation: 0 }, {
            duration: speed ?? 3,
            repeat: -1,
            rotation: 360,
            ease: "none"
        })
    })

    return (
        <div className="loading">
            <svg className="spinner" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" alt="Loading spinner is spinning.">
                <title>Loading Spinner</title>
                <desc>This small circle is rotating because something is loading.</desc>
                <path d="M98 50C99.1046 50 100.004 49.1039 99.96 48.0002C99.4856 36.1395 94.8032 24.8085 86.7161 16.06C78.1756 6.82091 66.4659 1.14128 53.923 0.154133C41.38 -0.833018 28.926 2.94488 19.0453 10.7342C9.16465 18.5234 2.5838 29.7514 0.615583 42.1783C-1.35263 54.6051 1.43648 67.3172 8.42652 77.7785C15.4166 88.2398 26.0936 95.6813 38.3277 98.6185C50.5618 101.556 63.4536 99.7725 74.4311 93.6248C84.8257 87.8035 92.7805 78.474 96.8968 67.3404C97.2799 66.3044 96.7012 65.1741 95.6507 64.8328L76.8662 58.7294C75.8157 58.388 74.6945 58.9667 74.2742 59.9882C72.0303 65.442 68.005 70.0015 62.8257 72.902C57.0628 76.1294 50.2949 77.0655 43.8723 75.5236C37.4497 73.9816 31.8445 70.075 28.1749 64.5831C24.5053 59.0911 23.0411 52.4176 24.0744 45.8938C25.1076 39.37 28.5624 33.4755 33.7495 29.3864C38.9366 25.2972 45.4747 23.3139 52.0595 23.8321C58.6442 24.3503 64.7915 27.332 69.2751 32.1823C73.3045 36.5413 75.7239 42.1216 76.1727 48.0018C76.2567 49.1032 77.1442 50 78.2488 50H98Z" fill={color ?? "black"} />
            </svg>
        </div>
    )
}

export default Loading