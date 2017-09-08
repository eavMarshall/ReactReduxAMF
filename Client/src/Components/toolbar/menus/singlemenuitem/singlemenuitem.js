import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './singlemenuitem.css';
import SelectableMenu from '../selectableMenu.js'

class SingleMenuItem extends SelectableMenu {
  render() {
    return (
      <div ref="root" className="singleMenuItemContainer" onClick={this.changeSelectedMenuID.bind(this)}>
        <i className="material-icons">{this.props.icon}</i>
        <span className="singleMenuLabel">{this.props.label}</span>
      </div>
    );
  }
}

SingleMenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default SingleMenuItem;
