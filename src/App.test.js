import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// This is currently breaking due to DOM not being available for custom hooks(?).
test('App renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
})