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

// I don't have a solution to remove the correct shape from both the (path,circle,etc)array AND the master array simultaneously.
// tried: Allowing the master array to know where its shapes are comming from
// also tried: Allowing to shapes from the (path, circle,etc) arrays to know where they are in the master array
// problem: after deleting a shape simultaneously from masterarray AND children arrays the reference to index becomes incorrect from that point on
// so for now the (path,circle ,etc) arrays will no longer use this action until a solution that can fix the issue of index order being wrong after removing an svg is found 
// The children array will act as templates for svgs and the masterarray will be the only significant array used for rendering

// export const removeSVG = (SVG, indexToDelete)=>({
// 	type:types.REMOVE_SVG,
// 	payload: {SVG, indexToDelete},
// });
// ------------------
// PATH ACTIONS
// ------------------

export const addPath = (indexInMaster)=>({
	type:types.ADD_PATH,
	payload: indexInMaster,
});
export const addVertices = (classId)=>({
	type:types.ADD_VERTICES,
	payload: classId,
});
export const removeVertices = (classId, xToDelete, yToDelete)=>({
	type:types.REMOVE_VERTICES,
	payload: {classId, xToDelete, yToDelete},
});



// ------------------
// CIRCLE ACTIONS
// ------------------

export const addCircle = (indexInMaster)=>({
	type:types.ADD_CIRCLE,
	payload: indexInMaster,
});
// export const removeCircle = (circle, classId)=>({
// 	type:types.REMOVE_CIRCLE,
// 	payload: {circle, classId},
// });
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
// ELLIPSES ACTIONS
// ------------------

export const addEllipse = (indexInMaster)=>({
	type:types.ADD_ELLIPSE,
	payload: indexInMaster,
});

export const setEllipseX = (xValue, classId)=>({
	type:types.SET_ELLIPSE_X,
	payload: {xValue , classId},
});
export const setEllipseY = (yValue, classId)=>({
	type:types.SET_ELLIPSE_Y,
	payload: {yValue,classId},
});
export const setEllipseHeight = (rHeight, classId)=>({
	type:types.SET_ELLIPSE_HEIGHT,
	payload: {rHeight,classId},
});
export const setEllipseWidth = (rWidth, classId)=>({
	type:types.SET_ELLIPSE_WIDTH,
	payload: {rWidth,classId},
});

// ------------------
// MASTER ACTIONS
// ------------------

export const insertIntoMaster = (SVG, svgType)=>({
	type:types.INSERT_INTO_MASTER,
	payload: {SVG, svgType},
});
export const removeFromMaster = (classId)=>({
	type:types.REMOVE_FROM_MASTER,
	payload: {classId},
});
export const useSlider = (value, classId, sliderId)=>({
	type:types.USE_SLIDER,
	payload: {value , classId, sliderId },
});