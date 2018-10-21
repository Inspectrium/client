import React, { Component } from 'react';
import logo from './logo.svg';
import MenuHeader from './MenuHeader'
import Form from './Form'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MenuHeader/>
      <Form/>
      </div>
    );
  }
}

export default App;
