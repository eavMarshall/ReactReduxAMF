import React, { Component } from 'react';

class SelectableMenu extends Component {
  changeSelectedMenuID() {
    this.props.change({id:this.props.pageid, label:this.props.label});
  }
  updateSelected() {
    if (this.props.pageid == this.props.selectedPageID) {
      this.refs.root.classList.add("active");
    } else {
      this.refs.root.classList.remove("active");
    }
  }
  componentDidUpdate() { this.updateSelected(); }
  componentDidMount() { this.updateSelected(); }
}

export default SelectableMenu;
