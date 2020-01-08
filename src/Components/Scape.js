import React from 'react';
import '../styles/Scape.css';
//import the action you want to use
import { addSVG, addCircle } from '../../actions'
import { connect } from 'react-redux';


const mapStateToProps = store => ({
  activeSVGs : store.tinker.activeSVGs,
  activeCircleSVGs : store.circle.activeCircleSVGs,

})
const mapDispatchToProps = dispatch => ({
  addSVG: ()=> dispatch(addSVG()),
  addCircle: ()=> dispatch(addCircle()),
})


//these always go outside the component
class Scape extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this);
  }
  
  handleClick(){
    this.props.addSVG();
  }
  handleCircleClick(){
    this.props.addCircle();
    console.log(this.props.activeCircleSVGs)
  }

  render(){
    return(
      <div className = "utility-wrapper">
        <div className="add-container">
          <i className={this.props.activeSVGs.length !== 0 ? 'fas fa-plus-circle addSlider' : "fas fa-plus-circle emphasizeAddSlider"} onClick ={this.handleClick}></i>
          <h4 className="add-caption">Add new shape</h4>
        </div>
        <div className="add-container-option">
          <i className="fa fa-circle addSlider"  onClick ={this.handleCircleClick}></i>
          <h4 className="add-caption">Circle</h4>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Scape);