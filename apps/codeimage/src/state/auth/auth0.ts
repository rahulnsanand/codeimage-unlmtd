export function $auth0State() {
  const getToken = async () => '';
  const loggedIn = () => false;
  const user = () => null;
  const login = async () => { window.location.href = '/'; };
  const forceLogin = async () => { window.location.href = '/'; };
  const signOut = async () => { window.location.href = '/'; };
  const initLogin = async () => {};

  return {
    user,
    getToken,
    login,
    forceLogin,
    signOut,
    loggedIn,
    initLogin,
  };
}

const auth0State = $auth0State();

export function getAuth0State() {
  return auth0State;
}
