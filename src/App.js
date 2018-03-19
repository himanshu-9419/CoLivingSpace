import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import PropertyView from './containers/PropertyView/propertyView';
import axios from 'axios';
class App extends Component {
  render() {
    return (
      <div className="App ">
        <Header/>
        <Banner/>
        <PropertyView/>
      </div>
    );
  }
}

export default App;
