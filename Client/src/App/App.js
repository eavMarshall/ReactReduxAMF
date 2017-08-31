import React, { Component } from 'react';
import './App.css';
import amfClient from '../Components/amf/amfClient.js';
import WRComponent from '../Components/Webix/WRComponent.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WRComponent/>
      </div>
    );
  }
}

export default App;
