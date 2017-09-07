import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './groupmenuitem.css';
import MenuItem from './menuitem/menuitem.js'

class GroupMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { showChild: false };
  }
  toggleShowChildren() {
    this.setState({showChild:(!this.state.showChild)});
    if (this.state.showChild) {
      this.refs.groupitem.classList.remove("active");
    } else {
      this.refs.groupitem.classList.add("active");
    }
  }
  renderChildren(props) {
    return React.Children.map(props.children, child => {
      if (child.type === RadioOption)
        return React.cloneElement(child, {
          showChild: this.state.showChild
        })
      else
        return child
    })
  }v
  render() {
    return (
      <div>
        <div ref="groupitem" className="accordion"
            onClick={this.toggleShowChildren.bind(this)}>
          <span className={"webix_icon " + this.props.icon}></span>
          <span className="singleMenuLabel">{this.props.label}</span>
        </div>
        <div ref="panel" className="panel">
          { this.state.showChild ? this.props.children : null }
        </div>
      </div>
    );
  }
}

export default GroupMenuItem;
