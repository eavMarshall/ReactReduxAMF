import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ActionLogin from '../../Actions.js';
import * as actions from './Actions.js';
import SideMenu from '../../../Components/Webix/SideMenu/SideMenu.js';
import ToolBar from '../../../Components/Webix/ToolBar/ToolBar.js';
import './MainPage.css';

import HomePage from './HomePage/HomePage.js'

class MainPage extends Component {
  componentDidMount() { }
  getPage() {
    switch(this.props.pageid) {
      case 'home': return <HomePage/>;
      case 'client': return <div>Client - this is a child div</div>;
      case 'dashboard1': return <div>Dashboards 1 - this is a child div</div>;
      case 'dashboard2': return <div>Dashboards 2 - this is a child div</div>;
      case 'accordions': return <div>Accordions - this is a child div</div>;
      case 'portlets': return <div>Portlets - this is a child div</div>;
      case 'tables1': return <div>Datatable - this is a child div</div>;
      case 'tables2': return <div>TreeTable- this is a child div</div>;
      case 'tables3': return <div>Pivot - this is a child div</div>;
    }
    return <img id="loadingImage" className="fitLoadingImage centerLoadingImage loadingImageSpin" src="react.svg"></img>;
  }

  menuToggleHandler() { this.props.ActionSideMenuOpen(!this.props.sideMenuOpen); this.refs.ToolBar.adjust();}
  toolbarLogoutHandler() { this.props.ActionLogin(false); }

  render() {
    return (
      <div id="root">
        <div>
          <SideMenu
            ref="sidenav"
            onMenuChange={this.props.UpdateToolbar.bind(this)}
            label={this.props.appName}
            sideBarMenuItems={this.props.sideBarMenuItems}
            auth = {this.props.auth}
            innerstyle={this.props.sideMenuOpen ? { width : '300px' } : { width : '0px' }}
          />
        </div>
        <div
          ref="sidenavmain"
          className="fullScreen"
          style={this.props.sideMenuOpen ? { marginLeft : '300px' } : { marginLeft : '0px' }}
        >
          <ToolBar
            ref="ToolBar"
            onMenuOpen={this.menuToggleHandler.bind(this)}
            toolBarLabel={this.props.toolBarLabel}
            logoutHandler={this.toolbarLogoutHandler.bind(this)}
          />
          { this.getPage() }
        </div>
      </div>
    );
  }
}

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
