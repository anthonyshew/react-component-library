import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import GA from './components/lib/GoogleAnalytics'
import { StateProvider } from './components/lib/StateProvider'
import { initialState, reducer } from './lib/state/state'
import LocalStorageManager from './components/lib/LocalStorageManager'

import AppWrapper from './components/AppWrapper'

const App = (props) => {
  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        {GA.init() && <GA.RouteTracker />}
        <LocalStorageManager />
        <AppWrapper>
          <Switch>
            <Route exact path="/" render={() => <div className="replace-me-with-home-page">Replace me with a home page!</div>} />
          </Switch>
          {[...Array(3)].map((elem, index) => <p key={index}>Lorem ipsum, my dude!</p>)}
          <div style={{ position: "absolute", bottom: 0 }}>Don't cut me off. EVER. Or unless the page is long enough. :D</div>
        </AppWrapper>
      </StateProvider>
    </Router >
  )
}

export default App;
