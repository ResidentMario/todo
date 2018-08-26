import { combineReducers } from 'redux'
import todos from './todo_reducers';
import tabs from './tab_reducers'

const reducerPackage = combineReducers({
    tabs, todos
});

export default reducerPackage;