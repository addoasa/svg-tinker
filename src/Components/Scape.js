import React from 'react';
//import the action you want to use
import { addLetter } from '../../actions'
import { connect } from 'react-redux';


const mapStateToProps = store => ({
  currentLetter : store.letters.currentLetter
})
const mapDispatchToProps = dispatch => ({
  addLetter: ()=> dispatch(addLetter())
})


//these always go outside the component
class Scape extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.props.addLetter();
  }

  render(){
    return(
      <div>
        <h1>{this.props.currentLetter}</h1>
        <button onClick ={this.handleClick}>{this.props.currentLetter}</button>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Scape);