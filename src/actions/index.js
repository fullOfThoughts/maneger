import {
  EDIT_ACTICLE,
  COUNT_ARTICLE,
  BTN_LOADING,
  ALL_BTN,
  GET_DATA,
  LOGIN,
  IS_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILD,
} from '../action-types'

export const makAll = () => {
  return (dispatch) => {
    dispatch({ type: ALL_BTN })
    setTimeout(() => {
      dispatch({ type: EDIT_ACTICLE })
    }, 2000)
  }
}

export const markArticle = (id) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: COUNT_ARTICLE, data: id })
    }, 2000)
  }
}

export const btnLoading = (id) => ({ type: BTN_LOADING, data: id })

export const getData = (res) => ({ type: GET_DATA, data: res })
export const userLogin = (res) => ({ type: LOGIN, data: res })
export const userLoading = () => ({ type: IS_LOADING })
export const userSuccess = () => ({ type: LOGIN_SUCCESS })
export const userFaild = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_FAILD })
  }
}
