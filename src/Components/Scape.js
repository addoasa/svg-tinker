import React from 'react';
//import the action you want to use
import { addSVG } from '../../actions'
import { connect } from 'react-redux';


const mapStateToProps = store => ({
  currentLetter : store.tinker.currentLetter
})
const mapDispatchToProps = dispatch => ({
  addSVG: ()=> dispatch(addSVG())
})


//these always go outside the component
class Scape extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.props.addSVG();
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