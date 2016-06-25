import React, {Component} from 'react';

export default class RegisterForm extends Component {

	handleRegister(e) {
		e.preventDefault();
		const code = this.refs.code.value.trim();
		const username = this.refs.username.value.trim();
		const email = this.refs.email.value.trim();
		const password = this.refs.password.value.trim();
		const password2 = this.refs.password2.value.trim();

		if (code !== "223") {
			$("#code").addClass("invalid");
			return Materialize.toast('Invite code is invalid', 4000);
		}

		if (password !== password2) {
			return  Materialize.toast('Passwords do not match.', 4000);
		} else {

			const accountInfo = {
				username: username,
				email: email,
				password: password
			}

			Accounts.createUser(accountInfo, function(err) {
				if(err) { 
					Materialize.toast(err.reason, 4000);
				} else {
					FlowRouter.go('/');
				}
			});
		};

	}

	render() {
		return (
				<div className="row">
						<div className="container">
						<div className="card-panel col s8 offset-s2">
						
						<h4 className="center-align">Register</h4>

					    <form className="card-content col s12" onSubmit={this.handleRegister.bind(this)} >
					    	<div className="row">
					    	  <div className="input-field">
					    	    <input id="code" ref="code" type="text" className="validate" required />
					    	    <label for="code"> Invite Code </label>
					    	  </div>
					    	</div>

					    	<div className="row">
					    	  <div className="input-field">
					    	    <input id="username" ref="username" type="text" className="validate" required />
					    	    <label for="username"> Username </label>
					    	  </div>
					    	</div>

						    <div className="row">
						      <div className="input-field">
						        <input id="email" ref="email" type="email" className="validate" required />
						        <label for="email" data-error="Incorrect email." data-success="Ok!">Email</label>
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
						        <input id="password2" ref="password2" type="password" className="validate" required/>
						        <label for="password">Confirm Password</label>
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