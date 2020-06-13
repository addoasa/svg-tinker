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
			// Deconstruct masterSVGArray after being altered by the reducer
			const { masterSVGArray } = masterReducer(mockMasterSVGArrayContainingPaths,mockAddVerticesAction);
            expect(masterSVGArray[1].svgData.hasOwnProperty("sliderX6"));
            expect(masterSVGArray[1].svgData.hasOwnProperty("sliderY7"));
            console.log(masterSVGArray[1].svgData.hasOwnProperty("sliderX6"));
            console.log(masterSVGArray[1].svgData.hasOwnProperty("sliderY7"));
		});
		
	});
});