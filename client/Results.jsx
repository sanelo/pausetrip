import React from 'react';
import ReactDOM from "react-dom";
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Results extends TrackerReact(React.Component) {

	constructor(props) {
		super(props);
	}

	trips() {
		return this.props.trips;
	}


	render() {
		if (this.trips().length == 0) {
			return (
				<div className="row">
				    <div className="card-panel">
		              	<div className="card-content">
				    		<h5 className="center-align">Sorry! No Results. <i className="fa fa-frown-o" aria-hidden="true"></i></h5>
				    		<p className="center-align"> 
				    			Please make sure you select a city from the dropdown list. 
				    			<br /> Why not request your own trip? <i className="fa fa-smile-o" aria-hidden="true"></i>
				    		</p>
				    		<div className="center-align">
				    			<a href="/trip-form" className="waves-effect waves-light btn-large">Request new trip</a> 
				    		</div>
				    	</div>
				 	</div>
				</div>
			)
		}

		return ( 
		              	<div className="row">
			              {this.trips().map((trip)=> {
			              	return (
			              		<div className="col s12 m6 l4" key={trip._id}>
			              		<div className="card">

			              		    <div className="card-content">
			              		      <span className="card-title small-lh activator grey-text text-darken-4">{trip.city}</span> <br />
			              		      <span className="grey-text text-darken-4">{trip.airport}</span>
			              		      <p>
			              		      	<span className="card-badge">{trip.length} hours</span>
			              		      	<span className="card-badge">${trip.budget}</span> 
			              		      	<br />
			              		      	{trip.responses} response(s)
			              		      </p>
			              		    </div>

			              		    <div className="card-action">
			              		        <a className="btn-flat yellow darken-4 white-text" href={"/trip/" + trip._id}>Open</a>

			              		        <i className="fa fa-arrow-up right card-title activator" aria-hidden="true"></i>
									</div>

			              		    <div className="card-reveal">
			              		      <span className="card-title grey-text text-darken-4">
				              		      {trip.city} 
				              		      <i className="fa fa-times right" aria-hidden="true"></i>
			              		      </span>
			              		      <p>{trip.details}</p>
			              		      <a className="center-align" href={"/trip/" + trip._id}>View</a>
			              		    </div>

			              		    

			              		</div>   
			              		</div>  
			              	)
			              })}
			            </div>
		)
	}
}
