import React, { Component } from 'react';
import MenuItem from './groupmenuitem/menuitem/menuitem.js';
import './sidebarmenu.css';

class SideBarMenu extends Component {
  render() {
    return (
      <div className="sidebarmenuContainer">
        <div className="sideMenuTitle">
          <div className="sideMenuLabel">
            <span className="sideMenuLabelText">{this.props.appName}</span>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default SideBarMenu;
