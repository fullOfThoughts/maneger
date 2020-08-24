import { combineReducers } from 'redux'
import { nodification } from './nodification'
import { user } from './user'
export default combineReducers({
  nodification,
  user,
})
