import React from "react";
// import "../../server/mong.js"
import { setX } from "../../actions";
import { setY } from "../../actions";
import { removeSVG } from "../../actions";
import { addVertices } from "../../actions";
import { removeVertices } from "../../actions";
import SVGShape from "./SVGShape.js";
import { connect } from "react-redux";
import "../styles/Tools.css";

const mapStateToProps = store => ({
	activeSVGs : store.tinker.activeSVGs,
	activeCircleSVGs : store.circles.activeCircleSVGs,
});
const mapDispatchToProps = dispatch => ({
	setY : (event, classId, sliderId)=> dispatch(setY(event, classId, sliderId)),
	setX : (event, classId, sliderId)=> dispatch(setX(event, classId, sliderId)),
	removeSVG : (event, classId)=> dispatch(removeSVG(event, classId)),
	addVertices : (classId)=> dispatch(addVertices(classId)),
	removeVertices : (classId, xToDelete, yToDelete)=> dispatch(removeVertices(classId, xToDelete, yToDelete)),
});


class Tools extends React.Component{
	constructor(){
		super();
	}
	render(){
		//-----------------------------------------
		//  Build UI component called SVGShape for each SVG Object in state
		//-----------------------------------------
		const allSliders = this.props.activeSVGs.map((SVG, index)=>{
			return (
				<SVGShape 
					key= {index} 
					setY={this.props.setY} 
					setX={this.props.setX} 
					activeSVGs={this.props.activeSVGs} 
					SVG = {SVG} 
					index = {index} 
					addVertices = {this.props.addVertices} 
					removeVertices = {this.props.removeVertices} 
					removeSVG = {this.props.removeSVG} 
				/>
			); 
		});
		return(
			<section className = "entire-slider-container">
				{allSliders}
			</section>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);