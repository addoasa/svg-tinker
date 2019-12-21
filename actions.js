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
export const setRange1x = (range1x, classId)=>({
  type:types.SET_RANGE1X,
  payload: {range1x , classId },
})
export const setRange1y = (range1y, classId)=>({
  type:types.SET_RANGE1Y,
  payload: {range1y,classId},
})
export const setRange2x = (range2x, classId)=>({
  type:types.SET_RANGE2X,
  payload: {range2x,classId},
})
export const setRange2y = (range2y, classId)=>({
  type:types.SET_RANGE2Y,
  payload: {range2y,classId},
})
export const setRange3x = (range3x, classId)=>({
  type:types.SET_RANGE3X,
  payload: {range3x,classId},
})
export const setRange3y = (range3y, classId)=>({
  type:types.SET_RANGE3Y,
  payload:{ range3y,classId},
})
export const setRange4x = (range4x, classId)=>({
  type:types.SET_RANGE4X,
  payload: {range4x,classId},
})
export const setRange4y = (range4y, classId)=>({
  type:types.SET_RANGE4Y,
  payload: {range4y,classId},
})
export const addSVG = (SVG)=>({
  type:types.ADD_SVG,
  payload: SVG,
})
export const removeSVG = (SVG, classId)=>({
  type:types.REMOVE_SVG,
  payload: {SVG, classId},
})
export const addVertices = (classId)=>({
	type:types.ADD_VERTICES,
	payload: classId,
});
export const setX = (value, classId, sliderId)=>({
  type:types.SET_X,
  payload: {value , classId, sliderId },
});
export const setY = (value, classId, sliderId)=>({
  type:types.SET_Y,
  payload: {value,classId, sliderId},
});