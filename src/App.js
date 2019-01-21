import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home'
import { Normalize } from '@smooth-ui/core-sc'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Normalize />
        <Home />
      </div>
    );
  }
}

export default App;
