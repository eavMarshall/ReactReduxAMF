const AppReducer = function(
  state = { LoggedIn : false },
  action
) {
  if (action.type == '@App.LoggedIn') {
    let nState = Object.assign(state);
    nState.LoggedIn = action.value;
    return nState;
  }

  return state;
}

export default AppReducer;
