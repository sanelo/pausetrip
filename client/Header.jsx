import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';
import ReactDOM from "react-dom";


export default class Header extends Component {

	constructor() {
		super();
		this.state = {
			isLoggedIn: !!Meteor.userId()
		};
	}

	handleLogOut() {
		Meteor.logout((err)=> {
			if(err) { 
				Materialize.toast(err.reason, 4000);
			} else {
				this.setState({isLoggedIn: !this.state.isLoggedIn});
				Materialize.toast("Logged out!", 3000);
				FlowRouter.go('/');
			}
		});
	}

	componentDidMount() {
		
	}


	render() {

		var navOptions; 
		if(Meteor.userId()) {
			navOptions = 
			(
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a href="/">Home</a></li>
					<li><a href={"/user/" + Meteor.userId()}>Profile</a></li>
					<li><a onClick={this.handleLogOut.bind(this)}>Log Out</a></li>
				</ul>
			)
		} else {
			navOptions =  
			(
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a href="/">Home</a></li>
					<li><a href="/login">Login</a></li>
					<li><a href="/register">Register</a></li>
					<li></li>

				</ul>
			)
		};

		return (
			<div> 
				<nav>
				    <div className="nav-wrapper">
				      <a href="/" className="brand-logo">Pausetrip</a>
				      {navOptions}
				    </div>
				</nav>
			</div>
		)
	}
}
