const defaultState = {
  sideMenuOpen: false
}

export default function(state = defaultState, action) {
  var newState = state;
  switch (action.type) {
    case '@MainPage.MenuSelectChange':
      newState = Object.assign({}, state);
      newState.sideBarMenuItems = action.payload;
      return newState;
    case '@MainPage.SideMenuOpen':
      newState = Object.assign({}, state);
      newState.sideMenuOpen = action.payload;
      return newState;
    case '@MainPage.SelectSideMenu':
      newState = Object.assign({}, state);
      newState.selectedPageID = action.payload;
      return newState;
  }
  return state;
}
