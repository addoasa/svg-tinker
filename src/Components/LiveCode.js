import React from "react";
import "../styles/LiveCode.css";
import { connect } from "react-redux";

// import alterRange

const mapStateToProps = store => ({
	activePathSVGs : store.paths.activePathSVGs,
	masterSVGArray : store.master.masterSVGArray,
});

class LiveCode extends React.Component{
	constructor(){
		super();
	}
 
	render(){
		let finalCodeString = "";
		// loop through each shape in state 
		const liveCode = this.props.masterSVGArray.map((SVG, index)=>{
			switch(SVG.svgType){
				// **************************
				// Code for PATH svg
				// **************************
				case "PATH":
					finalCodeString = "<path d=";
					// extract all values in an svg object and store in array
					const extractedRanges = [];
					for(let key in SVG.svgData){
						extractedRanges.push(SVG.svgData[key]);
					}
					// console.log(extractedRanges);
					// build final code string by gradually concatenating with extracted values
					for(let i = 0; i < extractedRanges.length; i++){
						if(i === 0){
							finalCodeString += `M${extractedRanges[i]}`;
						}else if(i % 2 === 0){
							finalCodeString += ` L${extractedRanges[i]}`;
						}else{
							finalCodeString += ` ${extractedRanges[i]}`;
						}
					}
					return( 
						<React.Fragment key={index}>
							<h2 className="code">{finalCodeString + " Z"}/></h2>
						</React.Fragment> 
					);
				// **************************
				// Code for CIRCLE svg
				// **************************
				case "CIRCLE":
					finalCodeString = `<circle cx=${SVG.svgData.xAxis} cy=${SVG.svgData.yAxis} r=${SVG.svgData.radius}`;
					// cx="100" cy="100" r="80"
					console.log(SVG.svgData)
					return( 
						<React.Fragment key={index}>
							<h2 className="code">{finalCodeString}/></h2>
						</React.Fragment> 
					);						
			}
		});
    
		return(
			<div className = "live-code-container">
				<h2 id = "live-code-title">Code</h2>
				<h6 id="live-code-caption">(You can copy this code into your svg tag!)</h6>
				<section id="live-code">
					{liveCode}
				</section>
			</div>
		);
	}
}
export default connect(mapStateToProps, null)(LiveCode);