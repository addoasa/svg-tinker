import * as types from '../actionTypesVariableNames/actionTypeVariables';
//imported the actiontype variables so that we can recieve errors

//set the initial state 
const initialState = {
  currentLetter: 'A',
  //Initialized the default size of the workarea
  workspaceHeight:400,
  workspaceWidth:700,
  //Currently, every shape created will be initialized with 4 corners (each with an x position and a y position)
  activeSVGs: [ 
    {
      range1x:275,
      range1y:175,
      range2x:225,
      range2y:175,
      // range3x:325,
      // range3y:225,
      // range4x:375,
      // range4y:225,
    }
  ]

}

// create reducer function
function pathReducer(state=initialState, action){
  // this is where all of my logic for changing state will go
  // golden rule is to never directly alter that initial state above.
  // so we make a copy of the items in state
  // For arrays, we use slice() because slice() will return a new array containing the elements of the old array
  let workspaceHeight = state.workspaceHeight;
  let workspaceWidth = state.workspaceWidth;
  let activeSVGs = state.activeSVGs.slice();

  //then set conditionals of how i want to change state based on the action type i pick
  //Often people seem to use switch statements here
  //check if the action object's type property equals a specific value
  switch(action.type){
    case types.ADD_SVG: //checking if the passed in action.type = the value of the ADD_SVG variable from the actionTypesVAriable file. In this case that literally equals "ADD_SVG"
      // if action type is ADD_SVG, create a new SVG object with values...
      const newSVG = {
        range1x:275,
        range1y:175,
        range2x:225,
        range2y:175,
        // range3x:325,
        // range3y:225,
        // range4x:375,
        // range4y:225,
      }
      // ...push this new SVG object into clone of array of SVG objects
      activeSVGs.push(newSVG)
      // console.log(state.activeSVGs)
      // ***Possible future feature with this action could be allowing the user to specify the dimensions of a new shape by utilizing a payload
      return {
        ...state,
        activeSVGs,
      };
    //return the new state
// ---------------------------------------------------------    
    case types.REMOVE_SVG:
      // The payload of this action is the class id of a shape. The class_id is acting like an index for this array of SVG objects in state. This ensures that I am only deleting the shape I want 
      activeSVGs.splice(action.payload.classId, 1); // Remove one item from activeSVG array with the index specified in the payload
      console.log(activeSVGs)
      console.log(action.payload.classId, "payload")
      return {
        ...state,
        activeSVGs,
      };

// --------------------------------------------------------------------------    
    // SETTING WORKSPACE DIMENSIONS
    // Set the height & width of the work area to what is provided to us from 
    // the user's payload. 
// --------------------------------------------------------------------------        
    case types.SET_HEIGHT:
      workspaceHeight = action.payload;
      console.log(action.payload)
      return {
        ...state,
        workspaceHeight,
      };

// ---------------------------------------------------------    

    case types.SET_WIDTH:
      workspaceWidth = action.payload;
      console.log(action.payload)
      return {
        ...state,
        workspaceWidth,
      };

// --------------------------------------------------------------------------    
    //SETTING RANGES
    // Use the class_id from the payload to find the index of the shape in the
    // activeSVGs array. 
    // With that information we can now manipulate x and y positioning of that 
    // specific shape's vertices
// --------------------------------------------------------------------------    

    case types.SET_RANGE1X:
      // find the specific index i activeSVGs array and change its value
      activeSVGs[action.payload.classId].range1x = action.payload.range1x;
      console.log(action.payload.classId)
      console.log(state.activeSVGs)
        return {
          ...state,
          activeSVGs,
        };

// ---------------------------------------------------------    
 
    case types.SET_RANGE1Y:
      activeSVGs[action.payload.classId].range1y = action.payload.range1y;
      console.log(action.payload.classId)
      console.log(state.activeSVGs)
        return {
          ...state,
          activeSVGs,
        };

// ---------------------------------------------------------  

    case types.SET_RANGE2X:
      activeSVGs[action.payload.classId].range2x = action.payload.range2x;
      console.log(action.payload.classId)
      console.log(state.activeSVGs)
      return {
        ...state,
        activeSVGs,
      };

// ---------------------------------------------------------      
 
    case types.SET_RANGE2Y:
      activeSVGs[action.payload.classId].range2y = action.payload.range2y;
      console.log(action.payload.classId)
      console.log(state.activeSVGs)
      return {
        ...state,
        activeSVGs,
      };
// ---------------------------------------------------------    
 
//     case types.SET_RANGE3X:
//       activeSVGs[action.payload.classId].range3x = action.payload.range3x;
//       console.log(action.payload.classId)
//       console.log(state.activeSVGs)
//       return {
//         ...state,
//         activeSVGs,
//       };

// // ---------------------------------------------------------      
 
//     case types.SET_RANGE3Y:
//       activeSVGs[action.payload.classId].range3y = action.payload.range3y;
//       console.log(action.payload.classId)
//       console.log(state.activeSVGs)
//       return {
//         ...state,
//         activeSVGs,
//       };

// // ---------------------------------------------------------     
 
//     case types.SET_RANGE4X:
//       activeSVGs[action.payload.classId].range4x = action.payload.range4x;
//       console.log(action.payload.classId)
//       console.log(state.activeSVGs)
//       return {
//         ...state,
//         activeSVGs,
//       };

// // ---------------------------------------------------------      
 
//     case types.SET_RANGE4Y:
//       activeSVGs[action.payload.classId].range4y = action.payload.range4y;
//       console.log(action.payload.classId)
//       console.log(state.activeSVGs)
//       return {
//         ...state,
//         activeSVGs,
//       };

// ---------------------------------------------------------      

    default:
      return state;
  
  //if no match actiontypes then return state anyway
  }
};
export default pathReducer;