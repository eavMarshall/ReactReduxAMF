import {combineReducers, createStore} from "redux";
import AppReducer from './AppReducer.js';
import LoginPageReducer from './Pages/Login/LoginPageReducer.js';

const rootReducer = combineReducers({
  AppReducer,
  LoginPageReducer
});

let Store = createStore(rootReducer);

export default Store;
