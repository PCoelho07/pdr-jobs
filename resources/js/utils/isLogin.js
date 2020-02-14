
function isLogin() {

  if (!localStorage.getItem('jobs@token')) {
    return false
  }

  return true
}

export default isLogin
