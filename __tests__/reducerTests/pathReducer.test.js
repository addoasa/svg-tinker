import pathReducer  from "../../reducers/pathReducer";
import * as types from "../../actionTypesVariableNames/actionTypeVariables";

test("Initializing Jest", ()=>{
	expect(true).toBeTruthy();
});

describe("Testing the path Reducer", ()=>{
	let defaultState;
	// Make a copy of the application's state for mock purposes
	beforeEach(() => {
		defaultState = {
			currentLetter: "A",
			//Initialized the default size of the workarea
			workspaceHeight:300,
			workspaceWidth:700,
			//Currently, every shape created will be initialized with 4 corners (each with an x position and a y position)
			activePathSVGs: [ 
				{
					sliderX0:150,
					sliderY1:100,
					sliderX2:100,
					sliderY3:200,
					sliderX4:250,
					sliderY5:200,
				}
			]
    
		};
  });
  
	describe("Testing for default state", ()=>{
   
		// Passing no params to the reducer should return defaultState
		it("A reducer takes in 2 parameters=> The initial state and the actions sent to it from the client. Reducer should return default state when given undefined input",()=>{
			expect(pathReducer(undefined,{ type:undefined })).toEqual(defaultState);
    	});
    
	});

	describe("Testing individual Actions",()=>{
		describe("ACTION: ADD_PATH", ()=>{
      // have a dummy action for testing purposes
			const mockAddSVGAction = {
				type: types.ADD_PATH,
				payload: {}
			};
      
			it("Action should add a new SVG shape object to activePathSVGs array in state", ()=>{
				// Deconstruct new array of svgs from the result of invoking our reducer 
				const { activePathSVGs } = pathReducer(defaultState, mockAddSVGAction);
				expect(activePathSVGs.length).toEqual(2);
			});
			it("Newly added SVG shape should have a datatype of object", ()=>{
				const { activePathSVGs } = pathReducer(defaultState, mockAddSVGAction);
				expect(typeof activePathSVGs[0]).toBe("object");
			});
		});
    
	});
});
