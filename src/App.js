import React, { Component } from 'react';
import './App.css';
import Toggle from './components/toggle/toggle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title"><span>Wisen switch</span></h1>
          <Toggle onToggle={(...args) => console.log('Wisen is', ...args)} />
      </div>
    );
  }
}

export default App;
