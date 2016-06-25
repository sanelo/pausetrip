import React from 'react';
import ReactDOM from "react-dom";
import TrackerReact from 'meteor/ultimatejs:tracker-react';






export default class Hero extends TrackerReact(React.Component) {

	render() {
		return ( 
			<div className="row">
		        <div className="col offset-s2 s8">
		          <div className="hero">
		            <h1> Pausetrip</h1>
		            <h5> the best place for long layovers </h5>
		            <div className="row">
		            	<a href="/trip-form" className="waves-effect waves-light btn-large"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Request new trip</a> 
		            </div>
		          </div>
		        </div>
		    </div>
		)
	}
}
