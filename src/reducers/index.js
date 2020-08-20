import { EDIT_ACTICLE } from '../action-types'
const initState = {
  id: '710000202002270884',
  title: '消万做位决走对再解准存需土光花',
  author: '毛超',
  amount: 295,
  createAt: 1219728207829,
}
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case EDIT_ACTICLE:
      return action.data
    default:
      return state
  }
}
