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
import HomePage from './HomePage/HomePage.js'
import './MainPage.css';

class MainPage extends Component {
  menuToggleHandler() { this.props.ActionSideMenuOpen(!this.props.sideMenuOpen); this.refs.ToolBar.adjust();}
  toolbarLogoutHandler() { this.props.ActionLogin(false); }

  render() {
    return (
      <ToolBar id="root" toolBarName="Default Toolbar Label" appName="Default app name"
        selectedPage={this.props.selectedPage}
        >
        <SideBarMenu>
          <SingleMenuItem label="Home" icon="fa-home" pageid="home" page={() => <HomePage/>}/>
          <SingleMenuItem label="Client" icon="fa-user" pageid="client" page={() => <div>Client - this is a child div</div>}/>
          <GroupMenuItem label="Dashboards" icon="fa-dashboard">
            <MenuItem label="Dashboards 1" pageid="dashboard1" page={() => <div>Dashboards 1 - this is a child div</div>}/>
            <MenuItem label="Dashboards 2" pageid="dashboard2" page={() => <div>Dashboards 2 - this is a child div</div>}/>
            <MenuItem label="Dashboards 3" pageid="dashboard3" page={() => <div>Dashboards 3 - this is a child div</div>}/>
          </GroupMenuItem>
          <GroupMenuItem label="Settings" icon="fa-cogs">
            <MenuItem label="Setting 1" pageid="setting1" page={() => <div>Setting 1 - this is a child div</div>}/>
            <MenuItem label="Setting 2" pageid="setting2" page={() => <div>Setting 2 - this is a child div</div>}/>
            <MenuItem label="Setting 3" pageid="setting3" page={() => <div>Setting 3 - this is a child div</div>}/>
            <MenuItem label="Setting 4" pageid="setting4" page={() => <div>Setting 4 - this is a child div</div>}/>
          </GroupMenuItem>
        </SideBarMenu>
      </ToolBar>
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
    sideMenuOpen: state.MainPage.sideMenuOpen,
    selectedPage: state.MainPage.selectedPage
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(MainPage);
