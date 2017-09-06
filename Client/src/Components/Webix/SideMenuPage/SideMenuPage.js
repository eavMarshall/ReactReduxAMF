import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import SideMenu from './SideMenu/SideMenu.js';
import ToolBar from './ToolBar/ToolBar.js';
require("./SideMenu/SideMenu.css");

export default class SideMenuPage extends Component {
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
  onMenuChange(label) {
    console.log("Not implemented");
  }

  onlogout() {
    console.log("Not implemented");
  }

  render() {
    return (
      <div>
        <SideMenu ref="sidenav" onMenuChange={this.onMenuChange.bind(this)}/>
        <div ref="sidenavmain">
          <ToolBar ref="ToolBar" onMenuOpen={this.onMenuOpen.bind(this)} toolBarLabel={this.props.appInfo.toolBarLabel.value} logout={this.onlogout.bind(this)}/>
          {this.props.children}
        </div>
      </div>
    );
  }
}
