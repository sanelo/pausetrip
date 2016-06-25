import React,  {Component} from 'react';
import ReactDOM from "react-dom";
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class ResponseList extends TrackerReact(React.Component) {

	constructor(props) {
		super(props);
		this.state = {
			subscription: {
				trip: Meteor.subscribe('tripResponses', this.props.tripId)
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.trip.stop();
	}


	responsesData() {
		Meteor.subscribe('tripResponses', this.props.tripId);
		return Responses.find({tripId: this.props.tripId}, { sort: { createdAt: -1} }).fetch();
	}

	delResponse(response) {
		const accept = confirm('Are you sure?');

		if (accept) {
			Meteor.call('delResponse', response, (error, result) => {
				if (error) {
					Materialize.toast(error.error, 4000);
				} else {
					Materialize.toast("Response deleted!", 4000);
				} 
			});
		}
	}

	componentWillMount() {
	}

	render() {
		let responses = this.responsesData();
		if(!responses) {return <h1> Loading... </h1>};
		if(responses.length == 0) {
				return (
				<div className="card-panel">
					<h6 className="center-align"> There are no responses for this trip. :( </h6>
				</div>
				)
			}

		return ( 
				<div>

					<h5 className="center-align response-title white-text">Responses</h5>
				   	{this.responsesData().map((response)=> {
				    	return (
				    		<div className="row" key={response._id}>
				    		  <div className="col s12 m8 offset-m2">
				    		    <div className="card">
				    		      <div className="card-content grey-text text-darken-1">
				    		        <span className="card-title">{response.author} says:</span>
				    		        <p>{response.response}</p>
				    		      </div>
				    		      <div className="card-action">
				    		        <a href="">{response.length} hours</a>
				    		        <a href="">${response.budget}</a>
				    		        {!Meteor.userId() || response.author !== Meteor.user().username ? "" : <span onClick={this.delResponse.bind(this, response)} className="badge">Delete</span> } 
				    		      </div>
				    		    </div>
				    		  </div>
				    		</div>
				    	)
				   	})}
				</div>
		)
	}
}
