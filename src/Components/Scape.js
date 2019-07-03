import React from 'react';
//import the action you want to use
import { addLetter } from '../../actions'
import { connect } from 'react-redux';


const mapStateToProps = store => ({
    currentLetter : store.letters.currentLetter
  })
//these always go outside the component
class Scape extends React.Component{
  constructor(){
    super()
  }
  
  render(){
    return(
      <div>
        {this.props.currentLetter}
      </div>
    )
  }
}
export default connect(mapStateToProps, null)(Scape);