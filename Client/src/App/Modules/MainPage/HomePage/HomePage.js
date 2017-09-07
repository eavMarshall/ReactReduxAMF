import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from './Actions.js';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div>Home - this is a child div</div>
    );
  }
}

export default HomePage;
/*
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
      ActionLogin : ActionLogin,
      UpdateToolbar : actions.ActionUpdateToolbar,
      ActionSideMenuOpen: actions.ActionSideMenuOpen
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    LoginStatus: state.Session.status.Login,
    auth: state.Session.auth,
    appName: state.App.info.appName,
    toolBarLabel: state.App.info.toolBarLabel.value,
    pageid: state.App.info.toolBarLabel.id,
    sideBarMenuItems: state.MainPage.sideBarMenuItems,
    sideMenuOpen: state.MainPage.sideMenuOpen
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(MainPage);
*/
