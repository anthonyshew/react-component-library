import React from 'react'
import { Link } from 'react-router-dom'
import './_SlidePanel.scss'

const SlidePanel = ({
    mirror,
    heading,
    image,
    imageAlt,
    svg,
    text,
    backgroundColor,
    color,
    button,
    buttonLink,
    buttonText,
    buttonColor,
    buttonBackgroundColor }) => {
    return (
        <section className="container-slide-panel" style={{
            flexDirection: `${mirror ? 'row-reverse' : 'row'}`,
            backgroundColor: `${backgroundColor || "none"}`,
            color: color
        }
        }>
            {svg ? svg : <img className="image" src={image} alt={imageAlt} title={imageAlt} />}
            <div className="container-inner">
                <h3 className="heading"> {heading} </h3>
                <p className="paragraph"> {text} </p>
                {button ? <Link to={buttonLink} title={`Visit the "${buttonText}" page.`}>
                    <button className="link-button" style={{
                        backgroundColor: buttonBackgroundColor,
                        color: buttonColor
                    }}>
                        {buttonText}
                        <svg className="button-icon" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 30H87M87 30L57 5M87 30L57 55" stroke={buttonColor} strokeWidth="20" strokeLinecap="round" />
                        </svg>
                    </button>
                </Link> : null}
            </div>
        </section>
    )
}

export default SlidePanel