import React,  {Component} from 'react';
import ReactDOM from "react-dom";
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResponseForm from './ResponseForm.jsx';
import ResponseList from './ResponseList.jsx';

export default class TripDetail extends TrackerReact(React.Component) {


	constructor(props) {
		super(props);
		this.state = {
			subscription: {
				trip: Meteor.subscribe('singleTrip', this.props.id)
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.trip.stop();
	}


	tripData() {
		return Trips.findOne(this.props.id);
	}

	componentDidMount() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	render() {
		let trip = this.tripData();

		if(!trip) {return <h1> Loading... </h1>};

		return ( 

				<div className="center-align">
					
				    <div className="row">
				            <div className="col s12">
				              <div className="card">
				                <div className="card-content black-text col s10 offset-s1">
				                  <span className="card-title black-text">Layover in {trip.city} for {trip.length} hours</span>
				                  <p>{trip.details}</p>
				                </div>
				                <div className="card-action ">
				                  <span className="btn-flat grey darken-2 white-text"><i className="fa fa-plane" aria-hidden="true"></i> {trip.airport}</span>
				                  <span className="btn-flat light-green darken-1 white-text">{trip.city}</span>
				                  <span className="btn-flat yellow darken-3 white-text">{trip.length} hours</span>
				                  <span className="btn-flat blue darken-1 white-text">${trip.budget}</span>
				                </div>
				              </div>
				            </div>
				    </div>


				   <ResponseList tripId={this.props.id} />

				   <ResponseForm trip={trip} />


				</div>
		)
	}
}
