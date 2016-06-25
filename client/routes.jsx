import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import MainWrapper from './MainWrapper.jsx';
import RegisterForm from './User/RegisterForm.jsx';
import LoginForm from './User/LoginForm.jsx';
import TripForm from './Trips/TripForm.jsx';
import TripDetail from './Trips/TripDetail.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<MainWrapper />)
		})
	}
});

FlowRouter.route('/register', {
	action() {
		mount(MainLayout, {
			content: (<RegisterForm />)
		})
	}
});

FlowRouter.route('/login', {
	action() {
		mount(MainLayout, {
			content: (<LoginForm />)
		})
	}
});

FlowRouter.route('/trip-form', {
	action() {
		mount(MainLayout, {
			content: (<TripForm />)
		})
	}
});

FlowRouter.route('/trip/:id', {
	action(params) {
		mount(MainLayout, {
			content: (<TripDetail id={params.id} />)
		})
	}
});
