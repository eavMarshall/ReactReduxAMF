import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ActionLogin from '../../Actions.js';
import * as actions from './Actions.js';
import ToolBar from '../../../Components/toolbar/toolbar.js'
import SideBarMenu from '../../../Components/toolbar/menus/sidebarmenu.js'
import SingleMenuItem from '../../../Components/toolbar/menus/singlemenuitem/singlemenuitem.js'
import GroupMenuItem from '../../../Components/toolbar/menus/groupmenuitem/groupmenuitem.js'
import MenuItem from '../../../Components/toolbar/menus/groupmenuitem/menuitem/menuitem.js'
import './MainPage.css';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {width: window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth };
      this.updateDimensions = this.updateDimensions.bind(this);
  }
  menuToggleHandler() { this.props.ActionSideMenuOpen(!this.props.sideMenuOpen);}
  toolbarLogoutHandler() { this.props.ActionLogin(false); }
  changeSideMenuID(menudata) {
    this.props.SelectPage(menudata.id);
  }
  checkAuth(element) {
    if (this.props.auth.indexOf(element.props.pageid) == -1) return null;
    return element;
  }
  logoutHandler() { this.props.ActionLogin(false); }
  updateDimensions() {
    this.setState({width: window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth});
  }
  componentWillMount() { this.updateDimensions(); }
  componentDidMount() { window.addEventListener("resize", this.updateDimensions); }
  componentWillUnmount() { window.removeEventListener("resize", this.updateDimensions); }
  render() {
    return (
      <ToolBar id="root" toolBarName={this.props.selectedPage.props.label}
        selectedPage={this.props.selectedPage}
        sideMenuOpen={this.props.sideMenuOpen}
        width={this.state.width}
        onMenuClick={this.menuToggleHandler.bind(this)}
        onLogoutClick={this.logoutHandler.bind(this)}
        >
        <SideBarMenu appName={this.props.appName} onMenuClick={this.menuToggleHandler.bind(this)}>
          {this.checkAuth(<SingleMenuItem label="Home" icon="home" pageid="home" selectedPageID={this.props.selectedPageID} change={this.changeSideMenuID.bind(this)}/>)}
          {this.checkAuth(<SingleMenuItem label="Client" icon="person" pageid="client"selectedPageID={this.props.selectedPageID} change={this.changeSideMenuID.bind(this)}/>)}
          <GroupMenuItem label="Dashboards" icon="dashboard">
            {this.checkAuth(<MenuItem label="Dashboards 1" pageid="dashboard1" selectedPageID={this.props.selectedPageID} change={this.changeSideMenuID.bind(this)}/>)}
            {this.checkAuth(<MenuItem label="Dashboards 2" pageid="dashboard2" selectedPageID={this.props.selectedPageID} change={this.changeSideMenuID.bind(this)}/>)}
            {this.checkAuth(<MenuItem label="Dashboards 3" pageid="dashboard3" selectedPageID={this.props.selectedPageID} change={this.changeSideMenuID.bind(this)}/>)}
          </GroupMenuItem>
          <GroupMenuItem label="Settings" icon="settings">
            {this.checkAuth(<MenuItem label="Setting 1" pageid="setting1" selectedPageID={this.props.selectedPageID} change={this.changeSideMenuID.bind(this)}/>)}
            {this.checkAuth(<MenuItem label="Setting 2" pageid="setting2" selectedPageID={this.props.selectedPageID} change={this.changeSideMenuID.bind(this)}/>)}
            {this.checkAuth(<MenuItem label="Setting 3" pageid="setting3" selectedPageID={this.props.selectedPageID} change={this.changeSideMenuID.bind(this)}/>)}
            {this.checkAuth(<MenuItem label="Setting 4" pageid="setting4" selectedPageID={this.props.selectedPageID} change={this.changeSideMenuID.bind(this)}/>)}
          </GroupMenuItem>
        </SideBarMenu>
      </ToolBar>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    ActionLogin : ActionLogin,
    ActionSideMenuOpen: actions.ActionSideMenuOpen,
    SelectPage: actions.SelectPage
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    LoginStatus: state.Session.status.Login,
    auth: state.App.auth,
    appName: state.App.info.appName,
    selectedPage: state.App.Pages.selectedPage,
    selectedPageID: state.App.Pages.selectedPageID,
    sideMenuOpen: state.App.sideMenuOpen
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(MainPage);
