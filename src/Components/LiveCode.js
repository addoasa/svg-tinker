import React from 'react';
import '../styles/LiveCode.css';
import { connect } from 'react-redux';

// import alterRange

const mapStateToProps = store => ({
  activeSVGs : store.tinker.activeSVGs,
})

class LiveCode extends React.Component{
  constructor(){
    super()
  }
 
  render(){
    //Below we build a 4 cornered path element and render it as a string 
    let finalCodeString = ""
    const liveCode = this.props.activeSVGs.map((SVG, index)=>{
      finalCodeString = "<path d="
      // extract all ranges in an svg object and store in array
      const extractedRanges = [];
      for(let key in SVG){
        extractedRanges.push(SVG[key]);
      }
      console.log(extractedRanges);
      for(let i = 0; i < extractedRanges.length; i++){
        if(i === 0){
          finalCodeString += `M${extractedRanges[i]}`
        }else if(i % 2 === 0){
          finalCodeString += ` L${extractedRanges[i]}`
        }else{
          finalCodeString += ` ${extractedRanges[i]}`
        }
      }
      return( 
        <React.Fragment>
          <h2 className="code">{finalCodeString}/></h2>
        </React.Fragment> 
      )
    })
    
    return(
      <div className = "live-code-container">
          <h2 id = "live-code-title">Code</h2>
          <h6 id="live-code-caption">(You can copy this code into your svg tag!)</h6>
          <section id="live-code">
             {liveCode}
          </section>
      </div>
    )
  }
}
export default connect(mapStateToProps, null)(LiveCode);