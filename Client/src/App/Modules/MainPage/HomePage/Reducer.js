const defaultState = {

};

export default function(state = defaultState, action) {
  var newState = state;
  /*switch (action.type) {
    case '@HomePage.xxx':
      newState = Object.assign({}, state);
      newState.sideBarMenuItems = action.payload;
      return newState;
    case '@HomePage.xxx':
      newState = Object.assign({}, state);
      newState.sideMenuOpen = action.payload;
      return newState;
  }*/
  return state;
}
