import React, { Component } from 'react';
import SideBarMenu from './menus/sidebarmenu.js';
import MenuItem from './menus/groupmenuitem/menuitem/menuitem.js';
import './toolbar.css';
import ic_menu_white from './ic_menu_white_24px.svg';

class ToolBar extends Component {
  render() {
    return (
      <div>
        <div ref="sidebarmenu" className="sidenav" style={this.props.sideMenuOpen ? {left:"0px"} : {left:"-300px"}}>
          {this.props.children}
        </div>
        <div className="sidenavmain" style={this.props.sideMenuOpen && this.props.width > 700 ? {"marginLeft":"300px"} : {"marginLeft":"0px"}}>
          <div id="bar" className="toolBarContainer toolbar">
            <div>
              <i className=" menuButton material-icons" onClick={this.props.onMenuClick}>menu</i>
            </div>
            <div className="toolBarLabel">
              <span className="toolBarLabelText">{this.props.toolBarName}</span>
            </div>
            <div>
              <i className="menuButton material-icons" onClick={this.props.onLogoutClick}>exit_to_app</i>
            </div>
          </div>
          <div>
            {this.props.selectedPage}
          </div>
        </div>
      </div>
    );
  }
}

export default ToolBar;
