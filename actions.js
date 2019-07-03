import * as types from './actionTypesVariableNames/actionTypeVariables.js';

export const addLetter = (currentLetter)=>({
  type:types.ADD_LETTER,
  payload: currentLetter,
})
export const setWorkspaceHeight = (workspaceHeight)=>({
  type:types.SET_HEIGHT,
  payload: workspaceHeight,
})
export const setWorkspaceWidth = (workspaceWidth)=>({
  type:types.SET_WIDTH,
  payload: workspaceWidth,
})
export const setRange1x = (range1x)=>({
  type:types.SET_RANGE1X,
  payload: range1x,
})
export const setRange1y = (range1y)=>({
  type:types.SET_RANGE1Y,
  payload: range1y,
})
export const setRange2x = (range2x)=>({
  type:types.SET_RANGE2X,
  payload: range2x,
})
export const setRange2y = (range2y)=>({
  type:types.SET_RANGE2Y,
  payload: range2y,
})
export const setRange3x = (range3x)=>({
  type:types.SET_RANGE3X,
  payload: range3x,
})
export const setRange3y = (range3y)=>({
  type:types.SET_RANGE3Y,
  payload: range3y,
})
export const setRange4x = (range4x)=>({
  type:types.SET_RANGE4X,
  payload: range4x,
})
export const setRange4y = (range4y)=>({
  type:types.SET_RANGE4Y,
  payload: range4y,
})