const isAuthenticated = () =>
  localStorage.getItem('@tokenVitality') !== null ? true : false;

export default isAuthenticated;
