import SideMenuPage from '../../../Components/Webix/SideMenuPage/SideMenuPage.js';
import './MainPage.css';
import amfClient from '../../../Components/amf/amfClient.js';
import Store from '../../Store.js';

//pages
import HomePage from './Modules/HomePage/HomePage.js';

export default class MainPage extends SideMenuPage {
  constructor(props) {
    super(props);
    this.appName = "My App Name";
  }
  setWebixData(data) { }

  logout() {
    if (this.message != null) webix.message.hide(this.message);
    /*
      //To your log out request here
      //*example*
      store.dispatch({ type: '@App.LoggedIn', value: false });
      amfClient.invoke("MyLogoutModule", "logout", []).then(
        function(res) {
          this.message = webix.message({text:"Logged Out", expire:5000});
        },
          this.message = webix.message({type:"error", text:err.message, expire:5000})
        }
      );
    */
    Store.dispatch({ type: '@App.LoggedIn', value: false });
  }
}
