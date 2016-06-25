import React, {Component} from 'react';
import LoginForm from './User/LoginForm.jsx';

export default class Modal extends Component {

	componentDidMount() {
		$(document).ready(function(){
		   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
		   $('.modal-trigger').leanModal();
		   console.log('modal loaded');
		 });
	}

	handleLogin(e) {
		e.preventDefault();
		const email = this.refs.email.value.trim();
		const password = this.refs.password.value.trim();

		Meteor.loginWithPassword(email, password, function(err) {
				if(err) { 
					Materialize.toast(err.reason, 4000);
				} else {
					Materialize.toast('Logged in!', 3000);
					$('#loginmodal').closeModal();
				}
		});
	}

	render() {
		return (
				<div id="loginmodal" className="modal">
				    <div className="modal-content">
				      <LoginForm />
				    </div>
				    <div className="modal-footer">
				      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
				    </div>
				</div>
		)
	}
}