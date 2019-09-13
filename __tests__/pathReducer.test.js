import pathReducer  from "../reducers/pathReducer";
import * as types from '../actionTypesVariableNames/actionTypeVariables';

test("Initializing Jest", ()=>{
  expect(true).toBeTruthy();
})

describe("Testing the path Reducer", ()=>{
  let defaultState;
// Make a copy of the application's state for mock purposes
  beforeEach(() => {
    defaultState = {
      currentLetter: 'A',
      workspaceHeight:400,
      workspaceWidth:700,
      activeSVGs: [ 
        {
          range1x:275,
          range1y:175,
          range2x:225,
          range2y:175,
          range3x:325,
          range3y:225,
          range4x:375,
          range4y:225,
        }
      ]
    }
  });
  describe('Testing for default state', ()=>{
   
    it('A reducer takes in 2 parameters=> The initial state and the actions sent to it from the client. Reducer should return default state when given undefined input',()=>{
      expect(pathReducer(undefined,{ type:undefined })).toEqual(defaultState)
    })
  })

  describe('Testing individual Actions',()=>{
    describe('ACTION: ADD_SVG', ()=>{
      const mockAddSVGAction = {
        type: types.ADD_SVG,
        payload: {}
      }
      
      it("Action should add a new SVG shape object to activeSVGs array in state", ()=>{
        // Deconstruct new array of svgs from the result of invoking our reducer 
        const { activeSVGs } = pathReducer(defaultState, mockAddSVGAction)
        expect(activeSVGs.length).toEqual(2)
      })
      it("Newly added SVG shape should have a datatype of object", ()=>{
        const { activeSVGs } = pathReducer(defaultState, mockAddSVGAction)
        expect(typeof activeSVGs[0]).toBe('object')
      })
    })
    describe('ACTION: REMOVE_SVG', ()=>{
      const mockRemoveSVGAction = {
        type: types.REMOVE_SVG,
        payload: {
          classId:0
        }
      }
      it("Action should remove the specific SVG shape object(based on its index) from activeSVGs array in state", ()=>{
        // Deconstruct new array of svgs from the result of invoking our reducer 
        const { activeSVGs } = pathReducer(defaultState, mockRemoveSVGAction)
        expect(activeSVGs[mockRemoveSVGAction.payload.classId]).toBe(undefined)
      })
    })
    
  })
})
