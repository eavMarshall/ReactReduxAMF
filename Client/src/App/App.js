import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import MainPage from './Modules/MainPage/MainPage.js';
import LoginPage from './Modules/LoginPage/LoginPage.js';

class App extends Component {
  render() {
    return (
      <div>
        { this.props.LoginStatus ? <MainPage/> : <LoginPage/> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    LoginStatus: state.App.status.Login
  };
}

export default connect(mapStateToProps)(App);
