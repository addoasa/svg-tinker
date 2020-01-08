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

// ------------------
// PATH ACTIONS
// ------------------

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
export const removeVertices = (classId, xToDelete, yToDelete)=>({
	type:types.REMOVE_VERTICES,
	payload: {classId, xToDelete, yToDelete},
});
export const setX = (value, classId, sliderId)=>({
	type:types.SET_X,
	payload: {value , classId, sliderId },
});
export const setY = (value, classId, sliderId)=>({
	type:types.SET_Y,
	payload: {value,classId, sliderId},
});

// ------------------
// CIRCLE ACTIONS
// ------------------

export const addCircle = (circle)=>({
	type:types.ADD_CIRCLE,
	payload: circle,
});
export const removeCircle = (circle, classId)=>({
	type:types.REMOVE_CIRCLE,
	payload: {circle, classId},
});
export const setCircleX = (xValue, classId)=>({
	type:types.SET_CIRCLE_X,
	payload: {xValue , classId},
});
export const setCircleY = (yValue, classId)=>({
	type:types.SET_CIRCLE_Y,
	payload: {yValue,classId},
});
export const setRadius = (radiusValue, classId)=>({
	type:types.SET_CIRCLE_RADIUS,
	payload: {radiusValue,classId},
});

// ------------------
// MASTER ACTIONS
// ------------------

export const insertIntoMaster = (SVG, svgType)=>({
	type:types.INSERT_INTO_MASTER,
	payload: {SVG, svgType},
});