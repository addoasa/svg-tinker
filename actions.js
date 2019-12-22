import * as types from "./actionTypesVariableNames/actionTypeVariables.js";

export const addLetter = (currentLetter)=>({
	type:types.ADD_LETTER,
	payload: currentLetter,
});
export const setWorkspaceHeight = (workspaceHeight)=>({
	type:types.SET_HEIGHT,
	payload: workspaceHeight,
});
export const setWorkspaceWidth = (workspaceWidth)=>({
	type:types.SET_WIDTH,
	payload: workspaceWidth,
});
export const addSVG = (SVG)=>({
	type:types.ADD_SVG,
	payload: SVG,
});
export const removeSVG = (SVG, classId)=>({
	type:types.REMOVE_SVG,
	payload: {SVG, classId},
});
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