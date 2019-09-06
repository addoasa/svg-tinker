import { combineReducers } from 'redux';
//since createStore takes only one reducer , i have to combine all reducers with the combine reducers method
import pathReducer from './pathReducer';
//import all reducers

//this will combine all reducers
const reducers = combineReducers({
  //if i had more reducers they would go in here
  tinker : pathReducer,
})

export default reducers