import { combineReducers } from 'redux'

import postList from './postList'
import introduction from './introduction'

export default combineReducers({
  postList,
  introduction,
})
