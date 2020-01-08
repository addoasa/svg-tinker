import React from 'react';
import '../styles/Scape.css';
//import the action you want to use
import { addSVG, addCircle, insertIntoMaster } from '../../actions'
import { connect } from 'react-redux';


const mapStateToProps = store => ({
  activeSVGs : store.tinker.activeSVGs,
  activeCircleSVGs : store.circles.activeCircleSVGs,
  masterSVGArray : store.master.masterSVGArray,

})
const mapDispatchToProps = dispatch => ({
  addSVG: ()=> dispatch(addSVG()),
  addCircle: ()=> dispatch(addCircle()),
  insertIntoMaster: (SVG, svgType)=> dispatch(insertIntoMaster(SVG, svgType)),
})


//these always go outside the component
class Scape extends React.Component{
  constructor(){
    super()
    this.handlePathClick = this.handlePathClick.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this);
  }
  
  handlePathClick(){
    this.props.addSVG();
    const lastPathAdded = this.props.activeSVGs[this.props.activeSVGs.length - 1];
    this.props.insertIntoMaster(lastPathAdded, "PATH");

  }
  handleCircleClick(){
    // add a new circle to the circle array in the circle reducer
    this.props.addCircle();
    // then take the last circle added to the circle array and store it in a variable
    const lastCircleAdded = this.props.activeCircleSVGs[this.props.activeCircleSVGs.length - 1];
    // now insert the last added circle into the master list to render
    this.props.insertIntoMaster(lastCircleAdded, "CIRCLE");
    // console.log(this.props.activeCircleSVGs)
  }

  render(){
    console.log(this.props.masterSVGArray, "Master hoorray");

    return(
      <div className = "utility-wrapper">
        <div className="add-container">
          <i className={this.props.activeSVGs.length !== 0 ? 'fas fa-plus-circle addSlider' : "fas fa-plus-circle emphasizeAddSlider"} onClick ={this.handlePathClick}></i>
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