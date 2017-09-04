import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './sidebar.js';
require("./sidebar.css");
import SideMenu from './SideMenu.js';
import ToolBar from './ToolBar.js';
require("./SideMenu.css");

export default class SideMenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = { toolBarLabel: "", LoggedIn : false };
  }
  onMenuOpen() {
    if (this.refs.sidenav.refs.root.firstChild.style.width == "0px") {
      this.refs.sidenav.refs.root.firstChild.style.width = "300px";
      this.refs.sidenavmain.style.marginLeft = "300px";
    } else {
      this.refs.sidenav.refs.root.firstChild.style.width = "0px";
      this.refs.sidenavmain.style.marginLeft = "0px";
    }
    this.refs.ToolBar.adjust();
  }
  componentDidMount() {
    this.refs.sidenav.refs.root.firstChild.style.width = "0px";
    this.refs.sidenavmain.style.marginLeft = "0px";
  }
  onMenuChange(label) {
    console.log(label);
    this.setState({toolBarLabel:label});
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <SideMenu ref="sidenav" onMenuChange={this.onMenuChange.bind(this)}/>
        <div ref="sidenavmain">
          <ToolBar ref="ToolBar" onMenuOpen={this.onMenuOpen.bind(this)} toolBarLabel={this.state.toolBarLabel}/>
          {this.props.children}
        </div>
      </div>
    );
  }
}
  /*
  constructor(props) {
    super(props);
    this.sideBarMenu = (null == props.sideBarMenu) ? [
        { id: "home",icon: "home", value: "Home"},
        {id: "dashboard", icon: "dashboard", value: "Dashboards",  data:[
            { id: "dashboard1", value: "Dashboard 1"},
            { id: "dashboard2", value: "Dashboard 2"}
        ]},
        {id: "layouts", icon: "columns", value:"Layouts", data:[
            { id: "accordions", value: "Accordions"},
            { id: "portlets", value: "Portlets"}
        ]},
        {id: "tables", icon: "table", value:"Data Tables", data:[
            { id: "tables1", value: "Datatable"},
            { id: "tables2", value: "TreeTable"},
            { id: "tables3", value: "Pivot"}
        ]}
    ] : props.sideBarMenu;

    this.firstSelectedID = (null != props.firstSelectedID) ? props.firstSelectedID : "home";
    this.minWidth = (null != props.minWidth) ? props.minWidth : 1000;
  }
  setWebixData(data) { }
  windowsResize(event) {
    if (window.innerWidth < this.minWidth) {
      $$("SideMenu").collapse();
    } else {
      $$("SideMenu").expand();
    }
  }

  logout() {
    console.log("not implemented");
  }

  getSelectedMenuName(id) {
    for (var i = 0; i < this.sideBarMenu.length; i++) {
      if (null != this.sideBarMenu[i]["data"]) {
        for (var j = 0; j < this.sideBarMenu[i].data.length; j++) {
          if (id == this.sideBarMenu[i].data[j].id) {
            return this.sideBarMenu[i].data[j].value;
          }
        }
      } else {
        if (id == this.sideBarMenu[i].id) {
          return this.sideBarMenu[i].value;
        }
      }
    }
    return "Unknown";
  }

  sideBarItemSelectHandler(id) {
    $$("toolbar_label").define("label", this.getSelectedMenuName(id));
    $$("toolbar_label").refresh();
    this.windowsResize();
  }

  aftercomponentDidMount() {
    let menuItems = document.querySelectorAll('[webix_tm_id="'+this.firstSelectedID+'"]');
    let menuItem = menuItems[0];
    if (null != menuItem) {
      menuItem.click();
    }
    this.windowsResize();
  }

  getLayout() {
    let menuLayout = JSON.parse(JSON.stringify(this.sideBarMenu)); //protect sideBarMenu from webix
    return {
      css:"fullScreen",
      cols: [
        {rows:[
          {
            height:"54",
              cols:[
              {
                id: "appName_label",
                view: "label",
                label: this.appName,
                align:"center"
              },
          ]},
          {
            id: "SideMenu",
            view: "sidebar",
            data: menuLayout,
            on: {
              onAfterSelect: this.sideBarItemSelectHandler.bind(this)
            }
          },
        ]},
        {rows: [
          { view: "toolbar",
            css: "toolbar",
            elements: [
              {
                view: "button",
                type: "icon",
                icon: "bars",
                width: 37,
                align: "left",
                css: "app_button",
                click: function(){
                    $$("SideMenu").toggle()
                }
              },
              {
                id: "toolbar_label",
                view: "label",
                label: "",
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
                click: this.logout.bind(this),
              }
          ]},
          {
            id: "contentArea",
            rows: [
              {}
            ]
          }
        ]
      }
    ]};
  }
}
*/
