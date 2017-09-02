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

  _windowsResize(event) { this.adjust(); this.windowsResize(event); }
  render() { return (<div ref="root" className="fullScreen"></div>); }
  componentWillUpdate(props) { this.setWebixData(props); }
  shouldComponentUpdate() { return true; }

  componentDidMount() {
    if (null != this.ui) {
      this.ui.destructor();
      this.ui = null;
    }
    let layout = Object.assign({}, this.getLayout());
    layout.container = ReactDOM.findDOMNode(this.refs.root);
    this.ui = window.webix.ui(layout);
    window.addEventListener('resize', this._windowsResize.bind(this));
    this.aftercomponentDidMount();
  }

  componentWillUnmount(){
    this.ui.destructor();
    this.ui = null;
    window.removeEventListener("resize", this._windowsResize.bind(this));
  }

  /*
    functions to be called or override
    TODO document theses functions
  */
  adjust() { if (null != this.ui) { this.ui.adjust(); } }
  aftercomponentDidMount() {}
  webixRedraw() { this.componentDidMount(); }
  windowsResize(event) {}
}
