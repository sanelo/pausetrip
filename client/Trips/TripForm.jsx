import React, {Component} from 'react';
import SearchSuggest from '../SearchSuggest.jsx';

export default class TripForm extends Component {

	handlePost(e) {
			e.preventDefault();
			let full = $(' .react-autosuggest__input ').val().trim();
			const city = full.split('-')[0].trim();
			const airport = full.split('-')[1].trim();
			const length = this.refs.length.value;
			const budget = this.refs.budget.value;
			const details = this.refs.details.value;

			console.log(full);


			Meteor.call('addTrip', full, city, airport, length, budget, details, (error, result)=> {
				if (error) {
					let errMsg;
					if(error.error == "not-authorized") {
						errMsg = "Please login first.";
					} else {
						errMsg = error.error
					}
					Materialize.toast(errMsg, 3500);
				} else {
					Materialize.toast("Successfully posted!", 4000);
					FlowRouter.go('/trip/' + result);
				}


			});

	}

	componentDidMount() {
		$(document).ready(function() {
		    $('select').material_select();
		  });
	}

	render() {
		if(!Meteor.userId()) {
			Materialize.toast("Please login to post.", 4000);
		}

		return (
				<div className="col s6 card-panel request-card">
						<h4 className="center-align">Request a new trip</h4>
					    <form className="col s12" onSubmit={this.handlePost.bind(this)} >
						    <div className="row">
						      <SearchSuggest updateCheck={false} />
						    </div>
						    <div className="row">
						      <div className="input-field col s4 offset-s2">
						          <select ref="length" defaultValue="A" required>
						            <option value="A" disabled>How long is your layover?</option>
						            <option value="2">Less than 2 hours.</option>
						            <option value="3">3 hours</option>
						            <option value="4">4 hours</option>
						            <option value="5">5 hours</option>
						            <option value="6">6 hours</option>
						            <option value="7">7 hours</option>
						            <option value="8">8 hours</option>
						            <option value="9">9 hours</option>
						            <option value="10">10 hours</option>
						            <option value="11+">11+ hours</option>
						          </select>
						          <label>Duration</label>
						      </div>
						      <div className="input-field col s4">
						          <select ref="budget" defaultValue="A" required>
						            <option value="A" disabled>What is your budget?</option>
						            <option value="20">Less than $20 dollars</option>
						            <option value="50">Up to $50</option>
						            <option value="100">$100</option>
						            <option value="200">$200</option>
						            <option value="300">$300</option>
						            <option value="400+">$400 or more</option>
						          </select>
						          <label>Budget</label>
						      </div>
						    </div>
						    <div className="row">
						        <div className="input-field col s8 offset-s2">
						            <textarea ref="details" id="textarea1" className="materialize-textarea" placeholder="I want to see downtown and try some local food, any recommendations?" required></textarea>
						            <label for="textarea1">Details</label>
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
				</div>
		)
		}
}