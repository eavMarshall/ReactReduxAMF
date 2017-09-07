export function UpdateLoginDetails(action) {
  return {
    type: '@LoginPage.UpdateLoginDetails',
    payload: action
  };
}

export function setIsLoggingIn(action) {
  return {
    type: '@LoginPage.setIsLoggingIn',
    payload: action
  };
}
