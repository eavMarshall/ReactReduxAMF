import { combineReducers } from 'redux';
import * as App from './App/Reducer.js';
import LoginPageReducer from './App/Modules/LoginPage/Reducer.js';
import MainPageReducer from './App/Modules/MainPage/Reducer.js';
import HomePageReducer from './App/Modules/MainPage/HomePage/Reducer.js';

const AllReducers = combineReducers({
  Session: App.SessionReducer,
  App: App.AppReducer,
  LoginPage: LoginPageReducer,
  MainPage: MainPageReducer,
    HomePage: HomePageReducer
})

export default AllReducers
