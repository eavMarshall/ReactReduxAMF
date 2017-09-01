import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class WRComponent extends Component {
  constructor(props) {
    super(props);
    if (this.constructor === WRComponent) {
      throw new Error("Do not instantiate WRComponent directly");
    }
    if (null === this.getLayout) {
      throw new Error("You must override "+this.constructor+".getLayout()");
    }
    if (null == this.setWebixData) {
      throw new Error("You must override "+this.constructor+".setWebixData()");
    }
  }

  render() {
    return (
      <div ref="root" className="fullScreen"></div>
    );
  }

  webixRedraw() {
    this.componentDidMount();
  }

  componentDidMount() {
    if (null != this.ui) {
      this.ui.destructor();
      this.ui = null;
    }
    let layout = Object.assign({}, this.getLayout());
    layout.container = ReactDOM.findDOMNode(this.refs.root);
    this.ui = window.webix.ui(layout);
    this.aftercomponentDidMount();
  }

  aftercomponentDidMount() {}

  componentWillUnmount(){
    this.ui.destructor();
    this.ui = null;
  }

  componentWillUpdate(props){
    this.setWebixData(props);
  }

  shouldComponentUpdate(){
    return true;
  }
}
