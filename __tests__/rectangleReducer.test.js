import rectangleReducer from "../reducers/rectangleReducer";
import {addRectangle} from "../actions";
import * as types from "../actionTypesVariableNames/actionTypeVariables";

describe("Testing the Rectangle Reducer", ()=>{
	let defaultState;
	// Make a copy of the application's state for mock purposes
	beforeEach(() => {
		defaultState = {
            activeRectangleSVGs: [ 
                {
                    x:100,
                    y:100,
                    rx:0,
                    ry:0,
                    width:50,
                    height:100,
                }
            ]
		};
  });
  
	describe("Testing for default state", ()=>{
   
		// Passing no params to the reducer should return defaultState
		it("A Rectangle Reducer should return default state when given undefined input",()=>{
			expect(rectangleReducer(undefined,{ type:undefined })).toEqual(defaultState);
    	});
    
	});

	describe("Testing individual Actions",()=>{
		describe("ACTION: ADD_RECTANGLE", ()=>{
      // have a dummy action for testing purposes
			const mockAddSVGAction = {
				type: types.ADD_RECTANGLE,
				payload: {}
			};
      
			it("Action should add a new SVG shape object to activeRectangleSVGs array in state", ()=>{
				// Deconstruct new array of svgs from the result of invoking our reducer 
				const { activeRectangleSVGs } = rectangleReducer(defaultState, mockAddSVGAction);
				expect(activeRectangleSVGs.length).toEqual(2);
			});
			it("Newly added SVG shape should have a datatype of object", ()=>{
				const { activeRectangleSVGs } = rectangleReducer(defaultState, mockAddSVGAction);
				expect(typeof activeRectangleSVGs[0]).toBe("object");
			});
			it("Newly added Rectangle SVG shape should contain the correct key value pairs for coordinates. The correct rectangle object template should be followed.", ()=>{
                const { activeRectangleSVGs } = rectangleReducer(defaultState, mockAddSVGAction);
                console.log(Object.keys(activeRectangleSVGs[1]))
				expect(Object.keys(activeRectangleSVGs[1])).toEqual(["x","y","rx","ry","width","height"]);
			});
		});
    
	});
});
