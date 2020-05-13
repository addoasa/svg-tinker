import React from 'react';
//import the action you want to use
import { addPath, addCircle, addEllipse , addRectangle, addText, addLine, insertIntoMaster } from '../../actions'
import { connect } from 'react-redux';
import "../styles/MenuItem.scss";


const mapStateToProps = store => ({
	activePathSVGs : store.paths.activePathSVGs,
	activeCircleSVGs : store.circles.activeCircleSVGs,
	activeEllipseSVGs : store.ellipses.activeEllipseSVGs,
	activeRectangleSVGs : store.rectangles.activeRectangleSVGs,
	activeTextSVGs : store.texts.activeTextSVGs,
	activeLineSVGs : store.lines.activeLineSVGs,
	masterSVGArray : store.master.masterSVGArray,

});
const mapDispatchToProps = dispatch => ({
	addPath: (indexInMaster)=> dispatch(addPath(indexInMaster)),
	addCircle: (indexInMaster)=> dispatch(addCircle(indexInMaster)),
	addEllipse: (indexInMaster)=> dispatch(addEllipse(indexInMaster)),
	addRectangle: (indexInMaster)=> dispatch(addRectangle(indexInMaster)),
	addText: (indexInMaster)=> dispatch(addText(indexInMaster)),
	addLine: (indexInMaster)=> dispatch(addLine(indexInMaster)),
	insertIntoMaster: (SVG, svgType, idInChildArray)=> dispatch(insertIntoMaster(SVG, svgType, idInChildArray)),
});


//these always go outside the component
class MenuItem extends React.Component{
	constructor(){
		super();
		this. handleAddingAnSVG = this. handleAddingAnSVG.bind(this);
	}
  
	handleAddingAnSVG(event){
		switch(event.target.id){
		case "Path-btn":
            event.stopPropagation()
			// add a new path to the path array in the path reducer
			// ALSO, passing in the length of the entire masterarray so that this path knows where it exists within the masterarray
			// when this path is created, it will be assigned the length of the masterarray as its index/SPOT in the master array
			this.props.addPath(this.props.masterSVGArray.length);
			// then take the last path added to the path array and store it in a variable
			const lastPathAdded = this.props.activePathSVGs[this.props.activePathSVGs.length - 1];
			// Let the masterarray keep track of this new shape's spot in the activePathsSVGs array for easy O(1) deletion
			const idInPathArray = this.props.activePathSVGs.length -1;
			// now insert the last added path into the master list to render   
			this.props.insertIntoMaster(lastPathAdded, "PATH", idInPathArray);
			break;
     
		case "Circle-btn":
			// add a new circle to the circle array in the circle reducer
			this.props.addCircle(this.props.masterSVGArray.length);
			// then take the last circle added to the circle array and store it in a variable
			const lastCircleAdded = this.props.activeCircleSVGs[this.props.activeCircleSVGs.length - 1];
			// Let the masterarray keep track of this new shape's spot in the activeCirclesSVGs array
			const idInCircleArray = this.props.activeCircleSVGs.length -1;
			// now insert the last added circle into the master list to render
			this.props.insertIntoMaster(lastCircleAdded, "CIRCLE", idInCircleArray);
			// console.log(this.props.activeCircleSVGs)
			break;

		case "Ellipse-btn":
			// add a new ellipse to the ellipse array in the ellipse reducer
			this.props.addEllipse(this.props.masterSVGArray.length);
			// then take the last circle added to the circle array and store it in a variable
			const lastEllipseAdded = this.props.activeEllipseSVGs[this.props.activeEllipseSVGs.length - 1];
			// Let the masterarray keep track of this new shape's spot in the activeEllipseSVGs array
			const idInEllipseArray = this.props.activeEllipseSVGs.length -1;
			// now insert the last added ellipse into the master list to render
			this.props.insertIntoMaster(lastEllipseAdded, "ELLIPSE", idInEllipseArray);
			// console.log(this.props.activeEllipseSVGs)
			break;

		case "Rectangle-btn":
			// add a new rectangle to the rectangle array in the rectangle reducer
			this.props.addRectangle(this.props.masterSVGArray.length);
			// then take the last rectangle added to the rectangle array and store it in a variable
			const lastRectangleAdded = this.props.activeRectangleSVGs[this.props.activeRectangleSVGs.length - 1];
			// Let the masterarray keep track of this new shape's spot in the activeRectangleSVGs array
			const idInRectangleArray = this.props.activeRectangleSVGs.length -1;
			// now insert the last added rectangle into the master list to render
			this.props.insertIntoMaster(lastRectangleAdded, "RECTANGLE", idInRectangleArray);
			// console.log(this.props.activeRectangleSVGs)
			break;

		case "Text-btn":
			// add a new text obj to the text array in the text reducer
			this.props.addText(this.props.masterSVGArray.length);
			// then take the last text obj that was added to the text array and store it in a variable
			const lastTextAdded = this.props.activeTextSVGs[this.props.activeTextSVGs.length - 1];
			// Let the masterarray keep track of this new shape's spot in the activeTextSVGs array
			const idInTextArray = this.props.activeTextSVGs.length -1;
			// now insert the last added text into the master list to render
			this.props.insertIntoMaster(lastTextAdded, "TEXT", idInTextArray);
			// console.log(this.props.activeTextSVGs)
			break;

		case "Line-btn":
			// add a new ellipse to the ellipse array in the ellipse reducer
			this.props.addLine(this.props.masterSVGArray.length);
			// then take the last line added to the line array and store it in a variable
			const lastLineAdded = this.props.activeLineSVGs[this.props.activeLineSVGs.length - 1];
			// Let the masterarray keep track of this new shape's spot in the activeLineSVGs array
			const idInLineArray = this.props.activeLineSVGs.length -1;
			// now insert the last added line into the master list to render
			this.props.insertIntoMaster(lastLineAdded, "LINE", idInLineArray);
			// console.log(this.props.activeCircleSVGs)
			break;
		}
	}


	render(){
		// console.log(this.props.masterSVGArray, "Master hoorray");
		console.log(this.props.currentSideNavMenuType)
		//---------------------------------------------------------------------------------------------
        // The <MenuList /> Component is supplying this component (through props) with specific items that are to be shown on the
        // current menu that the user clicked/chose. Depending on which icon the user clicked this component will be created
        // for the items for the specific menu that was selected.
        
		//---------------------------------------------------------------------------------------------
        let menuItemToDisplay = "";
        
        // if the user clicked the add shapes button ...
		if(this.props.currentSideNavMenuType === "add shapes"){
			switch(this.props.svgTypeToAdd){
                case "Path" : {
                    menuItemToDisplay = (
                        <div className = "menu-item">
                            <div className="add-container-option">
                                {/* <i className="fa fa-plus-circle addSlider" id={`${this.props.svgTypeToAdd}-btn`} onClick ={this. handleAddingAnSVG}></i> */}
                                
                                <svg className="addSlider" id={`${this.props.svgTypeToAdd}-btn`} onClick ={this.handleAddingAnSVG} x="0px" y="0px" width="80%" height="80%" viewBox="0 0 150 150" enable-background="new 0 0 194.697 186.364">
                                    <polygon fill="none" stroke="#B0AFB0" stroke-miterlimit="10" points="66.612,131.033 40.711,86.171 66.612,41.311 118.413,41.311 
144.313,86.171 118.413,131.033 	"/>
                                    <circle fill="#B0AFB0" stroke="#181818" stroke-miterlimit="10" cx="67.017" cy="41.432" r="3.64"/>
                                    <circle fill="#B0AFB0" stroke="#181818" stroke-miterlimit="10" cx="40.71" cy="86.171" r="3.64"/>
                                    <circle fill="#B0AFB0" stroke="#181818" stroke-miterlimit="10" cx="118.21" cy="41.432" r="3.64"/>
                                    <circle fill="#B0AFB0" stroke="#181818" stroke-miterlimit="10" cx="144.313" cy="86.171" r="3.639"/>
                                    <circle fill="#B0AFB0" stroke="#181818" stroke-miterlimit="10" cx="118.21" cy="131.033" r="3.64"/>
                                    <circle fill="#B0AFB0" stroke="#181818" stroke-miterlimit="10" cx="66.21" cy="131.033" r="3.64"/>
                                </svg>
                                <hr></hr>
                                <div>
                                    <h4 className="add-caption">Add {this.props.svgTypeToAdd}</h4>
                                    <div className={`colorcircle-${this.props.svgTypeToAdd}`}></div>
                                </div>                        
                            </div>
                        </div>
                    );
                }
                    break;
                case "Circle" : {
                    menuItemToDisplay = (
                        <div className = "menu-item">
                            <div className="add-container-option">
                                {/* <i className="fa fa-plus-circle addSlider" id={`${this.props.svgTypeToAdd}-btn`} onClick ={this. handleAddingAnSVG}></i> */}
                            
                                <svg className="addSlider" id={`${this.props.svgTypeToAdd}-btn`} onClick ={this.handleAddingAnSVG} x="0px" y="0px" width="80%" height="80%" viewBox="0 0 160 160" enable-background="new 0 0 194.697 186.364">
                                    <circle fill="none" stroke="#B0AFB0" stroke-width="0.9383" stroke-miterlimit="10" cx="98.598" cy="88.675" r="61.176"/>                       
                                </svg>
                                <hr></hr>
                                <div>
                                    <h4 className="add-caption">Add {this.props.svgTypeToAdd}</h4>
                                    <div className={`colorcircle-${this.props.svgTypeToAdd}`}></div>
                                </div>                    
                            </div>
                        </div>
                    );
                }
                    break;
                case "Rectangle" : {
                    menuItemToDisplay = (
                        <div className = "menu-item">
                            <div className="add-container-option">
                                {/* <i className="fa fa-plus-circle addSlider" id={`${this.props.svgTypeToAdd}-btn`} onClick ={this. handleAddingAnSVG}></i> */}
                            
                                <svg className="addSlider" id={`${this.props.svgTypeToAdd}-btn`} onClick ={this.handleAddingAnSVG} x="0px" y="0px" width="80%" height="80%" viewBox="0 0 150 150" enable-background="new 0 0 194.697 186.364">
                                    <rect x="39.036" y="32.581" fill="none" stroke="#B0AFB0" stroke-miterlimit="10" width="104.037" height="104.038"/>
                                    <circle fill="#B0AFB0" stroke="#181818" stroke-miterlimit="10" cx="39.035" cy="32.581" r="3.64"/>
                                    <circle fill="#B0AFB0" stroke="#181818" stroke-miterlimit="10" cx="143.072" cy="32.581" r="3.64"/>
                                    <circle fill="#B0AFB0" stroke="#181818" stroke-miterlimit="10" cx="143.072" cy="136.8" r="3.64"/>
                                    <circle fill="#B0AFB0" stroke="#181818" stroke-miterlimit="10" cx="39.035" cy="136.619" r="3.64"/>                          
                                </svg>
                                <hr></hr>
                                <div>
                                    <h4 className="add-caption">Add {this.props.svgTypeToAdd}</h4>
                                    <div className={`colorcircle-${this.props.svgTypeToAdd}`}></div>
                                </div>
                            </div>
                        </div>
                    );
                }
                    break;
                case "Text" : {
                    menuItemToDisplay = (
                        <div className = "menu-item">
                            <div className="add-container-option">
                                {/* <i className="fa fa-plus-circle addSlider" id={`${this.props.svgTypeToAdd}-btn`} onClick ={this. handleAddingAnSVG}></i> */}
                            
                                <svg className="addSlider" id={`${this.props.svgTypeToAdd}-btn`} onClick ={this.handleAddingAnSVG} x="0px" y="0px" width="80%" height="80%" viewBox="0 0 160 160" enable-background="new 0 0 194.697 186.364">
                                    <path fill="#B0AFB0" d="M77.911,111.642V59.46H59.344v-6.512h44.525v6.512H85.215v52.182H77.911z"/>
                                    <path fill="#B0AFB0" d="M135.11,111.642l-12.848-17.424l-12.76,17.424h-7.568l16.281-21.822l-15.4-20.68h7.656l11.791,16.192l11.879-16.192h7.568l-15.398,20.68l16.367,21.822H135.11z"/>
                                </svg>
                                <hr></hr>
                                <div>
                                    <h4 className="add-caption">Add {this.props.svgTypeToAdd}</h4>
                                    <div className={`colorcircle-${this.props.svgTypeToAdd}`}></div>
                                </div>                    
                            </div>
                        </div>
                    );
                }
                    break;
                case "Ellipse" : {
                    menuItemToDisplay = (
                        <div className = "menu-item">
                            <div className="add-container-option">
                                {/* <i className="fa fa-plus-circle addSlider" id={`${this.props.svgTypeToAdd}-btn`} onClick ={this. handleAddingAnSVG}></i> */}
                            
                                <svg className="addSlider" id={`${this.props.svgTypeToAdd}-btn`} onClick ={this. handleAddingAnSVG} x="0px" y="0px" width="80%" height="80%" viewBox="0 0 150 150" enable-background="new 0 0 194.697 186.364">
                                    <ellipse transform="matrix(0.7071 0.7071 -0.7071 0.7071 91.4149 -42.7809)" fill="none" stroke="#B0AFB0" stroke-miterlimit="10" cx="97.348" cy="88.956" rx="35.949" ry="64.151"/>
                                </svg>
                                <hr></hr>
                                <div>
                                    <h4 className="add-caption">Add {this.props.svgTypeToAdd}</h4>
                                    <div className={`colorcircle-${this.props.svgTypeToAdd}`}></div>
                                </div>                    
                            </div>
                        </div>
                    );
                }
                    break;
                case "Line" : {
                    menuItemToDisplay = (
                        <div className = "menu-item">
                            <div className="add-container-option">
                                {/* <i className="fa fa-plus-circle addSlider" id={`${this.props.svgTypeToAdd}-btn`} onClick ={this. handleAddingAnSVG}></i> */}
                            
                                <svg className="addSlider" id={`${this.props.svgTypeToAdd}-btn`} onClick ={this. handleAddingAnSVG} x="0px" y="0px" width="80%" height="80%" viewBox="0 0 150 150" enable-background="new 0 0 194.697 186.364">
                                    <line fill="#0F0F0F" stroke="#B0AFB0" stroke-miterlimit="10" x1="46.722" y1="54.168" x2="129.722" y2="113.269"/>
                                    <circle fill="#B0AFB0" stroke="#181818" stroke-miterlimit="10" cx="46.721" cy="54.168" r="3.64"/>
                                    <circle fill="#B0AFB0" stroke="#181818" stroke-miterlimit="10" cx="129.721" cy="113.269" r="3.64"/>
                                </svg>
                                <hr></hr>
                                <div>
                                    <h4 className="add-caption">Add {this.props.svgTypeToAdd}</h4>
                                    <div className={`colorcircle-${this.props.svgTypeToAdd}`}></div>
                                </div>
                            </div>
                        </div>
                    );
                }
                    break;

			}
		}
		return(
			<>{menuItemToDisplay}</>
		);    
		// }   
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);