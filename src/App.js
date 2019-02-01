import React, { Component } from 'react';
import CompoundComponent from './compoundComponent/CompoundComponent';
import FlexibleCompoundComponent from './flexibleCompoundComponent/FlexibleCompoundComponent';
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
          
          <br/><hr/>

          <h1>Flexible CompoundComponent</h1>
          <FlexibleCompoundComponent onChange={value => console.log("option Selected", value)}>
            <FlexibleCompoundComponent.Option value="01">1</FlexibleCompoundComponent.Option>
            <FlexibleCompoundComponent.Option value="02">2</FlexibleCompoundComponent.Option>
            <FlexibleCompoundComponent.Option value="03">3</FlexibleCompoundComponent.Option>
            <FlexibleCompoundComponent.Option>40</FlexibleCompoundComponent.Option>
            <FlexibleCompoundComponent.Option value="custom" onClick={e => alert("Different Click")}>diferrent</FlexibleCompoundComponent.Option>
          </FlexibleCompoundComponent>
        </header>
      </div>
    );
  }
}

export default App;
