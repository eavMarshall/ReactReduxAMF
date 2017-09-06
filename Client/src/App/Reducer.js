const defaultState = {
  info: {
    appName: "My app",
    toolBarLabel: { value: "" }
  },
  status: {
    Login: false
  },
  data: {
    username: "",
    password: ""
  }
}

export default function(state = defaultState, action) {
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
