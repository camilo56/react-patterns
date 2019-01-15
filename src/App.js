import React, { Component } from 'react';
import CompoundComponent from './compoundComponent/CompoundComponent';
// import logo from './assets/logo.svg';
// import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <CompoundComponent/>
        </header>
      </div>
    );
  }
}

export default App;
