
export const useData = () => {
  const User = JSON.parse(localStorage.getItem('user'))
  return{User}
}
