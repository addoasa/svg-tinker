import React from "react";
// import "../../server/mong.js"
import { setRange1x } from "../../actions";
import { setRange1y } from "../../actions";
import { setRange2x } from "../../actions";
import { setRange2y } from "../../actions";
import { setRange3x } from "../../actions";
import { setRange3y } from "../../actions";
import { setRange4x } from "../../actions";
import { setRange4y } from "../../actions";
import { setX } from "../../actions";
import { setY } from "../../actions";
import { removeSVG } from "../../actions";
import { addVertices } from "../../actions";
import { connect } from "react-redux";
import "../styles/Tools.css";

const mapStateToProps = store => ({
	activeSVGs : store.tinker.activeSVGs
});
const mapDispatchToProps = dispatch => ({
	setRange1x : (event, classId)=> dispatch(setRange1x(event, classId)),
	setRange1y : (event, classId)=> dispatch(setRange1y(event, classId)),
	setY : (event, classId, sliderId)=> dispatch(setY(event, classId, sliderId)),
	setX : (event, classId, sliderId)=> dispatch(setX(event, classId, sliderId)),
	// setRange2x : (event, classId)=> dispatch(setRange2x(event, classId)),
	// setRange2y : (event, classId)=> dispatch(setRange2y(event, classId)),
	// setRange3x : (event, classId)=> dispatch(setRange3x(event, classId)),
	// setRange3y : (event, classId)=> dispatch(setRange3y(event, classId)),
	// setRange4x : (event, classId)=> dispatch(setRange4x(event, classId)),
	// setRange4y : (event, classId)=> dispatch(setRange4y(event, classId)),
	removeSVG : (event, classId)=> dispatch(removeSVG(event, classId)),
	addVertices : (classId)=> dispatch(addVertices(classId)),
});


class Tools extends React.Component{
	constructor(){
		super();
		this.handleRange1x = this.handleRange1x.bind(this);
		this.handleRange1y = this.handleRange1y.bind(this);
		this.handleX = this.handleX.bind(this);
		this.handleY = this.handleY.bind(this);
		// this.handleRange2x = this.handleRange2x.bind(this);
		// this.handleRange2y = this.handleRange2y.bind(this);
		// this.handleRange3x = this.handleRange3x.bind(this);
		// this.handleRange3y = this.handleRange3y.bind(this);
		// this.handleRange4x = this.handleRange4x.bind(this);
		// this.handleRange4y = this.handleRange4y.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.addCorner = this.addCorner.bind(this);
	}
	//------------------------------------------------------------------------------------
	handleRange1x(event){
		this.props.setRange1x(event.target.value, event.target.className );
		// console.log(event.target.className)
	}
	handleRange1y(event){
		this.props.setRange1y(event.target.value, event.target.className);
	}
	handleX(event){
		this.props.setX(event.target.value, event.target.className.split(" ")[0], event.target.className.split(" ")[1]);
		console.log(event.target.className.split(" ")[1])
	}
	handleY(event){
		this.props.setY(event.target.value, event.target.className.split(" ")[0],event.target.className.split(" ")[1]);
	}
	// handleRange2x(event){
	// 	this.props.setRange2x(event.target.value, event.target.className);
	// }
	// handleRange2y(event){
	// 	this.props.setRange2y(event.target.value, event.target.className);
	// }
	// handleRange3x(event){
	// 	this.props.setRange3x(event.target.value, event.target.className);
	// }
	// handleRange3y(event){
	// 	this.props.setRange3y(event.target.value, event.target.className);
	// }
	// handleRange4x(event){
	// 	this.props.setRange4x(event.target.value, event.target.className);
	// }
	// handleRange4y(event){
	// 	this.props.setRange4y(event.target.value, event.target.className);
	// }
	//------------------------------------------------------------------------------------

	handleClick(event){
		// used split() here because event.target.className gives you all classes associated with an element as a long string.
		this.props.removeSVG(event.target.value, event.target.className.split(" ")[2]);
		console.log(event.target.className.split(" ")[2])
	}
	addCorner(event){
		// used split() here because event.target.className gives you all classes associated with an element as a long string.
		this.props.addVertices(event.target.className.split(" ")[1]);
		console.log(event.target.className.split(" ")[1]);

	}
 

	render(){
		// console.log(mong.getSVGCollection())
		const allSliders = this.props.activeSVGs.map((SVG, index)=>{
			let newSlider = [];
			const extractedRanges = [];
			for(let key in SVG){
				extractedRanges.push(SVG[key]);
			}
			for(let i = 1 ,j= 0,k=0;i< extractedRanges.length; i+=2, j++,k+=2){
				newSlider.push(	<>
					<h3 className="corner-caption">Corner {j}</h3>
					<div className = "slider-labels">
						<p>x-axis</p>
						<p>y-axis</p>
					</div>
					<div className = {`verticies corner${j}`}>
						<input className = {`${index} sliderX${k}`} value= {extractedRanges[i-1]} onChange= {this.handleX} type="range" max='1000' min="0"></input>
						<input className = {`${index} sliderY${k+1}`} value= {extractedRanges[i]} onChange= {this.handleY} type="range" max="1000" min="0"></input>
					</div>
				</>);
			}
			return (
        
				<div key ={index} className = "a-single-slider-container">
					<div className ="shape-caption">
						<h1>Shape:{index + 1}</h1>
						<i className={`fas fa-times ${index}`} onClick ={this.handleClick}></i>
						{/* <i className={`fas fa-minus-circle ${index}`} onClick ={this.handleClick}></i> */}
					</div>
					{/* <h3 className="corner-caption">Corner 1</h3>
					<div className = "slider-labels">
						<p>x-axis</p>
						<p>y-axis</p>
					</div>
					<div className = "verticies corner1">
						<input className = {index} value= {this.props.activeSVGs[index].range1x} onChange= {this.handleRange1x} type="range" max='1000' min="0"></input>
						<input className = {index} value= {this.props.activeSVGs[index].range1y} onChange= {this.handleRange1y} type="range" max="1000" min="0"></input>
					</div> */}
					{/* <h3 className="corner-caption">Corner 2</h3>
           <div className = "slider-labels">
            <p>x-axis</p>
            <p>y-axis</p>
            </div>

          <div className = "verticies corner2">
            <input className = {index} onChange= {this.handleRange2x} type="range" max="1000" min="0"></input>
            <input className = {index} onChange= {this.handleRange2y} type="range" max="1000" min="0"></input>
          </div>
          <h3 className="corner-caption">Corner 3</h3>
            <div className = "slider-labels">
            <p>x-axis</p>
            <p>y-axis</p>
            </div>

          <div className = "verticies corner3">
            <input className = {index} onChange= {this.handleRange3x} type="range" max="1000" min="0"></input>
            <input className = {index} onChange= {this.handleRange3y} type="range" max="1000" min="0"></input>
          </div>
          <h3 className="corner-caption">Corner 4</h3>
            <div className = "slider-labels">
            <p>x-axis</p>
            <p>y-axis</p>
            </div>

          <div className = "verticies corner4">
            <input className = {index} onChange= {this.handleRange4x} type="range" max="1000" min="0"></input>
            <input className = {index} onChange= {this.handleRange4y} type="range" max="1000" min="0"></input>
          </div> */}
					{newSlider}
					<button className = {`add-vertice-btn ${index}`} onClick ={this.addCorner}>Add new vertice</button>
				</div>
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