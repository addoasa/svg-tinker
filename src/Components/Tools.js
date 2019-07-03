import React from "react";
import { setRange1x } from '../../actions';
import { setRange1y } from '../../actions';
import { setRange2x } from '../../actions';
import { setRange2y } from '../../actions';
import { setRange3x } from '../../actions';
import { setRange3y } from '../../actions';
import { setRange4x } from '../../actions';
import { setRange4y } from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  currentLetter : store.tinker.currentLetter
})
const mapDispatchToProps = dispatch => ({
  setRange1x : (event)=> dispatch(setRange1x(event)),
  setRange1y : (event)=> dispatch(setRange1y(event)),
  setRange2x : (event)=> dispatch(setRange2x(event)),
  setRange2y : (event)=> dispatch(setRange2y(event)),
  setRange3x : (event)=> dispatch(setRange3x(event)),
  setRange3y : (event)=> dispatch(setRange3y(event)),
  setRange4x : (event)=> dispatch(setRange4x(event)),
  setRange4y : (event)=> dispatch(setRange4y(event)),
})


class Tools extends React.Component{
  constructor(){
    super()
    this.handleRange1x = this.handleRange1x.bind(this);
    this.handleRange1y = this.handleRange1y.bind(this);
    this.handleRange2x = this.handleRange2x.bind(this);
    this.handleRange2y = this.handleRange2y.bind(this);
    this.handleRange3x = this.handleRange3x.bind(this);
    this.handleRange3y = this.handleRange3y.bind(this);
    this.handleRange4x = this.handleRange4x.bind(this);
    this.handleRange4y = this.handleRange4y.bind(this);
  }

  handleRange1x(event){
    this.props.setRange1x(event.target.value)
  }
  handleRange1y(event){
    this.props.setRange1y(event.target.value)
  }
  handleRange2x(event){
    this.props.setRange2x(event.target.value)
  }
  handleRange2y(event){
    this.props.setRange2y(event.target.value)
  }
  handleRange3x(event){
    this.props.setRange3x(event.target.value)
  }
  handleRange3y(event){
    this.props.setRange3y(event.target.value)
  }
  handleRange4x(event){
    this.props.setRange4x(event.target.value)
  }
  handleRange4y(event){
    this.props.setRange4y(event.target.value)
  }
 

  render(){
    return(
      <div>
        <input onChange= {this.handleRange1x} type="range" max='1000' min="0"></input>
        <input onChange= {this.handleRange1y} type="range" max="1000" min="0"></input>
        <input onChange= {this.handleRange2x} type="range" max="1000" min="0"></input>
        <input onChange= {this.handleRange2y} type="range" max="1000" min="0"></input>
        <input onChange= {this.handleRange3x} type="range" max="1000" min="0"></input>
        <input onChange= {this.handleRange3y} type="range" max="1000" min="0"></input>
        <input onChange= {this.handleRange4x} type="range" max="1000" min="0"></input>
        <input onChange= {this.handleRange4y} type="range" max="1000" min="0"></input>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);