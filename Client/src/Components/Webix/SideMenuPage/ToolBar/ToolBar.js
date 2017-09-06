import WRComponent from '../../WRComponent.js';
import './toolbar.css';
export default class ToolBar extends WRComponent {
  setWebixData(state) {
    let toolBarLabel = $$("toolBarLabel");
    toolBarLabel.define({ label : state.toolBarLabel });
    toolBarLabel.refresh();
  }
  getLayout() {
    return { view: "toolbar",
      css: "sidenavmain",
      elements: [
        {
          view: "button",
          type: "icon",
          icon: "bars",
          width: 40,
          align: "center",
          css: "app_button",
          click: this.props.onMenuOpen
        },
        {
          id: "toolBarLabel",
          view: "label",
          label: this.props.toolBarLabel,
          height:"46",
        },
        {},
        {
          id: "logout",
          view: "button",
          type: "icon",
          width: 45,
          css: "app_button",
          icon: "sign-out",
          badge: 0,
          click: this.props.logout,
        }
    ]};
  }
}
