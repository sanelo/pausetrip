import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LoginForm from '../User/LoginForm.jsx';

export default class ResponseForm extends TrackerReact(React.Component) {

	constructor() {
		super()
	}

	handlePost(e) {
			e.preventDefault();
			const trip = this.props.trip;
			const length = this.refs.length.value;
			const budget = this.refs.budget.value;
			const response = this.refs.response.value;

			Meteor.call('addResponse', trip, length, budget, response, (error, result)=> {
				if (error) {
					let errMsg;
					if(error.error == "not-authorized") {
						errMsg = "Please login first.";
					} else {
						errMsg = error.error
					}
					Materialize.toast(errMsg, 3000);
				} else {
					Materialize.toast("Response added!", 4000);
					this.refs.response.value = "";
					this.refs.length.value = "A";
					this.refs.budget.value = "A";
					console.log(result);
				}


			});

	}

	componentDidMount() {
		$(document).ready(function() {
		    $('select').material_select();
		  });
	}

	render() {

		const tripDetails = "You should grab a taxi and go to the city. It costs about $10 each way. Check out the amazing food and sightseeing for a few hours. Head back 2 hours before your flight!";
		
		let form;

		if (Meteor.userId()) {
		form =  
			(
				    <form className="col s12 m8 offset-m2" onSubmit={this.handlePost.bind(this)} >
					    <div className="row">
					    	<div className="col s10 offset-s1">
					    	<p> Write your response/suggestion here. Be sure to include transportation times and costs, activities, time needed to reach airport, and any other relevant information. Please be kind! <br /></p>
					    	</div>
					    </div>
					    <div className="row">
					        <div className="input-field col s8 offset-s2">
					            <textarea ref="response" id="textarea1" className="materialize-textarea" placeholder={tripDetails} required></textarea>
					            <label for="textarea1">Response</label>
					      	</div>
					    </div>
					    <div className="row">
					      <div className="input-field col s4 offset-s2">
					          <select ref="length" required>
					            <option value="A" disabled>How long is this trip?</option>
					            <option value="2">Less than 2 hours.</option>
					            <option value="3">3 hours</option>
					            <option value="4">4 hours</option>
					            <option value="5">5 hours</option>
					            <option value="6">6 hours</option>
					            <option value="7">7 hours</option>
					            <option value="8">8 hours</option>
					            <option value="9">9 hours</option>
					            <option value="10">10 hours</option>
					            <option value="11+">11 hours</option>
					          </select>
					          <label>Expected Duration</label>
					      </div>
					      <div className="input-field col s4">
					          <select ref="budget" required>
					            <option value="A" disabled>What is this trip's budget?</option>
					            <option value="20">Less than $20 dollars</option>
					            <option value="50">Up to $50</option>
					            <option value="100">Up to $100</option>
					          </select>
					          <label>Estimated Budget</label>
					      </div>
					    </div>
					    <div className="row">
					      <div className="input-field">
					        <button className="btn waves-effect waves-light col s4 offset-s4" type="submit" name="action">
					        	Submit
					        </button>
					      </div>
					    </div>
				    </form>
			)
		} else {
			form = (
				<div>
					<p> Please login to respond. </p>
				</div>
			)
		}

		return (
			<div> 
				<h5 className="center-align response-title white-text">Write a response</h5>
					<div className="card-panel col s12">
						{form}
					</div>
				</div>
		)
		}
}