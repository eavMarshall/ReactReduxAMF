import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import SideMenuPage from '../../../Components/Webix/SideMenuPage/SideMenuPage.js';
import ActionLogin from '../../Actions.js';
import ActionUpdateToolbar from './Actions.js';
import SideMenu from '../../../Components/Webix/SideMenuPage/SideMenu/SideMenu.js';
import ToolBar from '../../../Components/Webix/SideMenuPage/ToolBar/ToolBar.js';
import './MainPage.css';

class MainPage extends Component {
  onMenuOpen() {
    if (this.refs.sidenav.refs.root.firstChild.style.width == "0px") {
      this.refs.sidenav.refs.root.firstChild.style.width = "300px";
      this.refs.sidenavmain.style.marginLeft = "300px";
    } else {
      this.refs.sidenav.refs.root.firstChild.style.width = "0px";
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

  render() {
    return (
      <div>
        <SideMenu ref="sidenav" onMenuChange={this.onMenuChange.bind(this)} label={this.props.appName}/>
        <div ref="sidenavmain">
          <ToolBar ref="ToolBar" onMenuOpen={this.onMenuOpen.bind(this)} toolBarLabel={this.props.toolBarLabel} logout={this.onlogout.bind(this)}/>
          <div>Hello world</div>
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
      ActionLogin : ActionLogin,
      UpdateToolbar : ActionUpdateToolbar
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    LoginStatus: state.App.status.Login,
    appName: state.App.info.appName,
    toolBarLabel: state.App.info.toolBarLabel.value
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(MainPage);
