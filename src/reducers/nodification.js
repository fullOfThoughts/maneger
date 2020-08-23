import {
  COUNT_ARTICLE,
  EDIT_ACTICLE,
  BTN_LOADING,
  ALL_BTN,
  GET_DATA,
} from '../action-types'
const initState = {
  isLoading: false,
  list: [
    {
      id: 1,
      desc:
        '111 Ant Design, a design language for background applications, is refined by Ant UED Team',
      title: 'Ant Design 111',
      hasRead: false,
      isLoading: false,
    },
    {
      id: 2,
      desc:
        '222 Ant Design, a design language for background applications, is refined by Ant UED Team',
      title: 'Ant Design 222',
      hasRead: false,
      isLoading: false,
    },
    {
      id: 3,
      desc:
        '333 Ant Design, a design language for background applications, is refined by Ant UED Team',
      title: 'Ant Design 333',
      hasRead: true,
      isLoading: false,
    },
  ],
}
export const nodification = (state = initState, action) => {
  switch (action.type) {
    case COUNT_ARTICLE:
      const { list } = state
      const newList = list.map((item) => {
        if (item.id === action.data) {
          item.hasRead = true
        }
        return item
      })
      return { ...state, list: newList }
    case EDIT_ACTICLE:
      const lis = state.list
      const newLis = lis.map((item) => {
        item.hasRead = true

        return item
      })
      return { ...state, list: newLis }
    case BTN_LOADING:
      const li = state.list
      const newLi = li.map((item) => {
        if (item.id === action.data) {
          item.isLoading = true
        }
        return item
      })
      return { ...state, list: newLi }
    case ALL_BTN:
      const l = state.list
      const newL = l.map((item) => {
        item.isLoading = true
        return item
      })
      return { ...state, list: newL }
    case GET_DATA:
      return { ...state, list: action.data }
    default:
      return state
  }
}
