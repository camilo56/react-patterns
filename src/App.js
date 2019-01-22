import React, { Component } from 'react';
import CompoundComponent from './compoundComponent/CompoundComponent';
// import logo from './assets/logo.svg';
// import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>CompoundComponent</h1>
          <CompoundComponent onChange={value => console.log("option Selected", value)}>
            <CompoundComponent.Option value="01">1</CompoundComponent.Option>
            <CompoundComponent.Option value="02">2</CompoundComponent.Option>
            <CompoundComponent.Option value="03">3</CompoundComponent.Option>
            <CompoundComponent.Option>4</CompoundComponent.Option>
            <CompoundComponent.Option value="custom" onClick={e => alert("Different Click")}>diferrent</CompoundComponent.Option>
          </CompoundComponent>
        </header>
      </div>
    );
  }
}

export default App;
