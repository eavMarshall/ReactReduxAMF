import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectableMenu from '../../selectableMenu.js'
import './menuitem.css';

class MenuItem extends SelectableMenu {
  setHidden() {
    this.hide = !this.hide;
    if (this.hide) {
      this.refs.menuItem.style.height = "0px";
      this.refs.menuItemLabel.style.height = "0px";
    } else {
      this.refs.menuItem.style.height = "48px";
      this.refs.menuItemLabel.style.height = "48px";
    }
  }

  render() {
    return (
      <div ref="root" className="menuItemContainer" onClick={this.changeSelectedMenuID.bind(this)}>
        <span ref="menuItemLabel" className="menuItemChildren menuLabel">{this.props.label}</span>
      </div>
    );
  }
}

export default MenuItem;
