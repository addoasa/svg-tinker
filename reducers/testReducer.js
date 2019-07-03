import * as types from '../actionTypesVariableNames/actionTypeVariables';
//imported the actiontype variables so that we can recieve errors

const initialState = {
  currentLetter: 'A',
  workspaceHeight:200,
  workspaceWidth:200,
  range1x:50,
  range1y:50,
  range2x:100,
  range2y:50,
  range3x:50,
  range3y:100,
  range4x:100,
  range4y:100,

}
//set the starting state 

//then here I create my first reducer function
function testReducer(state=initialState, action){
  //this is where all of my logic for changing state will go
  //golden rule is to never directly alter that initial state above.
  //so we make a copy of the item in state
  let currentLetter = state.currentLetter;
  let workspaceHeight = state.workspaceHeight;
  let workspaceWidth = state.workspaceWidth;
  let range1x = state.range1x;
  let range1y = state.range1y;
  let range2x = state.range2x;
  let range2y = state.range2y;
  let range3x = state.range3x;
  let range3y = state.range3y;
  let range4x = state.range4x;
  let range4y = state.range4y;

  //then set conditionals of how i want to change state based on the action type i pick
  //Often people seem to use switch statements here
  //check if the action object's type property equals a specific value
  switch(action.type){
    case types.ADD_LETTER: //checking if the passed in action.type = the value of the ADD_LETTER variable from the actionTypesVAriable file. In this case that literally equals "ADD_LETTER"
    currentLetter += 'B';
    console.log('hi')

    //if the action type is ADD_LETTER the change the state of currentLetter to "A"
    return {
      ...state,
      currentLetter,
    };
    //return the new state
// --------------------------------------------------------------------------    
    case types.SET_HEIGHT:
      workspaceHeight = action.payload;
    console.log(action.payload)
      return {
        ...state,
        workspaceHeight,
      };

// --------------------------------------------------------------------------    

    case types.SET_WIDTH:
      workspaceWidth = action.payload;
    console.log(action.payload)
      return {
        ...state,
        workspaceWidth,
      };

// --------------------------------------------------------------------------    

    case types.SET_RANGE1X:
        range1x = action.payload;
    console.log(action.payload)
      return {
        ...state,
        range1x,
      };

// --------------------------------------------------------------------------    
 
    case types.SET_RANGE1Y:
        range1y = action.payload;
    console.log(action.payload)
      return {
        ...state,
        range1y,
      };

// --------------------------------------------------------------------------    
 
    case types.SET_RANGE2X:
        range2x = action.payload;
    console.log(action.payload)
      return {
        ...state,
        range2x,
      };

// --------------------------------------------------------------------------    
 
    case types.SET_RANGE2Y:
        range2y = action.payload;
    console.log(action.payload)
      return {
        ...state,
        range2y,
      };

// --------------------------------------------------------------------------    
 
    case types.SET_RANGE3X:
        range3x = action.payload;
    console.log(action.payload)
      return {
        ...state,
        range3x,
      };

// --------------------------------------------------------------------------    
 
    case types.SET_RANGE3Y:
        range3y = action.payload;
    console.log(action.payload)
      return {
        ...state,
        range3y,
      };

// --------------------------------------------------------------------------    
 
    case types.SET_RANGE4X:
        range4x = action.payload;
    console.log(action.payload)
      return {
        ...state,
        range4x,
      };

// --------------------------------------------------------------------------    
 
    case types.SET_RANGE4Y:
        range4y = action.payload;
    console.log(action.payload)
      return {
        ...state,
        range4y,
      };

// --------------------------------------------------------------------------    

    default:
      return state;
  
  //if no match actiontypes then return state anyway
  }
};
export default testReducer;