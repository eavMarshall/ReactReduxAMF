import WRComponent from '../../../Components/Webix/WRComponent.js';
import amfClient from '../../../Components/amf/amfClient.js';
import Store from '../../Store.js';
import build from '../../build.js';

export default class LoginPage extends WRComponent {
  setWebixData(data) { }

  login() {
    if (this.message != null) webix.message.hide(this.message);
    $$('LoginPageLoginButton').disable();
    /*
      //To your login request here
      //*example*
      amfClient.invoke("MyLoginModule", "Login",
        [[
          logData,
        ]]
      ).then(
        function(res) {
          if (res[0] == build.version) {
            store.dispatch({ type: '@App.LoggedIn', value: true });
            this.message = webix.message({text:"Logged in", expire:5000});
          } else {
            store.dispatch({ type: '@App.LoggedOut', value: false });
            this.message = webix.message({type:"error", "Version mismatch", expire:5000});
          }
        },
        function(err) {
          $$('loginBtn').enable();
          store.dispatch({ type: '@App.LoggedOut', value: false });
          this.message = webix.message({type:"error", text:err.message, expire:5000});
        }
      );
    */
    Store.dispatch({ type: '@App.LoggedIn', value: true });
  }

  getLayout() {
    return {
        rows:[
        {},
        {
          cols: [
          {},
          {
            view:"form",
            id:"LoginPageMainForm",
            width:300,
            elements:[
                { view:"label", label: "Your Welcome message here", margin:5, align:"center"},
                { id: "LoginPageUsername", view:"text", label:"Username", name:"username"},
                { id: "LoginPagePassword", view:"text", type:"password", label:"Password", name:"password" },
                { id: "LoginPageLoginButton", view:"button", value:"Login", width:100, "click": this.login.bind(this) }
              ]
            },
            {},
          ]
        },
        {},
      ]
    };
  }
}
