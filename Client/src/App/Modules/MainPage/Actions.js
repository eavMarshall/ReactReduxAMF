export function ActionSideMenuOpen(action) {
  return {
    type: '@MainPage.SideMenuOpen',
    payload: action
  };
}

export function SelectPage(action) {
  return {
    type: '@App.SelectPage',
    payload: action
  };
}
