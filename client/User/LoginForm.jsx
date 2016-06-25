import React, {Component} from 'react';

export default class LoginForm extends Component {

	handleLogin(e) {
		e.preventDefault();
		const email = this.refs.email.value.trim();
		const password = this.refs.password.value.trim();

		Meteor.loginWithPassword(email, password, function(err) {
				if(err) { 
					Materialize.toast(err.reason, 4000);
				} else {
					Materialize.toast('Logged in!', 3000);
					FlowRouter.go('/');
				}
		});
	}

	render() {
		return (
			<div className="row">
				<div className="container">
				<div className="card-panel col s8 offset-s2">
						<h4 className="center-align">Login</h4>

					    <form className="card-content col s12" onSubmit={this.handleLogin.bind(this)} >
						    <div className="row">
						      <div className="input-field">
						        <input id="email" ref="email" type="text" className="validate" required />
						        <label for="email">Email or Username</label>
						      </div>
						    </div>

						    <div className="row">
						      <div className="input-field">
						        <input id="password" ref="password" type="password" className="validate" required/>
						        <label for="password">Password</label>
						      </div>
						    </div>

						    <div className="row">
						      <div className="input-field">
						        <button id="submit" className="btn waves-effect waves-light col s4 offset-s4" type="submit" name="action">
						        	Submit
						        </button>
						      </div>
						    </div>

					    </form>
				</div>
				</div>
			</div>
		)
	}
}