import React from "react";
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  currentLetter : store.tinker.currentLetter
})

class Tools extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <input type="range" max="500" min="0"></input>
        <input type="range" max="500" min="0"></input>
        <input type="range" max="500" min="0"></input>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Tools);