import { LOGIN, IS_LOADING, LOGIN_SUCCESS, LOGIN_FAILD } from '../action-types'
const isLogin = Boolean(
  window.localStorage.getItem('authToken') ||
    window.sessionStorage.getItem('authToken')
)
const initdata = JSON.parse(
  window.localStorage.getItem('users') || window.sessionStorage.getItem('users')
)
const initState = {
  id: '',
  displayname: '',
  avatar: '',
  role: '',
  isLogin,
  isLoading: false,
  ...initdata,
}
export const user = (state = initState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: true }
    case LOGIN:
      return { ...state, ...action.data, isLogin: true }
    case LOGIN_SUCCESS:
      return { ...state, isLogin: true, isLoading: false }
    case LOGIN_FAILD:
      return { ...state, isLoading: false, isLogin: false }
    default:
      return state
  }
}
