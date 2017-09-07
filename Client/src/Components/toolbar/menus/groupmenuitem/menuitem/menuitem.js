import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './menuitem.css';

class MenuItem extends Component {
  setActive() {
    this.isActive = !this.isActive;
    if (this.isActive) { this.refs.menuItem.classList.add("active"); } else { this.refs.menuItem.classList.remove("active"); }
  }

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
      <div ref="menuItem" className="menuItemContainer" onClick={this.setActive.bind(this)}>
        <span ref="menuItemLabel" className="menuItemChildren menuLabel">{this.props.label}</span>
      </div>
    );
  }
}

export default MenuItem;
