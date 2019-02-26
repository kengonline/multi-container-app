import React, { Component } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom'

import HomePage from "./containers/HomePage";
import OtherPage from "./containers/OtherPage";

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route path="/other" component={OtherPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
