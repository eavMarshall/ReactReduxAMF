import React, { Component } from 'react';
import HomePage from './Modules/MainPage/HomePage/HomePage.js'

const AppReducerDefaultState = {
  info: {
    appName: "Default app name"
  },
  auth:[
    'home',
    'client',
    'dashboard1',
    'dashboard2',
    'setting2',
    'setting3'
  ],
  Pages: {
      selectedPageID:"",
      selectedPage: <img id="loadingImage" className="fitLoadingImage centerLoadingImage loadingImageSpin" src="react.svg"></img>,
      pages: {
        default: <img id="loadingImage" className="fitLoadingImage centerLoadingImage loadingImageSpin" src="react.svg"></img>,
        'home': <HomePage label="Home"/>,
        'client': <div label="Client">Client - this is a child div</div>,
        'dashboard1': <div label="Dashboards 1">Dashboards 1 - this is a child div</div>,
        'dashboard2': <div label="Dashboards 2">Dashboards 2 - this is a child div</div>,
        'dashboard3': <div label="Dashboards 3">Dashboards 3 - this is a child div</div>,
        'setting1': <div label="Setting 1">Setting 1 - this is a child div</div>,
        'setting2': <div label="Setting 2">Setting 2 - this is a child div</div>,
        'setting3': <div label="Setting 3">Setting 3 - this is a child div</div>,
        'setting4': <div label="Setting 4">Setting 4 - this is a child div</div>,
      }
  }
}

export function AppReducer(state = AppReducerDefaultState, action) {
  var newState = state;
  switch (action.type) {
    case '@App.Login':
      newState = Object.assign({}, state);
      newState.status.Login = action.payload;
      return newState;
    case '@App.SelectPage' :
      newState = Object.assign({}, state);
      if (newState.auth.indexOf(action.payload) == -1) {
        newState.Pages.selectedPage = newState.Pages.pages.default;
      } else {
        newState.Pages.selectedPage = newState.Pages.pages[action.payload];
      }

      newState.Pages.selectedPageID = action.payload;
      return newState;
  }
  return state;
}

const SessionReducerDefaultState = {
  status: {
    Login: false
  },
}

export function SessionReducer(state = SessionReducerDefaultState, action) {
  var newState = state;
  switch (action.type) {
    case '@Session.Login':
      newState = Object.assign({}, state);
      newState.status.Login = action.payload;
      return newState;
  }
  return state;
}
