import { combineReducers } from 'redux';
//since createStore takes only one reducer , i have to combine all reducers with the combine reducers method
import pathReducer from './pathReducer';
import circleReducer from './circleReducer';
import ellipseReducer from './ellipseReducer';
import lineReducer from './lineReducer';
import rectangleReducer from './rectangleReducer';
import textReducer from './textReducer';
import masterReducer from './masterReducer';
import uiReducer from './uiReducer';
//import all reducers

//this will combine all reducers
const reducers = combineReducers({
  //if i had more reducers they would go in here
  master : masterReducer,
  paths : pathReducer,
  circles : circleReducer,
  texts : textReducer,
  ellipses : ellipseReducer,
  rectangles : rectangleReducer,
  lines : lineReducer,
  uiState : uiReducer,
});

export default reducers;
