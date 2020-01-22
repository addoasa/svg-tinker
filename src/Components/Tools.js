import React from "react";
// import "../../server/mong.js"
import { setXPathVertice } from "../../actions";
import { setYPathVertice } from "../../actions";
import { removeSVG } from "../../actions";
import { addVertices } from "../../actions";
import { removeVertices } from "../../actions";
import { removeFromMaster } from "../../actions";
import SVGShape from "./SVGShape.js";
import { connect } from "react-redux";
import "../styles/Tools.css";

const mapStateToProps = store => ({
	activePathSVGs : store.paths.activePathSVGs,
	activeCircleSVGs : store.circles.activeCircleSVGs,
	masterSVGArray : store.master.masterSVGArray,
});
const mapDispatchToProps = dispatch => ({
	setYPathVertice : (event, classId, sliderId)=> dispatch(setYPathVertice(event, classId, sliderId)),
	setXPathVertice : (event, classId, sliderId)=> dispatch(setXPathVertice(event, classId, sliderId)),
	removeSVG : (event, classId)=> dispatch(removeSVG(event, classId)),
	removeFromMaster : (classId)=> dispatch(removeFromMaster(classId)),
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
		// const allSliders = this.props.activePathSVGs.map((SVG, index)=>{
		// 	return (
		// 		<SVGShape 
		// 			key= {index} 
		// 			setYPathVertice={this.props.setYPathVertice} 
		// 			setXPathVertice={this.props.setXPathVertice} 
		// 			activePathSVGs={this.props.activePathSVGs} 
		// 			SVG = {SVG} 
		// 			index = {index} 
		// 			addVertices = {this.props.addVertices} 
		// 			removeVertices = {this.props.removeVertices} 
		// 			removeSVG = {this.props.removeSVG} 
		// 		/>
		// 	); 
		// });
		const allSliders = this.props.masterSVGArray.map((SVG, index)=>{
			return (
				<SVGShape 
					key= {index} 
					setYPathVertice={this.props.setYPathVertice} 
					setXPathVertice={this.props.setXPathVertice} 
					masterSVGArray={this.props.masterSVGArray} 
					SVG = {SVG} 
					index = {index} 
					addVertices = {this.props.addVertices} 
					removeVertices = {this.props.removeVertices} 
					removeFromMaster = {this.props.removeFromMaster} 
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