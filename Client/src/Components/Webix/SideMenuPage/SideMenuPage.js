import WRComponent from '../WRComponent.js';
import './sidebar.js';
require("./sidebar.css");

class SideMenuPage extends WRComponent {
  constructor(props) {
    super(props);
    if (null == props.sideBarMenu) {
      this.sideBarMenu = [
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
      ];
    } else {
      this.sideBarMenu = props.sideBarMenu;
    }
    if (null != props.firstSelectedID)
      this.firstSelectedID = props.firstSelectedID;
    else
      this.firstSelectedID = "home";
  }
  setWebixData(data) { }

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
  }

  aftercomponentDidMount() {
    let menuItems = document.querySelectorAll('[webix_tm_id="'+this.firstSelectedID+'"]');
    let menuItem = menuItems[0];
    if (null != menuItem) {
      menuItem.click();
    }
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

export default SideMenuPage;
