import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Login from '../../Actions.js';
import WRComponent from '../../../Components/Webix/WRComponent.js';
import './Login.css';

class LoginPage extends WRComponent {
  setWebixData(data) {}
  loginHandler() {
    this.props.ActionLogin(true);
  }
  getLayout() {
    return {
        rows:[
        {},
        {
          cols: [
          {},
          {
            view:"form",
            id:"LoginPageMainForm",
            testing: "this is a test",
            width:300,
            elements:[
                { view:"label", label: "Your Welcome message here", margin:5, align:"center"},
                { id: "LoginPageUsername", view:"text", label:"Username", name:"username"},
                { id: "LoginPagePassword", view:"text", type:"password", label:"Password", name:"password" },
                { id: "LoginPageLoginButton", view:"button", value:"Login", width:100, "click": this.loginHandler.bind(this) }
              ]
            },
            {},
          ]
        },
        {},
      ]
    };
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ActionLogin:Login}, dispatch);
}

function mapStateToProps(state) {
  return {
    LoginStatus: state.Session.status.Login
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginPage);
