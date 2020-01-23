import React from "react";

class SVGShape extends React.Component{
	constructor(){
		super();
		this.handleDeleteSVG = this.handleDeleteSVG.bind(this);
		this.handleXPathVertice = this.handleXPathVertice.bind(this);
		this.handleYPathVertice = this.handleYPathVertice.bind(this);
		this.addCorner = this.addCorner.bind(this);
		this.removeCorner = this.removeCorner.bind(this);

	}
	//------------------------------------------------------------------------------------
	//  Methods for manipulating whole SVGs
	//------------------------------------------------------------------------------------

	handleDeleteSVG(event){
		// used split() here because event.target.className gives you all classes associated with an element as a long string.
		// Delete this specific PATH shape by sending its index to the PATH reducer for deletion
		// this.props.removeSVG(event.target.value, this.props.masterSVGArray[event.target.className.split(" ")[2].indexInChildArray]);
		this.props.removeFromMaster(event.target.className.split(" ")[2]);
		console.log(event.target.className.split(" ")[2]);
	}

 	//------------------------------------------------------------------------------------
  
	//------------------------------------------------------------------------------------
	// Methods for manipulating Path vertices
	//------------------------------------------------------------------------------------
	handleXPathVertice(event){
		this.props.setXPathVertice(event.target.value, event.target.className.split(" ")[0], event.target.className.split(" ")[1]);
		// console.log(event.target.className.split(" ")[1]);
	}
  
	handleYPathVertice(event){
		this.props.setYPathVertice(event.target.value, event.target.className.split(" ")[0],event.target.className.split(" ")[1]);
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
		let uniqueSVGObj = this.props.SVG.svgData;

		// loop through the current unique SVG object that this component represents in state 
		for(let key in uniqueSVGObj){
			// and put that object's slider values into an array called extractedRanges
			extractedRanges.push(uniqueSVGObj[key]);
		}

		switch(this.props.SVG.svgType){
		// **************************
		// Build a Path slider set
		// **************************
			case "PATH" :
				//-----------------------------------------
				//  Build slider set for each SVGShape component
				//-----------------------------------------
				// loop through the path slider values we've now extracted
				// and build a pair of UI sliders for each pair of x and y slider values
				// use variables i,j,and k to make sure each slider is accurate
				// creating an array of new sliders 
				//-----------------------------------------

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
								<input className = {`${this.props.index} sliderX${k}`} value= {extractedRanges[i-1]} onChange= {this.handleXPathVertice} type="range" max='1000' min="0"></input>
								<input className = {`${this.props.index} sliderY${k+1}`} value= {extractedRanges[i]} onChange= {this.handleYPathVertice} type="range" max="1000" min="0"></input>
							</div>
						</>);
				}
				break;

		// **************************
		// Build a Circle slider set
		// **************************
			case "CIRCLE":				

					newSlider.push(	
						<>
							<div className = "slider-labels">
								<p>x</p>
								<p>y</p>
								<p>r</p>
							</div>
							<div className = "verticies">
								<input className = {`${this.props.index} xAxis`} value= {extractedRanges[0]} onChange= {this.handleXPathVertice} type="range" max='1000' min="0"></input>
								<input className = {`${this.props.index} yAxis`} value= {extractedRanges[1]} onChange= {this.handleYPathVertice} type="range" max="1000" min="0"></input>
								<input className = {`${this.props.index} radius`} value= {extractedRanges[2]} onChange= {this.handleYPathVertice} type="range" max="1000" min="0"></input>
							</div>
						</>);
				
				break;
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