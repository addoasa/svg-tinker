import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../actions"

const mapStateToProps = (store)=>({
	uiState: store.uiState,
});
const mapDispatchToProps = dispatch => ({
	toggleModal: ()=> dispatch(toggleModal()),
});


class NavMenuModal extends React.Component{
	constructor(){
		super();
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleCloseModal(){
        this.props.toggleModal();
    }
	render(){
        console.log(this.props.uiState.currentModalType,"Modal")
        let modalForm;
        switch(this.props.uiState.currentModalType){
            case "New Empty Project": {
                modalForm = (
                    <form className="new-empty-project-form"> 
                        <main className="new-empty-project-form-content">
                            <section className="new-empty-project-form-project-name">
                                <h3>Project Title</h3>
                                <input type="text" placeholder="untitled_svg"></input>
                            </section>
                            <section className="new-empty-project-form-project-viewbox">
                                <div className="viewbox-caption"><h3>View Box</h3><div className="viewbox-info-guide"><p>i</p></div></div>
                                <div className="new-empty-project-form-project-viewbox-field">
                                    <label htmlFor="Height">Height</label>
                                    <input type="text" name="Height"></input>
                                </div>
                                <div className="new-empty-project-form-project-viewbox-field">
                                    <label htmlFor="Width">Width</label>
                                    <input type="text" name="Width"></input>
                                </div>

                            </section>
                        </main>
                        <div className="modal-form-btns">
                                <button type="button" className="modal-form-cancel-btn" onClick={this.handleCloseModal}>Cancel</button>
                                <button type="button" className="modal-form-ok-btn">OK</button>
                        </div>
                    </form>);
            }
        }
		return(
			<>
            <div className="invisible-bg"></div>
				<div className = "modal">
                    <div className="modal-heading">
                        <h2>{this.props.uiState.currentModalType}</h2>
                    </div>
					<div className ="modal-content">
                        {modalForm}
                    </div>
				</div>
			</>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuModal);