import ellipseReducer from "../reducers/ellipseReducer";
import {addEllipse} from "../actions";
import * as types from "../actionTypesVariableNames/actionTypeVariables";

describe("Testing the Ellipse Reducer", ()=>{
	let defaultState;
	// Make a copy of the application's state for mock purposes
	beforeEach(() => {
		defaultState = {
            activeEllipseSVGs: [ 
                {
                    xAxis:100,
                    yAxis:100,
                    rWidth:50,
                    rHeight:100
                }
            ]
		};
  });
  
	describe("Testing for default state", ()=>{
   
		// Passing no params to the reducer should return defaultState
		it("A Ellipse Reducer should return default state when given undefined input",()=>{
			expect(ellipseReducer(undefined,{ type:undefined })).toEqual(defaultState);
    	});
    
	});

	describe("Testing individual Actions",()=>{
		describe("ACTION: ADD_ELLIPSE", ()=>{
      // have a dummy action for testing purposes
			const mockAddSVGAction = {
				type: types.ADD_ELLIPSE,
				payload: {}
			};
      
			it("Action should add a new SVG shape object to activeEllipseSVGs array in state", ()=>{
				// Deconstruct new array of svgs from the result of invoking our reducer 
				const { activeEllipseSVGs } = ellipseReducer(defaultState, mockAddSVGAction);
				expect(activeEllipseSVGs.length).toEqual(2);
			});
			it("Newly added SVG shape should have a datatype of object", ()=>{
				const { activeEllipseSVGs } = ellipseReducer(defaultState, mockAddSVGAction);
				expect(typeof activeEllipseSVGs[0]).toBe("object");
			});
			it("Newly added Ellipse SVG shape should contain the correct key value pairs for coordinates. The correct ellipse object template should be followed.", ()=>{
                const { activeEllipseSVGs } = ellipseReducer(defaultState, mockAddSVGAction);
                console.log(Object.keys(activeEllipseSVGs[1]))
				expect(Object.keys(activeEllipseSVGs[1])).toEqual(["xAxis","yAxis","rWidth","rHeight"]);
			});
		});
    
	});
});