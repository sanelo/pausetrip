Meteor.methods({
	addTrip(full, city, airport, length, budget, details) {
		if(!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}
		return Trips.insert({
					full: full,
					city: city,
					airport: airport,
					length: length,
					budget: budget,
					details: details,
					votes: 0,
					responses: 0,
					createdAt: new Date(),
					author: Meteor.user().username
				});
	},
	addResponse(trip, length, budget, response) {
		if(!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}

		return {
				response: Responses.insert({
							tripId: trip._id,
							tripDetails: trip,
							length: length,
							budget: budget,
							response: response,
							votes: 0,
							score: 0,
							createdAt: new Date(),
							author: Meteor.user().username
						}),

				increment: Trips.update(trip._id, {$inc: {responses: 1}}) 
				}
	},
	delResponse(response) {
		if(!Meteor.userId() || Meteor.user().username !== response.author) {
			throw new Meteor.Error('not-authorized');
		}
		return {
				remove: Responses.remove(response._id),
				decrement: Trips.update(response.tripId, {$inc: {responses: -1}})
				}
	}
});