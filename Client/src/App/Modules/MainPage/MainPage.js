import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ActionLogin from '../../Actions.js';
import * as actions from './Actions.js';
import SideMenu from '../../../Components/Webix/SideMenu/SideMenu.js';
import ToolBar from '../../../Components/Webix/ToolBar/ToolBar.js';
import './MainPage.css';

class MainPage extends Component {
  onMenuOpen() {
    let menu = this.refs.sidenav.refs.root.firstChild;
    if (menu.style.width == "0px") {
      menu.style.width = "300px";
      this.refs.sidenavmain.style.marginLeft = "300px";
    } else {
      menu.style.width = "0px";
      this.refs.sidenavmain.style.marginLeft = "0px";
    }

    this.refs.ToolBar.adjust();
  }
  componentDidMount() {
    this.refs.sidenav.refs.root.firstChild.style.width = "0px";
    this.refs.sidenavmain.style.marginLeft = "0px";
  }
  onMenuChange(label) { this.props.UpdateToolbar(label); }
  onlogout() { this.props.ActionLogin(false); }

  getPage() {
    switch(this.props.pageid) {
      case 'home': return <div>Home - this is a child div</div>;
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

  render() {
    return (
      <div id="root">
        <div>
          <SideMenu
            ref="sidenav"
            onMenuChange={this.onMenuChange.bind(this)}
            label={this.props.appName}
            sideBarMenu={this.props.sideBarMenu}
            auth = {this.props.auth}
          />
        </div>
        <div ref="sidenavmain" className="fullScreen">
          <ToolBar
            ref="ToolBar"
            onMenuOpen={this.onMenuOpen.bind(this)}
            toolBarLabel={this.props.toolBarLabel}
            logout={this.onlogout.bind(this)}
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
      UpdateToolbar : actions.ActionUpdateToolbar
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    LoginStatus: state.Session.status.Login,
    auth: state.Session.auth,
    appName: state.App.info.appName,
    toolBarLabel: state.App.info.toolBarLabel.value,
    pageid: state.App.info.toolBarLabel.id,
    sideBarMenu: state.MainPage.sideBarMenu
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(MainPage);
