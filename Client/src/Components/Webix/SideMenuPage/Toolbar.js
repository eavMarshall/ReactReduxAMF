import WRComponent from '../WRComponent.js';

export default class ToolBar extends WRComponent {
  constructor(props) {
    super(props);
    this.onMenuOpen = props.onMenuOpen;
    this.toolBarLabel = (null == props.toolBarLabel) ? "" : props.toolBarLabel;
  }
  setWebixData(data) {
    console.log(data);
    $$("toolBarLabel").define({ label:data.toolBarLabel });
    $$("toolBarLabel").refresh();
  }
  getLayout() {
    return { view: "toolbar",
      css: "sidenavmain",
      elements: [
        {
          view: "button",
          type: "icon",
          icon: "bars",
          width: 37,
          align: "left",
          css: "app_button",
          click: this.onMenuOpen
        },
        {
          id: "toolBarLabel",
          view: "label",
          label: this.toolBarLabel,
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
          //click: this.logout.bind(this),
        }
    ]};
  }
}
