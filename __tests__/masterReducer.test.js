import masterReducer from "../reducers/masterReducer";
import {insertIntoMaster, removeFromMaster, useSlider, addVertices, removeVertices} from "../actions";
import * as types from "../actionTypesVariableNames/actionTypeVariables";

describe("Testing Master Reducer actions", ()=>{
	let mockInsertIntoMaster = insertIntoMaster({},"");
	const mockInsertIntoMasterAction={
		type:types.INSERT_INTO_MASTER,
		payload: mockInsertIntoMaster.payload
	};

	let defaultState;
	beforeEach(()=>{
		defaultState = {
			masterSVGArray:[],
		};
	});
    
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
});