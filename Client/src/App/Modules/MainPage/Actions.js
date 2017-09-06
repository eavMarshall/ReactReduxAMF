export function ActionUpdateToolbar(action) {
  return {
    type: '@App.UpdateToolBarLabel',
    payload: action
  };
}

export function ActionSideMenuOpen(action) {
  return {
    type: '@MainPage.SideMenuOpen',
    payload: action
  };
}
