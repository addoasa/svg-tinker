import * as types from './actionTypesVariableNames/actionTypeVariables';

export const addLetter = (currentLetter)=>({
  type:types.ADD_LETTER,
  payload: currentLetter,
})