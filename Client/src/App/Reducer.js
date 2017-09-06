const AppReducerDefaultState = {
  info: {
    appName: "My app",
    toolBarLabel: { value: "" }
  },
}

export function AppReducer(state = AppReducerDefaultState, action) {
  var newState = state;
  switch (action.type) {
    case '@App.Login':
      newState = Object.assign({}, state);
      newState.status.Login = action.payload;
      return newState;
    case '@App.UpdateToolBarLabel' :
      newState = Object.assign({}, state);
      newState.info.toolBarLabel = action.payload;
      return newState;
  }
  return state;
}

const SessionReducerDefaultState = {
  status: {
    Login: false
  },
  auth:['home', 'client', 'layouts']
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
