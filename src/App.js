import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import GA from './components/lib/GoogleAnalytics'
import { StateProvider } from './components/lib/StateProvider'
import { initialState, reducer } from './lib/state/state'
import LocalStorageManager from './components/lib/LocalStorageManager'

import AppWrapper from './components/AppWrapper'

const App = (props) => {

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener("resize", () => setViewportHeight(window.innerHeight))
  }, [])

  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        {GA.init() && <GA.RouteTracker />}
        <LocalStorageManager />
        <AppWrapper viewportHeight={viewportHeight}>
          Hi, world.
        <Switch>

          </Switch>
          <div style={{ position: "absolute", bottom: 0 }}>Don't cut me off.</div>
        </AppWrapper>
      </StateProvider>
    </Router >
  )
}

export default App;
