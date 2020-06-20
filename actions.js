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

// using removeFromMaster() instead of removeSVG()
// I don't have a solution to remove the correct shape from both the (path,circle,ellipse etc)array AND the master array simultaneously.
// tried: Allowing the master array to know where its shapes are comming from(so that deleting from master array could delete from the SVG's origin array)
// also tried: Allowing the shapes from the origin arrays(path, circle,etc) to know where they are in the master array(by index) so that the master array could "listen" for when an svg is deleted from an origin array
// problem: after deleting a shape simultaneously from masterarray AND children arrays the index references in the master array become incorrect from that point on
// so for now the origin arrays(path,circle ,etc) arrays will no longer use this action until a solution that can fix the issue of index order being wrong after removing an svg is found 
// The origin arrays will act as templates for building svgs and the masterarray will be the only significant array used for rendering/deleting/adding/altering

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

// *ACTIONS BELOW ARE REPLACED BY 'USE_SLIDER' IN MASTER REDUCER*

// export const removeCircle = (circle, classId)=>({
// 	type:types.REMOVE_CIRCLE,
// 	payload: {circle, classId},
// });
// export const setCircleX = (xValue, classId)=>({
// 	type:types.SET_CIRCLE_X,
// 	payload: {xValue , classId},
// });
// export const setCircleY = (yValue, classId)=>({
// 	type:types.SET_CIRCLE_Y,
// 	payload: {yValue,classId},
// });
// export const setRadius = (radiusValue, classId)=>({
// 	type:types.SET_CIRCLE_RADIUS,
// 	payload: {radiusValue,classId},
// });

// ------------------
// ELLIPSES ACTIONS
// ------------------

export const addEllipse = (indexInMaster)=>({
	type:types.ADD_ELLIPSE,
	payload: indexInMaster,
});

// *ACTIONS BELOW ARE REPLACED BY 'USE_SLIDER' IN MASTER REDUCER*


// export const setEllipseX = (xValue, classId)=>({
// 	type:types.SET_ELLIPSE_X,
// 	payload: {xValue , classId},
// });
// export const setEllipseY = (yValue, classId)=>({
// 	type:types.SET_ELLIPSE_Y,
// 	payload: {yValue,classId},
// });
// export const setEllipseHeight = (rHeight, classId)=>({
// 	type:types.SET_ELLIPSE_HEIGHT,
// 	payload: {rHeight,classId},
// });
// export const setEllipseWidth = (rWidth, classId)=>({
// 	type:types.SET_ELLIPSE_WIDTH,
// 	payload: {rWidth,classId},
// });

// ------------------
// RECTANGLE ACTIONS
// ------------------

export const addRectangle = (indexInMaster)=>({
	type:types.ADD_RECTANGLE,
	payload: indexInMaster,
});

// *ACTIONS BELOW ARE REPLACED BY 'USE_SLIDER' IN MASTER REDUCER*


// export const setRectangleX = (xValue, classId)=>({
// 	type:types.SET_ELLIPSE_X,
// 	payload: {xValue , classId},
// });

// export const setRectangleY = (yValue, classId)=>({
// 	type:types.SET_ELLIPSE_Y,
// 	payload: {yValue,classId},
// });

// export const setRectangleHeight = (rHeight, classId)=>({
// 	type:types.SET_ELLIPSE_HEIGHT,
// 	payload: {rHeight,classId},
// });

// export const setRectangleWidth = (rWidth, classId)=>({
// 	type:types.SET_ELLIPSE_WIDTH,
// 	payload: {rWidth,classId},
// });


// ------------------
// TEXT ACTIONS
// ------------------

export const addText = (indexInMaster)=>({
	type:types.ADD_TEXT,
	payload: indexInMaster,
});

// *ACTIONS BELOW ARE REPLACED BY 'USE_SLIDER' IN MASTER REDUCER*


// export const setTextX = (x, classId)=>({
// 	type:types.SET_TEXT_X,
// 	payload: {x , classId},
// });

// export const setTextY = (y, classId)=>({
// 	type:types.SET_TEXT_Y,
// 	payload: {y,classId},
// });

// export const setText = (text, classId)=>({
// 	type:types.SET_TEXT,
// 	payload: {text,classId},
// });


// ------------------
// LINE ACTIONS
// ------------------

export const addLine = (indexInMaster)=>({
	type:types.ADD_LINE,
	payload: indexInMaster,
});

// *ACTIONS BELOW ARE REPLACED BY 'USE_SLIDER' IN MASTER REDUCER*

// export const setLineX1 = (x1, classId)=>({
// 	type:types.SET_LINE_X1,
// 	payload: {x1 , classId},
// });

// export const setLineY1 = (y1, classId)=>({
// 	type:types.SET_LINE_Y1,
// 	payload: {y1,classId},
// });

// export const setLineX2 = (x2, classId)=>({
// 	type:types.SET_LINE_X2,
// 	payload: {x2 , classId},
// });

// export const setLineY2 = (y2, classId)=>({
// 	type:types.SET_LINE_Y2,
// 	payload: {y2,classId},
// });


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


// ------------------
// UI ACTIONS
// ------------------

export const toggleSideNavBar = ()=>({
	type:types.TOGGLE_SIDENAVBAR,
	payload:"",
});
export const setCurrentSideNavMenuType = (menuType)=>({
	type:types.SET_CURRENT_SIDE_NAV_MENU_TYPE,
	payload:menuType,
});
