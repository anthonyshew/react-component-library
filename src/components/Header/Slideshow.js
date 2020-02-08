import React, { useState, useEffect } from 'react'
import gsap from 'gsap'

import HeaderSlide from './HeaderSlide'

const Slideshow = ({ slides, interval, children }) => {

    const [arrIndex, setArrIndex] = useState(0)
    const [firstAnimComplete, setFirstAnimComplete] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            gsap.timeline()
                .addLabel('start', 0)
                .to(`.header-slide-${arrIndex}`, {
                    duration: 2,
                    x: "-100%"
                }, 'start')
                .to(`.header-slide-${arrIndex + 1}`, {
                    duration: 2,
                    x: "0"
                }, 'start')
                .then(res => setFirstAnimComplete(true))
        }, interval - 2)
    }, [arrIndex])

    useEffect(() => {
        if (firstAnimComplete) {
            const parentNode = document.querySelector(".container-slideshow")
            parentNode.removeChild(parentNode.childNodes[0])
            const toAdd = document.createElement("div")
            toAdd.classList.add(`header-slider`)
            toAdd.classList.add(`header-slider-${(arrIndex + 2) % slides.length}`)
            toAdd.setAttribute("style", `background-image: url("${slides[(arrIndex + 2) % slides.length]}"); transform: translateX(100%);`)
            parentNode.appendChild(toAdd)
        }
    }, [arrIndex, firstAnimComplete])

    return (
        <span className="container-slideshow">
            <HeaderSlide
                className={`header-slide-${arrIndex}`}
                backgroundImage={slides[arrIndex]}
            />
            <HeaderSlide
                className={`header-slide-${(arrIndex + 1) % slides.length}`}
                backgroundImage={slides[(arrIndex + 1) % slides.length]}
            />
        </span>
    )

}

export default Slideshow