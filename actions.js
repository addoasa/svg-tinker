import * as types from './actionTypesVariableNames/actionTypeVariables.js';

export const addLetter = (currentLetter)=>({
  type:types.ADD_LETTER,
  payload: currentLetter,
})