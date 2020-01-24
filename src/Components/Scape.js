import React from 'react';
import '../styles/Scape.css';
//import the action you want to use
import { addPath, addCircle, addEllipse ,insertIntoMaster } from '../../actions'
import { connect } from 'react-redux';


const mapStateToProps = store => ({
  activePathSVGs : store.paths.activePathSVGs,
  activeCircleSVGs : store.circles.activeCircleSVGs,
  activeEllipseSVGs : store.ellipses.activeEllipseSVGs,
  masterSVGArray : store.master.masterSVGArray,

})
const mapDispatchToProps = dispatch => ({
  addPath: (indexInMaster)=> dispatch(addPath(indexInMaster)),
  addCircle: (indexInMaster)=> dispatch(addCircle(indexInMaster)),
  addEllipse: (indexInMaster)=> dispatch(addEllipse(indexInMaster)),
  insertIntoMaster: (SVG, svgType, idInChildArray)=> dispatch(insertIntoMaster(SVG, svgType, idInChildArray)),
})


//these always go outside the component
class Scape extends React.Component{
  constructor(){
    super();
    this. handleAddingAnSVG = this. handleAddingAnSVG.bind(this);
  }
  
  handleAddingAnSVG(event){
    switch(event.target.id){
      case "path-btn":
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
        break;
     
      case "circle-btn":
        // add a new circle to the circle array in the circle reducer
        this.props.addCircle(this.props.masterSVGArray.length);
        // then take the last circle added to the circle array and store it in a variable
        const lastCircleAdded = this.props.activeCircleSVGs[this.props.activeCircleSVGs.length - 1];
        // Let the masterarray keep track of this new shape's spot in the activeCirclesSVGs array
        const idInCircleArray = this.props.activeCircleSVGs.length -1;
        // now insert the last added circle into the master list to render
        this.props.insertIntoMaster(lastCircleAdded, "CIRCLE", idInCircleArray);
        // console.log(this.props.activeCircleSVGs)
        break;

      case "ellipse-btn":
        // add a new ellipse to the ellipse array in the ellipse reducer
        this.props.addEllipse(this.props.masterSVGArray.length);
        // then take the last circle added to the circle array and store it in a variable
        const lastEllipseAdded = this.props.activeEllipseSVGs[this.props.activeEllipseSVGs.length - 1];
        // Let the masterarray keep track of this new shape's spot in the activeCirclesSVGs array
        const idInEllipseArray = this.props.activeEllipseSVGs.length -1;
        // now insert the last added circle into the master list to render
        this.props.insertIntoMaster(lastEllipseAdded, "ELLIPSE", idInEllipseArray);
        // console.log(this.props.activeCircleSVGs)
    }
  }


  render(){
    console.log(this.props.masterSVGArray, "Master hoorray");

    return(
      <div className = "utility-wrapper">
        <div className="add-container">
          <i className={this.props.activePathSVGs.length !== 0 ? 'fas fa-plus-circle addSlider' : "fas fa-plus-circle emphasizeAddSlider"} id="path-btn" onClick ={this. handleAddingAnSVG}></i>
          <h4 className="add-caption">Add new shape</h4>
        </div>
        <div className="add-container-option">
          <i className="fa fa-circle addSlider" id="circle-btn" onClick ={this. handleAddingAnSVG}></i>
          <h4 className="add-caption">Circle</h4>
        </div>
        <div className="add-container-option">
          <i className="fa fa-circle addSlider" id="ellipse-btn"  onClick ={this. handleAddingAnSVG}></i>
          <h4 className="add-caption">Ellipse</h4>
        </div>
        <div className="add-container-option">
          <i className="fa fa-circle addSlider" id="line-btn"  onClick ={this. handleAddingAnSVG}></i>
          <h4 className="add-caption">Ellipse</h4>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Scape);