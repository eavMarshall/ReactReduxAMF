import WRComponent from '../../WRComponent.js';
import './sidebar.js';
require("./sidebar.css");
require("./SideMenu.css");

class SideMenuPage extends WRComponent {
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
    this.onMenuChange = props.onMenuChange;
  }
  setWebixData(data) { }
  windowsResize(event) {
    /*if (window.innerWidth < this.minWidth) {
      $$("SideMenu").collapse();
    } else {
      $$("SideMenu").expand();
    }*/
  }

  logout() {
    console.log("not implemented");
  }

  getSelectedMenuName(id) {
    for (var i = 0; i < this.sideBarMenu.length; i++) {
      if (null != this.sideBarMenu[i]["data"]) {
        for (var j = 0; j < this.sideBarMenu[i].data.length; j++) {
          if (id == this.sideBarMenu[i].data[j].id) {
            return this.sideBarMenu[i].data[j];
          }
        }
      } else {
        if (id == this.sideBarMenu[i].id) {
          return this.sideBarMenu[i];
        }
      }
    }
    return "Unknown";
  }

  sideBarItemSelectHandler(id) {
    if (null != this.onMenuChange) {
      this.onMenuChange(this.getSelectedMenuName(id));
    }
    /*$$("toolbar_label").define("label", this.getSelectedMenuName(id));
    $$("toolbar_label").refresh();
    this.windowsResize();*/
  }

  aftercomponentDidMount() {
    /*let menuItems = document.querySelectorAll('[webix_tm_id="'+this.firstSelectedID+'"]');
    let menuItem = menuItems[0];
    if (null != menuItem) {
      menuItem.click();
    }
    this.windowsResize();*/
  }

  getLayout() {
    let menuLayout = JSON.parse(JSON.stringify(this.sideBarMenu)); //protect sideBarMenu from webix
    return {
      width: 300,
      css: "sidenav",
      rows:[
        {
          view:"label",
          label: this.props.label,
          align:"center",
          height: 54
        },
        {
          view: "sidebar",
          data: menuLayout,
          on: {
            onAfterSelect: this.sideBarItemSelectHandler.bind(this)
          }
        },
      ]};
  }
}

export default SideMenuPage;
