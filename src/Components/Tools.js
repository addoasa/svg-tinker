import React from "react";
// import "../../server/mong.js"
import { useSlider } from "../../actions";
// import { removeSVG } from "../../actions";
import { addVertices } from "../../actions";
import { removeVertices } from "../../actions";
import { removeFromMaster } from "../../actions";
import SVGShape from "./SVGShape.js";
import { connect } from "react-redux";

const mapStateToProps = store => ({
	workspaceHeight : store.paths.workspaceHeight,
	workspaceWidth : store.paths.workspaceWidth,
	activePathSVGs : store.paths.activePathSVGs,
	activeCircleSVGs : store.circles.activeCircleSVGs,
	masterSVGArray : store.master.masterSVGArray,
});
const mapDispatchToProps = dispatch => ({
	useSlider : (event, classId, sliderId)=> dispatch(useSlider(event, classId, sliderId)),
	// removeSVG : (event, classId)=> dispatch(removeSVG(event, classId)),
	removeFromMaster : (classId)=> dispatch(removeFromMaster(classId)),
	addVertices : (classId)=> dispatch(addVertices(classId)),
	removeVertices : (classId, xToDelete, yToDelete)=> dispatch(removeVertices(classId, xToDelete, yToDelete)),
});


class Tools extends React.Component{
	constructor(){
		super();
	}
	render(){
		console.log(this.props.masterSVGArray)
		//-----------------------------------------
		//  Build UI component called SVGShape for each SVG Object in state
		//-----------------------------------------

		const allSliders = this.props.masterSVGArray.map((SVG, index)=>{
			return (
				<SVGShape 
					key= {index} 
					useSlider={this.props.useSlider} 
					masterSVGArray={this.props.masterSVGArray} 
					SVG = {SVG} 
					index = {index} 
					addVertices = {this.props.addVertices} 
					removeVertices = {this.props.removeVertices} 
					removeFromMaster = {this.props.removeFromMaster} 
					workspaceHeight = {this.props.workspaceHeight}
					workspaceWidth = {this.props.workspaceWidth}
				/>
			); 
		});
		return(
			<section className = "entire-slider-container">
				<h2>SHAPES</h2>
				{allSliders}
			</section>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);