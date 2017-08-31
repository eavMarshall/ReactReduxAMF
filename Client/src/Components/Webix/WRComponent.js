import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class WRComponent extends Component {
  constructor(props) {
    /*if (this.constructor === WRComponent) {
      throw new Error("Do not instantiate WRComponent directly");
    }
    if (null === this.getLayout()) {
      throw new Error("You must override getLayout()");
    }*/
    super(props);
  }

  render() {
    return (
      <div ref="root"></div>
    );
  }

  getRoot() {
    ReactDOM.findDOMNode(this.refs.root);
  }

  getLayout() {
    return {
        view:"label",
        label: "Hello world from inside a webix react component",
        inputWidth:100,
        align:"left"
    }
  }

  componentDidMount(){
    let layout = this.getLayout();
    layout.container = this.getRoot();

    this.ui = window.webix.ui(layout);
  }

  componentWillUnmount(){
    if (null != this.ui) {
      this.ui.destructor();
    }
    this.ui = null;
  }

  componentWillUpdate(props){
      if (props.data)
        this.setWebixData(props.data);
      if (props.select)
        this.select(props.select);
  }

  shouldComponentUpdate(){
    return true;
  }
}
