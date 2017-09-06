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

    this.rootClass = props.rootClass == null ? "fullScreen" : props.rootClass;
    this.innerstyle = props.innerstyle == null ? {} : props.innerstyle;
  }

  _windowsResize(event) { this.adjust(); this.windowsResize(event); }
  _updateSyles(props) {
    if (null == props) props = this.props;
    if (null != props.innerstyle) {
      let container = ReactDOM.findDOMNode(this.refs.root);
      let webixContainer = container.firstChild;
      if (null != webixContainer) {
        for(var key in props.innerstyle) {
          webixContainer.style[key] = props.innerstyle[key];
        }
      }
    }
  }
  componentWillUpdate(props) {
    this._updateSyles(props);
    this.setWebixData(props);
  }
  shouldComponentUpdate() { return true; }
  render() {
    if (null == this.props.innerstyle)
      return (<div ref="root" className={this.rootClass}/>);
    else
      return (<div ref="root" className={this.rootClass} style={this.props.innerstyle} />);
  }

  componentDidMount() {
    if (null != this.ui) {
      this.ui.destructor();
      this.ui = null;
    }
    let layout = Object.assign({}, this.getLayout());
    layout.container = ReactDOM.findDOMNode(this.refs.root);
    this.ui = window.webix.ui(layout);
    this._updateSyles();
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
