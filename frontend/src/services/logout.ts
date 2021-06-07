export const logout = () => {
  localStorage.clear();
  window.location.reload();
}