import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Login from '../../Actions.js';
import * as actions from './Actions.js';
import WRComponent from '../../../Components/Webix/WRComponent.js';
import './Login.css';

class LoginPage extends WRComponent {
  setWebixData(props) {
    $$("LoginPageUsername").setValue(this.props.username);
    $$("LoginPageUsername").refresh();

    if (!props.IsLoggingIn) {
      $$("LoginPageLoginButton").enable();
      $$("LoginPageUsername").enable();
      $$("LoginPagePassword").enable();
      $$("LoginPageMainForm").hideProgress();
    } else {
      $$("LoginPageLoginButton").disable();
      $$("LoginPageUsername").disable();
      $$("LoginPagePassword").disable();
      $$("LoginPageMainForm").showProgress({
          type:"icon"
      });

      //login here, replace with ajax request
      setTimeout(function() {
        //wipe password
        this.props.UpdateLoginDetails({ username: this.props.username, password: ""});
        this.props.setIsLoggingIn(false);
        this.props.ActionLogin(true);
      }.bind(this), 2000);
    }

  }
  loginHandler() {
    this.props.UpdateLoginDetails({
      username: $$("LoginPageUsername").getValue(),
      password: $$("LoginPagePassword").getValue()
    });
    this.props.setIsLoggingIn(true);
  }
  aftercomponentDidMount() {
    webix.extend($$("LoginPageMainForm"), webix.ProgressBar);
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
                { id: "LoginPageUsername", view:"text", label:"Username", name:"username" },
                { id: "LoginPagePassword", view:"text", type:"password", label:"Password", name:"password" },
                { id: "LoginPageLoginButton", view:"button", value:"Login", width:100, "click": this.loginHandler.bind(this), "enable":(!this.props.IsLoggingIn) }
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
  return bindActionCreators({
    ActionLogin:Login,
    UpdateLoginDetails: actions.UpdateLoginDetails,
    setIsLoggingIn: actions.setIsLoggingIn
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    LoginStatus: state.Session.status.Login,
    IsLoggingIn: state.LoginPage.IsLoggingIn,
    username: state.LoginPage.LoginDetails.username
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginPage);
