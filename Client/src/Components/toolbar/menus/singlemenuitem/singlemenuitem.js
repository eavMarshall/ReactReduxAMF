import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './singlemenuitem.css';

class SingleMenuItem extends Component {
  setActive() {
    this.isActive = !this.isActive;
    if (this.isActive) { this.refs.singleMenuItem.classList.add("active"); } else { this.refs.singleMenuItem.classList.remove("active"); }
  }

  render() {
    return (
      <div ref="singleMenuItem" className="singleMenuItemContainer" onClick={this.setActive.bind(this)}>
        <span className={"webix_icon " + this.props.icon}></span>
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
