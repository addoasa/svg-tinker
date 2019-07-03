import * as types from '../actionTypesVariableNames/actionTypeVariables';
//imported the actiontype variables so that we can recieve errors

const initialState = {
  currentLetter: 'A',
}
//set the starting state 

//then here I create my first reducer function
function testReducer(state=initialState, action){
  //this is where all of my logic for changing state will go
  //golden rule is to never directly alter that initial state above.
  //so we make a copy of the item in state
  let currentLetter = state.currentLetter;

  //then set conditionals of how i want to change state based on the action type i pick
  //Often people seem to use switch statements here
  //check if the action object's type property equals a specific value
  switch(action.type){
    case types.ADD_LETTER: //checking if the passed in action.type = the value of the ADD_LETTER variable from the actionTypesVAriable file. In this case that literally equals "ADD_LETTER"
    currentLetter += 'B';
    //if the action type is ADD_LETTER the change the state of currentLetter to "A"
    return {
      ...state,
      currentLetter,
    }
    //return the new state
    default:
      return state;
  
  //if no match actiontypes then return state anyway
  }
}
export default testReducer;