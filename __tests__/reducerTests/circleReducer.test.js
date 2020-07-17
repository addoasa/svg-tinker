import circleReducer from "../../reducers/circleReducer";
import {addCircle} from "../../actions";
import * as types from "../../actionTypesVariableNames/actionTypeVariables";


describe("Testing the Circle Reducer", ()=>{
	let defaultState;
	// Make a copy of the application's state for mock purposes
	beforeEach(() => {
		defaultState = {
            activeCircleSVGs: [ 
                {
                    xAxis:100,
                    yAxis:100,
                    radius:50,
                }
            ]
		};
  });
  
	describe("Testing for default state", ()=>{
   
		// Passing no params to the reducer should return defaultState
		it("A Circle Reducer should return default state when given undefined input",()=>{
			expect(circleReducer(undefined,{ type:undefined })).toEqual(defaultState);
    	});
    
	});

	describe("Testing individual Actions",()=>{
		describe("ACTION: ADD_CIRCLE", ()=>{
      // have a dummy action for testing purposes
			const mockAddSVGAction = {
				type: types.ADD_CIRCLE,
				payload: {}
			};
      
			it("Action should add a new SVG shape object to activeCircleSVGs array in state", ()=>{
				// Deconstruct new array of svgs from the result of invoking our reducer 
				const { activeCircleSVGs } = circleReducer(defaultState, mockAddSVGAction);
				expect(activeCircleSVGs.length).toEqual(2);
			});
			it("Newly added SVG shape should have a datatype of object", ()=>{
				const { activeCircleSVGs } = circleReducer(defaultState, mockAddSVGAction);
				expect(typeof activeCircleSVGs[0]).toBe("object");
			});
			it("Newly added Circle SVG shape should contain the correct key value pairs for coordinates. The correct circle object template should be followed.", ()=>{
                const { activeCircleSVGs } = circleReducer(defaultState, mockAddSVGAction);
                console.log(Object.keys(activeCircleSVGs[1]))
				expect(Object.keys(activeCircleSVGs[1])).toEqual(["xAxis","yAxis","radius"]);
			});
		});
    
	});
});
