import React from 'react';
import '../styles/Workspace.css';
import { setWorkspaceHeight } from '../../actions';
import { connect } from 'react-redux';

// import alterRange

const mapStateToProps = store => ({
  workspaceHeight : store.tinker.workspaceHeight,
  workspaceWidth : store.tinker.workspaceWidth,

})

const mapDispatchToProps = dispatch =>({
  setWorkspaceHeight: (event)=> dispatch(setWorkspaceHeight(event))
})

class Workspace extends React.Component{
  constructor(){
    super()
    this.handleHeightChange = this.handleHeightChange.bind(this);
  }
  handleHeightChange(event){
    this.props.setWorkspaceHeight(event.target.value)
    // console.log(event.target.value)
    console.log(this.props.workspaceHeight)
  }
  render(){
    return(
      <div>
        <input onChange ={this.handleHeightChange} type='text'></input>
        <svg id="workspace" height={this.props.workspaceHeight} width={this.props.workspaceWidth}>
        <path d="M100 50 L100 100 L170 100 L170 50 Z" />
        <path d="M100 100 L75 100 L85 300 Z" />
        </svg>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Workspace);