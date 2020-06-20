import lineReducer from "../reducers/lineReducer";
import { addLine } from "../actions";
import * as types from "../actionTypesVariableNames/actionTypeVariables";


describe("Testing the Line Reducer", ()=>{
	let defaultState;
	// Make a copy of the application's state for mock purposes
	beforeEach(() => {
		defaultState = {
            activeLineSVGs: [ 
                {
                    x1:100,
                    y1:100,
                    x2:50,
                    y2:100
                }
            ]
		};
  });
  
	describe("Testing for default state", ()=>{
   
		// Passing no params to the reducer should return defaultState
		it("A Line Reducer should return default state when given undefined input",()=>{
			expect(lineReducer(undefined,{ type:undefined })).toEqual(defaultState);
    	});
    
	});

	describe("Testing individual Actions",()=>{
		describe("ACTION: ADD_LINE", ()=>{
      // have a dummy action for testing purposes
			const mockAddSVGAction = {
				type: types.ADD_LINE,
				payload: {}
			};
      
			it("Action should add a new SVG shape object to activeLineSVGs array in state", ()=>{
				// Deconstruct new array of svgs from the result of invoking our reducer 
				const { activeLineSVGs } = lineReducer(defaultState, mockAddSVGAction);
				expect(activeLineSVGs.length).toEqual(2);
			});
			it("Newly added SVG shape should have a datatype of object", ()=>{
				const { activeLineSVGs } = lineReducer(defaultState, mockAddSVGAction);
				expect(typeof activeLineSVGs[0]).toBe("object");
			});
			it("Newly added Line SVG shape should contain the correct key value pairs for coordinates. The correct line object template should be followed.", ()=>{
                const { activeLineSVGs } = lineReducer(defaultState, mockAddSVGAction);
                console.log(Object.keys(activeLineSVGs[1]))
				expect(Object.keys(activeLineSVGs[1])).toEqual(["x1","y1","x2","y2"]);
			});
		});
    
	});
});
