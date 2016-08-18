import { combineReducers } from 'redux'
import friendList from './friendList'
import tasks from './tasks'

const rootReducer = combineReducers({
  friendList,
  tasks
});

export default rootReducer;
