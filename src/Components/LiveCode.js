import React from "react";
import "../styles/LiveCode.css";
import { connect } from "react-redux";

// import alterRange

const mapStateToProps = store => ({
	activeSVGs : store.tinker.activeSVGs,
});

class LiveCode extends React.Component{
	constructor(){
		super();
	}
 
	render(){
		let finalCodeString = "";
		// loop through each shape in state 
		const liveCode = this.props.activeSVGs.map((SVG, index)=>{
			finalCodeString = "<path d=";
			// extract all ranges in an svg object and store in array
			const extractedRanges = [];
			for(let key in SVG){
				extractedRanges.push(SVG[key]);
			}
			console.log(extractedRanges);
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