import React from "react";
import "../styles/SVGShape.scss";

class SVGShape extends React.Component{
	constructor(){
		super();
		this.handleDeleteSVG = this.handleDeleteSVG.bind(this);
		this.sliderHandler = this.sliderHandler.bind(this);
		this.addCorner = this.addCorner.bind(this);
		this.removeCorner = this.removeCorner.bind(this);

	}
	//------------------------------------------------------------------------------------
	//  Methods for manipulating whole SVGs
	//------------------------------------------------------------------------------------

	handleDeleteSVG(event){
		// using split() here because event.target.className gives you all classes associated with an element as a long string.
		// Delete this specific shape by sending its index to the masterReducer for deletion
		// this.props.removeSVG(event.target.value, this.props.masterSVGArray[event.target.className.split(" ")[2].indexInChildArray]);
		this.props.removeFromMaster(event.target.className.split(" ")[2]);
		console.log(event.target.className.split(" ")[2]);
	}

 	//------------------------------------------------------------------------------------
  
	//------------------------------------------------------------------------------------
	// Methods for manipulating Path vertices
	//------------------------------------------------------------------------------------
	sliderHandler(event){
		// Use this function to send the following to masterReducer:
				// 1) the value of this slider set by user, 
				// 2) the specific shape the user is manipulating, 
				// 3) and the name of the key value to manipulate in state

		// With that payload data, the master reducer will then do the following :		
			 // 1) search the masterSVGarray
			 // 2) find the location of this unique SVG on this master array by using the index of this shape in master array (className.split(" ")[0] is this shapes index)
			 // 3) finally find the key on this unique svg obj that matches the event.target.id that was passed and manipulate its value
		this.props.useSlider(event.target.value, event.target.className.split(" ")[0], event.target.className.split(" ")[1]);
		// console.log(event.target.className.split(" ")[1]);
	}
  
	addCorner(event){
		// used split() here because event.target.className gives you all classes associated with an element as a long string.
		this.props.addVertices(event.target.className.split(" ")[1]);
		console.log(event.target.className.split(" ")[1]);
	}
	removeCorner(event){
		// Searching the dom for the slider vertice class names to be sent to the master reducer for deletion
    const foundSlidersToDelete = event.target.parentElement.parentElement.parentElement.children[0].children;
    this.props.removeVertices(this.props.index, foundSlidersToDelete[1].children[1].className.split(" ")[1], foundSlidersToDelete[2].children[1].className.split(" ")[1]);
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
				//  Build slider set if this <SVGShape /> component is the type of: "PATH"
				//-----------------------------------------
				// loop through the path slider values we've now extracted from state obj
				// and build a pair of UI sliders for each pair of x and y slider values
				// use variables i,j,and k to make sure each slider is accurate
				// creating an array of new sliders 
				//-----------------------------------------

				for(let i = 1, j = 0, k = 0;i< extractedRanges.length; i+=2, j++,k+=2){
					newSlider.push(	
						<>

							<div className = {`slider-set-and-btns corner${j}`}>
								<div className = "slider-set">
									<h3 className="corner-label">Corner {j}</h3>
									<div className = "slider">
										<p className = "slider-label">X</p>
										<input className = {`${this.props.index} sliderX${k}`} value= {extractedRanges[i-1]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
									</div>
									<div className = "slider">
										<p className = "slider-label">Y</p>
										<input className = {`${this.props.index} sliderY${k+1}`} value= {extractedRanges[i]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
									</div>
								</div>
								{/* <input className = {`${this.props.index} sliderX${k}`} value= {extractedRanges[i-1]} onChange= {this.sliderHandler} type="range" max={`${this.props.workspaceHeight}`} min="0"></input>
								<input className = {`${this.props.index} sliderY${k+1}`} value= {extractedRanges[i]} onChange= {this.sliderHandler} type="range" max={`${this.props.workspaceHeight}`} min="0"></input> */}
								<div className="slider-btns-and-status">
									<div className = "slider-btns">
										<button></button>
										<button ></button>
										<button className = {`delete-vertice-btn ${this.props.index}`} onClick ={this.removeCorner}>-</button>
									</div>
									<p>(200,655)</p>
								</div>

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
						<div className="slider-set-and-btns">
							<div className = "slider-set">
								<div className = "slider">
									<p className = "slider-label">X</p>
									<input className = {`${this.props.index} xAxis`} value= {extractedRanges[0]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
								</div>
								<div className = "slider">
									<p className = "slider-label">Y</p>
									<input className = {`${this.props.index} yAxis`} value= {extractedRanges[1]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
								</div>
								<div className = "slider">
									<p className = "slider-label">R</p>
									<input className = {`${this.props.index} radius`} value= {extractedRanges[2]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
								</div>
							</div>
							<div className="slider-btns-and-status">
								<div className = "slider-btns">
									<button ></button>
								</div>
								<p>(200,655)</p>
								<p>(200)</p>
							</div>
						</div>
					</>);
				
				break;

		// **************************
		// Build an Ellipse slider set
		// **************************
			case "ELLIPSE":				

				newSlider.push(	
					<>
						<div className="slider-set-and-btns">
							<div className = "slider-set">
								<div className = "slider">
									<p className = "slider-label">X</p>
									<input className = {`${this.props.index} xAxis`} value= {extractedRanges[0]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
								</div>
								<div className = "slider">
									<p className = "slider-label">Y</p>
									<input className = {`${this.props.index} yAxis`} value= {extractedRanges[1]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
								</div>
								<div className = "slider">
									<p className = "slider-label">W</p>
									<input className = {`${this.props.index} rWidth`} value= {extractedRanges[2]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
								</div>
								<div className = "slider">
									<p className = "slider-label">H</p>
									<input className = {`${this.props.index} rHeight`} value= {extractedRanges[3]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
								</div>
							</div>
							<div className="slider-btns-and-status">
								<div className = "slider-btns">
								<button ></button>
								</div>
								<p>(200,655)</p>
								<p>(200,655)</p>
							</div>

						</div>
					</>);
			
				break;
				
		// **************************
		// Build a Rectangle slider set
		// **************************
			case "RECTANGLE":				

			newSlider.push(	
				<>
					<div className="slider-set-and-btns">
						<div className = "slider-set">
							<div className = "slider">
								<p className = "slider-label">X</p>
								<input className = {`${this.props.index} x`} value= {extractedRanges[0]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
							</div>
							<div className = "slider">
								<p className = "slider-label">Y</p>
								<input className = {`${this.props.index} y`} value= {extractedRanges[1]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
							</div>
							<div className = "slider">
								<p className = "slider-label">RX</p>
								<input className = {`${this.props.index} rx`} value= {extractedRanges[2]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
							</div>
							<div className = "slider">
								<p className = "slider-label">RY</p>
								<input className = {`${this.props.index} ry`} value= {extractedRanges[3]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
							</div>
							<div className = "slider">
								<p className = "slider-label">W</p>
								<input className = {`${this.props.index} width`} value= {extractedRanges[4]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
							</div>
							<div className = "slider">
								<p className = "slider-label">H</p>
								<input className = {`${this.props.index} height`} value= {extractedRanges[5]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
							</div>
						</div>
						<div className="slider-btns-and-status">
							<div className = "slider-btns">
							<button ></button>
							</div>
							<p>(200,655)</p>
							<p>(200,655)</p>
							<p>(200,655)</p>
						</div>

					</div>
				</>);
		
			break;
			
		// **************************
		// Build an Text slider set
		// **************************
		case "TEXT":				

		newSlider.push(	
			<>
				<div className="slider-set-and-btns">
					<div className = "slider-set">
						<div className = "slider">
							<p className = "slider-label">X</p>
							<input className = {`${this.props.index} x`} value= {extractedRanges[0]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
						</div>
						<div className = "slider">
							<p className = "slider-label">Y</p>
							<input className = {`${this.props.index} y`} value= {extractedRanges[1]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
						</div>
						<div className = "slider">
							<p className = "slider-label">T</p>
							<input className = {`${this.props.index} text`} value= {extractedRanges[2]} onChange= {this.sliderHandler} type="text" ></input>
						</div>
					</div>
					<div className="slider-btns-and-status">
						<div className = "slider-btns">
						<button ></button>
						</div>
						<p>(200,655)</p>
					</div>

				</div>
			</>);
	
		break;
		
		// **************************
		// Build an Line slider set
		// **************************
		case "LINE":				

		newSlider.push(	
			<>
				<div className="slider-set-and-btns">
					<div className = "slider-set">
						<div className="slider">
							<p className = "slider-label">X1</p>
							<input className = {`${this.props.index} x1`} value= {extractedRanges[0]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
						</div>
						<div className="slider">
							<p className = "slider-label">Y1</p>
							<input className = {`${this.props.index} y1`} value= {extractedRanges[1]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
						</div>
						<div className="slider">
							<p className = "slider-label">X2</p>
							<input className = {`${this.props.index} x2`} value= {extractedRanges[2]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
						</div>
						<div className="slider">
							<p className = "slider-label">Y2</p>
							<input className = {`${this.props.index} y2`} value= {extractedRanges[3]} onChange= {this.sliderHandler} type="range" max="1000" min="0"></input>
						</div>
					</div>
					<div className="slider-btns-and-status">
						<div className = "slider-btns">
						<button ></button>
						</div>
						<p>(200,655)</p>
						<p>(880,300)</p>
					</div>

				</div>
			</>);
	
		break;
		}


		return (
		// create a UI container for each SVG object in state and give it sliders that corresspond with the values within it

			<div className = {`a-single-slider-container ${this.props.SVG.svgType}-container`}>
				<div className ="shape-caption">
					<h1 >{this.props.index + 1}</h1>
					<i className={`fas fa-times ${this.props.index}`} onClick ={this.handleDeleteSVG}></i>
				</div>
				<div className = "shape-name-and-img">
					<h3 className ="shape-name">{this.props.SVG.svgType}</h3>
					<div className="shape-img">
						<img src="https://i.stack.imgur.com/qdR8p.png" />
					</div>
				</div>
				<hr></hr>
				{newSlider}
				{this.props.SVG.svgType === "PATH" ? <button className = {`add-vertice-btn ${this.props.index}`} onClick ={this.addCorner}>Add new vertice</button> : <></>}
				<p className="collapse-sliders">Collapse</p>
			</div>
		); 
	}
}

export default SVGShape;