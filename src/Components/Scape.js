import React from 'react';
import '../styles/Scape.css';
//import the action you want to use
import { addPath, addCircle, insertIntoMaster } from '../../actions'
import { connect } from 'react-redux';


const mapStateToProps = store => ({
  activePathSVGs : store.paths.activePathSVGs,
  activeCircleSVGs : store.circles.activeCircleSVGs,
  masterSVGArray : store.master.masterSVGArray,

})
const mapDispatchToProps = dispatch => ({
  addPath: (indexInMaster)=> dispatch(addPath(indexInMaster)),
  addCircle: (indexInMaster)=> dispatch(addCircle(indexInMaster)),
  insertIntoMaster: (SVG, svgType, idInChildArray)=> dispatch(insertIntoMaster(SVG, svgType, idInChildArray)),
})


//these always go outside the component
class Scape extends React.Component{
  constructor(){
    super();
    this.handlePathClick = this.handlePathClick.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this);
  }
  
  handlePathClick(){
    // add a new path to the path array in the path reducer
    // ALSO, passing in the length of the entire masterarray so that this path knows where it exists within the masterarray
    // when this path is created, it will be assigned the length of the masterarray as its index/SPOT in the master array
    this.props.addPath(this.props.masterSVGArray.length);
    // then take the last path added to the path array and store it in a variable
    const lastPathAdded = this.props.activePathSVGs[this.props.activePathSVGs.length - 1];
    // Let the masterarray keep track of this new shape's spot in the activePathsSVGs array for easy O(1) deletion
    const idInPathArray = this.props.activePathSVGs.length -1;
    // now insert the last added path into the master list to render   
    this.props.insertIntoMaster(lastPathAdded, "PATH", idInPathArray);
  }

  handleCircleClick(){
    // add a new circle to the circle array in the circle reducer
    this.props.addCircle(this.props.masterSVGArray.length);
    // then take the last circle added to the circle array and store it in a variable
    const lastCircleAdded = this.props.activeCircleSVGs[this.props.activeCircleSVGs.length - 1];
    // Let the masterarray keep track of this new shape's spot in the activeCirclesSVGs array
    const idInCircleArray = this.props.activeCircleSVGs.length -1;
    // now insert the last added circle into the master list to render
    this.props.insertIntoMaster(lastCircleAdded, "CIRCLE", idInCircleArray);
    // console.log(this.props.activeCircleSVGs)
  }

  render(){
    console.log(this.props.masterSVGArray, "Master hoorray");

    return(
      <div className = "utility-wrapper">
        <div className="add-container">
          <i className={this.props.activePathSVGs.length !== 0 ? 'fas fa-plus-circle addSlider' : "fas fa-plus-circle emphasizeAddSlider"} onClick ={this.handlePathClick}></i>
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