import React from 'react';
import ReactDOM from "react-dom";
import TrackerReact from 'meteor/ultimatejs:tracker-react';


// Resolutions = new Mongo.Collection("resolutions");


export default class SearchCard extends TrackerReact(React.Component) {

	constructor(props) {
		super(props);
	}

	// componentWillUnmount() {
	// 	this.state.subscription.resolutions.stop();
	// }


	// resolutions() {
	// 	return Resolutions.find().fetch();
	// }

	handleSubmit() {
		var city = this.refs.city.value;
		this.props.handleSearch(city);
	}

	render() {
		return ( 
			<div className="row">
		        <div className="col offset-s2 s8">
		          <div className="card white darken-1">
		            <div className="card-content">
		              <h2 className="card-title center-align flow-text">Where is your layover?</h2>
		              <input 
		              		placeholder="City" 
		              		id="search_box" 
		              		ref="city"
		              		type="text" 
		              		class="validateflow-text" 
		              		onChange={this.handleSubmit.bind(this)} 
		              		/>
		            </div>
		          </div>
		        </div>
		    </div>
		)
	}
}
