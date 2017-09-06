import WRComponent from '../WRComponent.js';
import './toolbar.css';
export default class ToolBar extends WRComponent {
  constructor(props) {
    super(props);
    this.rootClass="toolBarHeight";
  }
  setWebixData(state) {
    let toolBarLabel = $$("toolBarLabel");
    toolBarLabel.define({ label : state.toolBarLabel == null ? "" : state.toolBarLabel });
    toolBarLabel.refresh();
  }
  getLayout() {
    let menuBtn =
    {
      view: "button",
      type: "icon",
      icon: "bars",
      width: 40,
      align: "center",
      css: "app_button",
    };
    if (null != this.props.onMenuOpen) menuBtn.click = this.props.onMenuOpen


    let logoutBtn =
    {
      id: "logout",
      view: "button",
      type: "icon",
      width: 45,
      css: "app_button",
      icon: "sign-out",
      badge: 0,
    };
    if (null != this.props.logoutHandler) logoutBtn.click = this.props.logoutHandler

    return { view: "toolbar",
      css: "sidenavmain",
      elements: [
        menuBtn,
        {
          id: "toolBarLabel",
          view: "label",
          css: "toolBarHeight",
          label: this.props.toolBarLabel == null ? "" : this.props.toolBarLabel,
          height:"46",
        },
        {},
        logoutBtn
    ]};
  }
}
