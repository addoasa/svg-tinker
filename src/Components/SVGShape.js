import React from "react";

class SVGShape extends React.Component{
	constructor(){
		super();
		this.handleDeleteSVG = this.handleDeleteSVG.bind(this);
		this.handleX = this.handleX.bind(this);
		this.handleY = this.handleY.bind(this);
		this.addCorner = this.addCorner.bind(this);
		this.removeCorner = this.removeCorner.bind(this);

	}
	//------------------------------------------------------------------------------------
	//  Methods for manipulating whole SVGs
	//------------------------------------------------------------------------------------

	handleDeleteSVG(event){
		// used split() here because event.target.className gives you all classes associated with an element as a long string.
		this.props.removeSVG(event.target.value, event.target.className.split(" ")[2]);
		console.log(event.target.className.split(" ")[2]);
	}

 	//------------------------------------------------------------------------------------
  
	//------------------------------------------------------------------------------------
	// Methods for manipulating Path vertices
	//------------------------------------------------------------------------------------
	handleX(event){
		this.props.setX(event.target.value, event.target.className.split(" ")[0], event.target.className.split(" ")[1]);
		// console.log(event.target.className.split(" ")[1]);
	}
  
	handleY(event){
		this.props.setY(event.target.value, event.target.className.split(" ")[0],event.target.className.split(" ")[1]);
    // console.log(event.target.className.split(" ")[1]);

  }
  
	addCorner(event){
		// used split() here because event.target.className gives you all classes associated with an element as a long string.
		this.props.addVertices(event.target.className.split(" ")[1]);
		console.log(event.target.className.split(" ")[1]);
	}
	removeCorner(event){
    const foundSlidersToDelete = event.target.parentElement.nextSibling.nextSibling.children;
    this.props.removeVertices(this.props.index, foundSlidersToDelete[0].className.split(" ")[1], foundSlidersToDelete[1].className.split(" ")[1]);
    // console.log(event.target.className.split(" ")[1]);
	}

	//------------------------------------------------------------------------------------

	render(){
		let newSlider = [];
		const extractedRanges = [];
		let uniqueSVGObj = this.props.SVG;
		// loop through the current unique SVG object that this component represents in state 
		// and put that object's slider values into an array called extractedRanges
		for(let key in uniqueSVGObj){
			extractedRanges.push(uniqueSVGObj[key]);
		}
    
		//-----------------------------------------
		//  Build slider set for each SVGShape component
		//-----------------------------------------
		// loop through the slider values we've now extracted
		// and build a pair of UI sliders for each pair of x and y slider values
		// use variables i,j,and k to make sure each slider is accurate
     
		for(let i = 1, j = 0, k = 0;i< extractedRanges.length; i+=2, j++,k+=2){
			newSlider.push(	
				<>
          <div className = "cornercaption-and-deletebtn">
            <h3 className="corner-caption">Corner {j}</h3>
            <button className = {`delete-vertice-btn ${this.props.index}`} onClick ={this.removeCorner}>Delete</button>
          </div>
          <div className = "slider-labels">
						<p>x-axis</p>
						<p>y-axis</p>
					</div>
					<div className = {`verticies corner${j}`}>
						<input className = {`${this.props.index} sliderX${k}`} value= {extractedRanges[i-1]} onChange= {this.handleX} type="range" max='1000' min="0"></input>
						<input className = {`${this.props.index} sliderY${k+1}`} value= {extractedRanges[i]} onChange= {this.handleY} type="range" max="1000" min="0"></input>
					</div>
				</>);
		}
		return (
		// create a UI container for each SVG object in state and give it sliders that corresspond with the values within it

			<div className = "a-single-slider-container">
				<div className ="shape-caption">
					<h1>Shape:{this.props.index + 1}</h1>
					<i className={`fas fa-times ${this.props.index}`} onClick ={this.handleDeleteSVG}></i>
				</div>
				{newSlider}
				<button className = {`add-vertice-btn ${this.props.index}`} onClick ={this.addCorner}>Add new vertice</button>
			</div>
		); 
	}
}

export default SVGShape;