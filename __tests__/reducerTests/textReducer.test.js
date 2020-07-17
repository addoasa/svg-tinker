import textReducer from "../../reducers/textReducer";
import {addText} from "../../actions";
import * as types from "../../actionTypesVariableNames/actionTypeVariables";


describe("Testing the Text Reducer", ()=>{
	let defaultState;
	// Make a copy of the application's state for mock purposes
	beforeEach(() => {
		defaultState = {
            activeTextSVGs: [ 
                {
                    x:100,
                    y:100,
                    text:""
                }
            ]
		};
  });
  
	describe("Testing for default state", ()=>{
   
		// Passing no params to the reducer should return defaultState
		it("A Text Reducer should return default state when given undefined input",()=>{
			expect(textReducer(undefined,{ type:undefined })).toEqual(defaultState);
    	});
    
	});

	describe("Testing individual Actions",()=>{
		describe("ACTION: ADD_TEXT", ()=>{
      // have a dummy action for testing purposes
			const mockAddSVGAction = {
				type: types.ADD_TEXT,
				payload: {}
			};
      
			it("Action should add a new SVG shape object to activeTextSVGs array in state", ()=>{
				// Deconstruct new array of svgs from the result of invoking our reducer 
				const { activeTextSVGs } = textReducer(defaultState, mockAddSVGAction);
				expect(activeTextSVGs.length).toEqual(2);
			});
			it("Newly added SVG shape should have a datatype of object", ()=>{
				const { activeTextSVGs } = textReducer(defaultState, mockAddSVGAction);
				expect(typeof activeTextSVGs[0]).toBe("object");
			});
			it("Newly added Text SVG shape should contain the correct key value pairs for coordinates. The correct text object template should be followed.", ()=>{
                const { activeTextSVGs } = textReducer(defaultState, mockAddSVGAction);
                console.log(Object.keys(activeTextSVGs[1]));
				expect(Object.keys(activeTextSVGs[1])).toEqual(["x","y","text"]);
			});
		});
    
	});
});