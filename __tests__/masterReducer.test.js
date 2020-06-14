import masterReducer from "../reducers/masterReducer";
import {insertIntoMaster, removeFromMaster, useSlider, addVertices, removeVertices} from "../actions";
import * as types from "../actionTypesVariableNames/actionTypeVariables";

describe("Testing Master Reducer actions", ()=>{
    
	let defaultState;
	beforeEach(()=>{
		defaultState = {
			masterSVGArray:[],
		};
	});
    
	let mockInsertIntoMaster = insertIntoMaster({},"");
	const mockInsertIntoMasterAction={
		type:types.INSERT_INTO_MASTER,
		payload: mockInsertIntoMaster.payload
	};

	describe("ACTION: INSERT_INTO_MASTER.", ()=>{
		it("The INSERT_INTO_MASTER action that the master reducer recieves should add a new SVG to the masterSVGArray",()=>{
			// Deconstruct masterSVGArray after being altered by the reducer
			const { masterSVGArray } = masterReducer(defaultState,mockInsertIntoMasterAction);
			expect(masterSVGArray.length).toBe(1);
		});
		it("The SVG object being added should have a key called 'svgType' of data type 'string'",()=>{
			const { masterSVGArray } = masterReducer(defaultState,mockInsertIntoMasterAction);
			expect(masterSVGArray[0].svgType);
			expect(typeof masterSVGArray[0].svgType).toBe("string");
		});
		it("The SVG object being added should have a key called 'svgData' of data type 'object'",()=>{
			const { masterSVGArray } = masterReducer(defaultState,mockInsertIntoMasterAction);
			expect(masterSVGArray[0].svgData);
			expect(typeof masterSVGArray[0].svgData).toBe("object");
		});
	});

    
	const mockAddVerticesAction={
		type:types.ADD_VERTICES,
		payload: "1"
	};

	describe("ACTION: ADD_VERTICES.", ()=>{
		let mockMasterSVGArrayContainingPaths = {
			masterSVGArray : [
				{
					svgType:"PATH",
					svgData:{},
				},
				{
					svgType:"PATH",
					svgData:{
						sliderX0:275,
						sliderY1:175,
						sliderX2:225,
						sliderY3:100,
						sliderX4:275,
						sliderY5:200,
					},
				},
			]
        };
        
		it("If an SVG object of the 'svgType': 'PATH' is added to the masterSVGArray, a new pair of slider key value pairs should be added to that path svg object's 'svgData' object",()=>{
			const { masterSVGArray } = masterReducer(mockMasterSVGArrayContainingPaths,mockAddVerticesAction);
            expect(masterSVGArray[1].svgData.hasOwnProperty("sliderX6"));
            expect(masterSVGArray[1].svgData.hasOwnProperty("sliderY7"));
            // console.log(masterSVGArray[1].svgData.hasOwnProperty("sliderX6"));
            // console.log(masterSVGArray[1].svgData.hasOwnProperty("sliderY7"));
		});
		
	});

	describe("ACTION: REMOVE_VERTICES",()=>{

		// Mock array used to imitate an svg set that has two paths
		let mockMasterSVGArrayContainingPaths = {
			masterSVGArray : [
				{
					svgType:"PATH",
					svgData:{
						sliderX0:275,
						sliderY1:175,
						sliderX2:225,
						sliderY3:100,
						sliderX4:275,
						sliderY5:200,
					},
				},
				{
					svgType:"PATH",
					svgData:{
						sliderX0:275,
						sliderY1:175,
						sliderX2:225,
						sliderY3:100,
						sliderX4:275,
						sliderY5:200,
					},
				},
			]
        };
		
		// When we pass this action through the master reducer sliderX2 and sliderY3 in the PATH object at the 0th index should be deleted 
		const mockRemoveVertices = removeVertices(0,"sliderX2","sliderY3");
		const mockRemoveVerticesAction={
			type:types.REMOVE_VERTICES,
			payload: mockRemoveVertices.payload
		};
		
		it("Deleting a vertice on a PATH svg should remove the appropriate key value slider pairs on that PATH's svgData object.", ()=>{
			const { masterSVGArray } = masterReducer(mockMasterSVGArrayContainingPaths,mockRemoveVerticesAction);
			expect(Object.keys(masterSVGArray[0].svgData).length).toEqual(4);
		});

		it("After deleting a vertice, the verticies key value pairs on the svgData object should maintain their order.", ()=>{
			const { masterSVGArray } = masterReducer(mockMasterSVGArrayContainingPaths,mockRemoveVerticesAction)
			expect(masterSVGArray[0].svgData.sliderX2).toEqual(mockMasterSVGArrayContainingPaths.masterSVGArray[0].svgData.sliderX4);
			expect(masterSVGArray[0].svgData.sliderY3).toEqual(mockMasterSVGArrayContainingPaths.masterSVGArray[0].svgData.sliderY5);
		});
	});
});