import {
  EDIT_ACTICLE,
  COUNT_ARTICLE,
  BTN_LOADING,
  ALL_BTN,
  GET_DATA,
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
