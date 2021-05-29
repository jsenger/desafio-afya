const isAuthenticated = () =>
  localStorage.getItem('@tokenVitality') ? true : false;

export default isAuthenticated;
