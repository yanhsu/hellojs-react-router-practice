import { combineReducers } from 'redux';
import { todos } from 'ToDo/reducers/TodoReducers';

const AppReducers = combineReducers({
  todos
})

export default AppReducers;
