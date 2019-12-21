import React from "react";
// import "../../server/mong.js"
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
	setY : (event, classId, sliderId)=> dispatch(setY(event, classId, sliderId)),
	setX : (event, classId, sliderId)=> dispatch(setX(event, classId, sliderId)),
  removeSVG : (event, classId)=> dispatch(removeSVG(event, classId)),
	addVertices : (classId)=> dispatch(addVertices(classId)),
});


class Tools extends React.Component{
	constructor(){
		super();
		this.handleX = this.handleX.bind(this);
		this.handleY = this.handleY.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.addCorner = this.addCorner.bind(this);
	}
	//------------------------------------------------------------------------------------

	handleX(event){
		this.props.setX(event.target.value, event.target.className.split(" ")[0], event.target.className.split(" ")[1]);
		console.log(event.target.className.split(" ")[1])
	}
	handleY(event){
		this.props.setY(event.target.value, event.target.className.split(" ")[0],event.target.className.split(" ")[1]);
	}

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