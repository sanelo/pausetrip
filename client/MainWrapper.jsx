import { Meteor } from 'meteor/meteor'
import React from 'react';
import ReactDOM from "react-dom";
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Hero from './Hero.jsx';
import SearchCard from './SearchCard.jsx';
import SearchSuggest from './SearchSuggest.jsx';
import Results from './Results.jsx';



Trips = new Mongo.Collection("trips");
Responses = new Mongo.Collection("responses");


export default class MainWrapper extends TrackerReact(React.Component) {


	constructor(props) {
		super(props);
		this.state = {
			subscription: {
				trips: Meteor.subscribe('allTrips')
			},
			full: "",
			user: Meteor.userId()
		}

		this.handleSearch = this.handleSearch.bind(this);
	}

	componentWillUnmount() {
		this.state.subscription.trips.stop();
	}


	trips() {
		if (this.state.full == "") {
			return Trips.find({}, { sort: {createdAt: -1} }).fetch();
		} else {
			return Trips.find({full: this.state.full}, { sort: {createdAt: -1} }).fetch();
		}
	}

	componentDidMount() {
		
	}

	handleSearch(full) {
		this.setState({full: full});
	}


	render() {
		return ( 
			<div>
				<Hero />
				<SearchSuggest updateCheck={true} handleSearch={this.handleSearch} />
				<Results trips={this.trips()} />
		    </div>
		)
	}
}
