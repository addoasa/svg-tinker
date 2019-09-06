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