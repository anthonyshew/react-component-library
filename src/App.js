import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './lib/redux';

import AppWrapper from './components/AppWrapper'

const App = (props) => {

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener(
      "resize", () => setViewportHeight(window.innerHeight)
    )
  }, [])

  return (
    <Provider store={store}>
      <AppWrapper viewportHeight={viewportHeight}>
        Hi, world.
        <div style={{ position: "absolute", bottom: 0 }}>Don't cut me off.</div>
      </AppWrapper>
    </Provider>
  );
}

export default App;
