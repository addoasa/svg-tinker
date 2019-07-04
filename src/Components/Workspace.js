import React from 'react';
import '../styles/Workspace.css';
import { setWorkspaceHeight } from '../../actions';
import { setWorkspaceWidth } from '../../actions';
import { connect } from 'react-redux';

// import alterRange

const mapStateToProps = store => ({
  workspaceHeight : store.tinker.workspaceHeight,
  workspaceWidth : store.tinker.workspaceWidth,
  range1x : store.tinker.range1x,
  range1y : store.tinker.range1y,
  range2x : store.tinker.range2x,
  range2y : store.tinker.range2y,
  range3x : store.tinker.range3x,
  range3y : store.tinker.range3y,
  range4x : store.tinker.range4x,
  range4y : store.tinker.range4y,
  activeSVGs : store.tinker.activeSVGs,


})

const mapDispatchToProps = dispatch =>({
  setWorkspaceHeight: (event)=> dispatch(setWorkspaceHeight(event)),
  setWorkspaceWidth: (event)=> dispatch(setWorkspaceWidth(event)),
})

class Workspace extends React.Component{
  constructor(){
    super()
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
  }
  handleHeightChange(event){
    this.props.setWorkspaceHeight(event.target.value)
    // console.log(event.target.value)
    console.log('setting height to',this.props.workspaceHeight)
  }

  handleWidthChange(event){
    this.props.setWorkspaceWidth(event.target.value)
    // console.log(event.target.value)
    console.log('setting width to',this.props.workspaceWidth)
  }
  render(){
    const allSVGs = this.props.activeSVGs.map((SVG, index)=>{
      return( 
        <React.Fragment>
          <path d={`M${this.props.activeSVGs[index].range1x} ${this.props.activeSVGs[index].range1y} L${this.props.activeSVGs[index].range2x} ${this.props.activeSVGs[index].range2y} L${this.props.activeSVGs[index].range3x} ${this.props.activeSVGs[index].range3y} L${this.props.activeSVGs[index].range4x} ${this.props.activeSVGs[index].range4y} Z`} />
          <div>&lt;path d={`M${this.props.range1x} ${this.props.range1y} L${this.props.range2x} ${this.props.range2y} L${this.props.range3x} ${this.props.range3y} L${this.props.range4x} ${this.props.range4y} Z`} /></div>
        </React.Fragment> 
      )
    })
    // let item = <path d={`M${this.props.range1x} ${this.props.range1y} L${this.props.range2x} ${this.props.range2y} L${this.props.range3x} ${this.props.range3y} L${this.props.range4x} ${this.props.range4y} Z`} />
    // let visibleCode = &lt;path d={`M${this.props.range1x} ${this.props.range1y} L${this.props.range2x} ${this.props.range2y} L${this.props.range3x} ${this.props.range3y} L${this.props.range4x} ${this.props.range4y} Z`} />

    return(
      <div>
        <label htmlFor="height">Height</label>
        <input onChange ={this.handleHeightChange} name = 'height' type='text'></input>
        <label htmlFor= 'width'>Width</label>
        <input onChange ={this.handleWidthChange} name= "width" type='text'></input>
        <svg id="workspace" height={this.props.workspaceHeight} width={this.props.workspaceWidth}>
        {allSVGs}
        </svg>

      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Workspace);