import WRComponent from '../../../../../Components/Webix/WRComponent.js';

export default class HomePage extends WRComponent {
  getLayout() {
    return {
      view:"label",
      label: "This is the Home page",
      align:"center"
    };
  }

  setWebixData(data) { }
}
