import React from 'react';
import '../styles/Scape.css';
//import the action you want to use
import { addSVG } from '../../actions'
import { connect } from 'react-redux';


const mapStateToProps = store => ({
  activeSVGs : store.tinker.activeSVGs,

})
const mapDispatchToProps = dispatch => ({
  addSVG: ()=> dispatch(addSVG())
})


//these always go outside the component
class Scape extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.props.addSVG();
  }

  render(){
    return(
      <div className="add-container">
        <i className={this.props.activeSVGs.length !== 0 ? 'fas fa-plus-circle addSlider' : "fas fa-plus-circle emphasizeAddSlider"} onClick ={this.handleClick}></i>
        <h4 className="add-caption">Add new shape</h4>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Scape);