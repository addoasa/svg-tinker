import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (store)=>({
	uiState: store.uiState,
});

class NavMenuModal extends React.Component{
	constructor(){
		super();
	}

	render(){
        
		return(
			<>
				<div className = "">
					<h2>CHOCOLATE</h2>
					<div className =""></div>
				</div>
			</>
		);
	}
}

export default connect(mapStateToProps, null)(NavMenuModal);