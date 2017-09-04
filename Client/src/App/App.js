import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux'
import './App.css';
import Store from './Store.js';
import amfClient from '../Components/amf/amfClient.js';
import LoginPage from './Pages/Login/LoginPage.js';
import MainPage from './Pages/MainPage/MainPage.js';
import AppReducer from './AppReducer.js'; // call this after store

import SideMenuPage from '../Components/Webix/SideMenuPage/SideMenuPage.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { LoggedIn : false };
    Store.subscribe(function() {
      this.setState({ LoggedIn : Store.getState().AppReducer.LoggedIn });
    }.bind(this));
  }

  render() {
    return (
      <Provider store={Store}>
        { !this.state.LoggedIn ? <LoginPage/> :
          <SideMenuPage className="fullScreen">
            <div className="fullScreen">Inner div</div>
          </SideMenuPage>
        }
      </Provider>
    );
  }
}
