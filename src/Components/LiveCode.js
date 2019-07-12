import React from 'react';
import '../styles/LiveCode.css';
import { connect } from 'react-redux';

// import alterRange

const mapStateToProps = store => ({
  // workspaceHeight : store.tinker.workspaceHeight,
  // workspaceWidth : store.tinker.workspaceWidth,
  // range1x : store.tinker.range1x,
  // range1y : store.tinker.range1y,
  // range2x : store.tinker.range2x,
  // range2y : store.tinker.range2y,
  // range3x : store.tinker.range3x,
  // range3y : store.tinker.range3y,
  // range4x : store.tinker.range4x,
  // range4y : store.tinker.range4y,
  activeSVGs : store.tinker.activeSVGs,


})

class LiveCode extends React.Component{
  constructor(){
    super()
  }
 
  render(){
   
    const liveCode = this.props.activeSVGs.map((SVG, index)=>{
      return( 
        <React.Fragment>
          <h2 className="code">&lt;path d={`M${this.props.activeSVGs[index].range1x} ${this.props.activeSVGs[index].range1y} L${this.props.activeSVGs[index].range2x} ${this.props.activeSVGs[index].range2y} L${this.props.activeSVGs[index].range3x} ${this.props.activeSVGs[index].range3y} L${this.props.activeSVGs[index].range4x} ${this.props.activeSVGs[index].range4y} Z`} /></h2>
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