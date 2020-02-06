//TODO: Linking, accessibility, be able to add className

import React from 'react'
import PropTypes from 'prop-types'
import './_SVG.scss'

const getPath = (name, className, handleClick) => {
    switch (name) {
        case "logo":
            return (
                <>
                    <svg className={className} viewBox="0 0 279 281" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 20C0 8.95431 8.95431 0 20 0H139.07H258.14C269.186 0 278.14 8.95431 278.14 20V145.094C278.14 150.711 275.778 156.069 271.632 159.858L152.562 268.67C144.922 275.652 133.218 275.652 125.578 268.67L6.5081 159.858C2.36185 156.069 0 150.711 0 145.094V20Z" fill="#770000" />
                        <path d="M0 20C0 8.95431 8.95431 0 20 0H139.07H258.14C269.186 0 278.14 8.95431 278.14 20V145.094C278.14 150.711 275.778 156.069 271.632 159.858L152.562 268.67C144.922 275.652 133.218 275.652 125.578 268.67L6.5081 159.858C2.36185 156.069 0 150.711 0 145.094V20Z" fill="url(#paint0_diamond)" />
                        <path d="M13.8936 23.7225C13.8936 18.1996 18.3708 13.7225 23.8936 13.7225H139.07H254.246C259.769 13.7225 264.246 18.1996 264.246 23.7225V143.856C264.246 146.679 263.053 149.371 260.961 151.266L145.525 255.877C141.708 259.336 135.888 259.329 132.078 255.862L17.1624 151.265C15.0804 149.37 13.8936 146.685 13.8936 143.87V23.7225Z" fill="#01001D" />
                        <path d="M13.8936 23.7225C13.8936 18.1996 18.3708 13.7225 23.8936 13.7225H139.07H254.246C259.769 13.7225 264.246 18.1996 264.246 23.7225V143.856C264.246 146.679 263.053 149.371 260.961 151.266L145.525 255.877C141.708 259.336 135.888 259.329 132.078 255.862L17.1624 151.265C15.0804 149.37 13.8936 146.685 13.8936 143.87V23.7225Z" fill="url(#paint1_radial)" />
                        <path d="M189.186 138.223L189.153 138.224C166.196 138.736 147.511 136.049 111.707 128.83C107.366 127.954 102.893 127.752 98.5014 128.185C79.1609 130.092 66.4963 130.471 58.6875 129.921C54.7545 129.644 52.265 129.144 50.825 128.598C50.4293 128.448 50.1697 128.319 50.0044 128.222C50.9803 120.527 53.0227 116.477 54.4924 113.562C54.7273 113.097 54.9475 112.66 55.1465 112.242C56.4087 109.59 56.1175 106.8 55.767 104.778C55.3564 102.41 54.9207 100.236 54.524 98.2564C54.4073 97.6741 54.294 97.1087 54.1857 96.5601C53.671 93.9529 54.0155 91.9153 54.8048 90.3408C55.603 88.7483 56.9667 87.4111 58.8376 86.4166C62.6434 84.3937 68.2955 83.9538 73.8597 85.7169C79.6103 87.5389 85.7693 87.3613 91.423 85.3952L94.33 84.3842C98.5258 82.9251 102.03 79.8425 104.702 76.3593C107.39 72.8569 109.397 68.7455 110.522 64.8839C111.316 62.1617 112.659 60.4165 114.198 59.3417C115.757 58.2534 117.726 57.7064 119.985 57.7578C124.572 57.8622 130.017 60.4563 134.028 65.1196C135.317 66.6174 136.623 68.0926 137.954 69.5448C142.335 74.3278 146.973 78.8599 152.071 83.1347C157.405 87.6072 163.232 91.7883 169.783 95.6785C174.963 98.7536 181.496 100.247 187.95 101.533C194.14 102.765 200.674 102.344 206.739 101.953C207.105 101.929 207.469 101.906 207.832 101.883C214.385 101.467 220.383 101.198 225.858 102.637C228.756 103.399 231.225 104.865 232.97 106.973C234.697 109.058 235.856 111.936 235.888 115.8C235.891 116.174 235.879 116.54 235.852 116.9C235.643 117.817 235.451 118.693 235.267 119.533C235.204 119.821 235.142 120.104 235.081 120.383C233.264 125.197 228.423 129.274 221.063 132.393C212.214 136.143 200.579 138.094 189.186 138.223ZM49.7445 128.031C49.7464 128.031 49.7593 128.042 49.7777 128.067C49.7519 128.044 49.7427 128.032 49.7445 128.031ZM110.505 134.712C137.827 140.221 155.486 143.159 172.789 144.015C158.989 144.296 142.066 144.092 121.27 143.352C117.068 143.202 112.691 143.719 108.59 145.279C104.223 146.941 97.5564 148.838 68.6947 148.135C60.4043 147.934 53.4703 142.437 50.9584 134.897C52.9271 135.371 55.3528 135.703 58.2481 135.907C66.571 136.493 79.6387 136.072 99.0723 134.156C102.891 133.78 106.766 133.958 110.505 134.712Z" fill="#FFC700" stroke="#FFF7AA" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <radialGradient id="paint0_diamond" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(278.14) rotate(131.201) scale(248.031 321.553)">
                                <stop stopColor="#BC6E6E" stopOpacity="0.46" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(135.081 112.959) rotate(89.0695) scale(245.652 250.332)">
                                <stop stopColor="#6B6B88" />
                                <stop offset="1" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </>
            )
        case "hamburger":
            return (
                <>
                    <svg className={className} onClick={handleClick} viewBox="0 0 296 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.5" y="1.5" width="293" height="97" rx="6.5" stroke="black" strokeWidth="3" />
                        <rect x="23.5" y="22.5" width="83" height="11" rx="5.5" fill="black" stroke="black" />
                        <rect x="23" y="44" width="84" height="12" rx="6" fill="black" />
                        <rect x="23.5" y="65.5" width="83" height="11" rx="5.5" fill="black" stroke="black" />
                        <path d="M168.905 66H158.857V45.264H158.281L154.505 66H144.201L140.617 45.264H139.977V66H130.057L131.401 26.256H145.801L149.385 47.76H149.897L153.353 26.256H167.561L168.905 66ZM186.033 43.728C184.923 43.728 184.198 44.112 183.857 44.88C183.515 45.6053 183.345 46.736 183.345 48.272H188.913V46.736C188.913 44.7307 187.953 43.728 186.033 43.728ZM186.289 34.576C190.683 34.576 193.819 35.6427 195.697 37.776C197.617 39.8667 198.577 42.8747 198.577 46.8C198.577 47.312 198.427 49.616 198.129 53.712H183.537C183.537 56.912 185.009 58.512 187.953 58.512C189.361 58.512 192.113 58.0213 196.209 57.04L197.105 64.976C193.521 66.0853 189.937 66.64 186.353 66.64C181.958 66.64 178.587 65.2107 176.241 62.352C173.894 59.4507 172.721 55.5253 172.721 50.576C172.721 39.9093 177.243 34.576 186.289 34.576ZM212.233 37.584C214.58 35.5787 217.161 34.576 219.977 34.576C222.793 34.576 224.756 35.2373 225.865 36.56C227.017 37.84 227.593 39.7813 227.593 42.384V66H216.713V46.032C216.713 44.9653 216.244 44.432 215.305 44.432C214.11 44.432 213.108 44.7307 212.297 45.328V66H201.545V35.344H211.337L211.977 37.584H212.233ZM239.036 66.64C233.959 66.64 231.42 63.824 231.42 58.192V35.344H242.3V55.568C242.3 56.6347 242.769 57.168 243.708 57.168C244.903 57.168 245.905 56.8693 246.716 56.272V35.344H257.468V65.872H247.292V63.632H247.036C244.689 65.6373 242.023 66.64 239.036 66.64Z" fill="black" />
                    </svg>
                </>
            )
        default:
            return <svg className=".svg"><path d="" /></svg>
    }
}

const SVG = ({ name, className, handleClick }) => {
    return (
        getPath(name, className, handleClick)
    )
}

SVG.propTypes = {
    name: PropTypes.string.isRequired
}

export default SVG