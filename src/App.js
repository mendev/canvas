import React, { Component } from 'react';
import logo from './logo.svg';
import Canvas from './canvas/canvas'
import './App.css';

class App extends Component {


    render() {
        var conf = require("./config.json");
        return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{conf["drawing-title"]}</h1>
        </header>
        <Canvas
            elements = {conf["elements"]}
            width = {1024}
            height = {640}
            text = "Welcome to Canvas"/>
      </div>
    );
  }
}

export default App;
