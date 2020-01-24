import React from "react";
import "../styles/Workspace.css";
import { setWorkspaceHeight } from "../../actions";
import { setWorkspaceWidth } from "../../actions";
import { connect } from "react-redux";

// import alterRange

const mapStateToProps = store => ({
	workspaceHeight : store.paths.workspaceHeight,
	workspaceWidth : store.paths.workspaceWidth,
	activePathSVGs : store.paths.activePathSVGs,
	masterSVGArray : store.master.masterSVGArray,
});

const mapDispatchToProps = dispatch =>({
	setWorkspaceHeight: (event)=> dispatch(setWorkspaceHeight(event)),
	setWorkspaceWidth: (event)=> dispatch(setWorkspaceWidth(event)),
});

class Workspace extends React.Component{
	constructor(){
		super();
		this.handleHeightChange = this.handleHeightChange.bind(this);
		this.handleWidthChange = this.handleWidthChange.bind(this);
	}
	// The two functions below (handleHeightChange and handleWidthChange) are used to control the height and width of the work area
 
	handleHeightChange(event){
		this.props.setWorkspaceHeight(event.target.value);
		console.log("setting height to",this.props.workspaceHeight);
	}

	handleWidthChange(event){
		this.props.setWorkspaceWidth(event.target.value);
		console.log("setting width to",this.props.workspaceWidth);
	}

	render(){
		let renderString = "";
		const allSVGs = this.props.masterSVGArray.map((SVG, index)=>{
			switch(SVG.svgType){
			
				// **************************
				// Render PATH svg
				// **************************
				
				case "PATH":
					// create a 4 cornered path element based on each SVG object that exists in the activePathSVGs array in redux state
					renderString = "";
					const extractedRanges = [];
					for(let key in SVG.svgData){
						extractedRanges.push(SVG.svgData[key]);
					}
					for(let i = 0; i < extractedRanges.length; i++){
						if(i === 0){
							renderString += `M${extractedRanges[i]}`;
						}else if(i % 2 === 0){
							renderString += ` L${extractedRanges[i]}`;
						}else{
							renderString += ` ${extractedRanges[i]}`;
						}
					}
					return( 
						<React.Fragment key = {index}>
							<path  d={renderString + " Z"} />
						</React.Fragment> 
					);
				
				// **************************
				// Render CIRCLE svg
				// **************************
				
				// styles for circles are hard coded for now... until the styling feature is added
				case "CIRCLE":
					// renderString = `cx=${SVG.svgData.xAxis} cy=${SVG.svgData.yAxis} r=${SVG.svgData.radius} stroke="black" stroke-width="5" fill="red"`;
					// console.log(SVG.svgData)
					return( 
						<React.Fragment key={index}>
							<circle cx={SVG.svgData.xAxis} cy={SVG.svgData.yAxis} r={SVG.svgData.radius} stroke="black" stroke-width="5" fill="red" />
						</React.Fragment> 
					);						
				
				// **************************
				// Render Ellipse svg
				// **************************
				
				case "ELLIPSE":
					// renderString = `cx=${SVG.svgData.xAxis} cy=${SVG.svgData.yAxis} r=${SVG.svgData.radius} stroke="black" stroke-width="5" fill="red"`;
					// console.log(SVG.svgData)
					return( 
						<React.Fragment key={index}>
							<ellipse cx={SVG.svgData.xAxis} cy={SVG.svgData.yAxis} rx={SVG.svgData.rWidth} ry={SVG.svgData.rHeight} stroke="black" stroke-width="2" />
						</React.Fragment> 
					);						
			}
		});
		const emptyMessage = <h2>Add a shape</h2>;
		// Render all path elements from newly made allSVGs array inside svg tag
		return(
			<div className = "workspace-container">
				<label className="size-input1" htmlFor="height">Height</label>
				<input className="size-input" onChange ={this.handleHeightChange} name = 'height' type='text' maxLength="3"></input>
				<label  className="size-input2" htmlFor= 'width'>Width</label> 
				<input className="size-input "  onChange ={this.handleWidthChange} name= "width" type='text' maxLength="3"></input>
				<br />
				<svg id="workspace" className={this.props.masterSVGArray.length !== 0 ? "fine" : "empty-workspace"} height={this.props.workspaceHeight} width={this.props.workspaceWidth}>
					{this.props.masterSVGArray ? allSVGs : emptyMessage}  
				</svg>

			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Workspace);