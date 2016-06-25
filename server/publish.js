Trips = new Mongo.Collection("trips");
Responses = new Mongo.Collection("responses");

Meteor.publish("allTrips", function() {
	return Trips.find({});
});

Meteor.publish("singleTrip", function(id) {
	return Trips.find(id);
});

Meteor.publish("tripResponses", function(tripId) {
	return Responses.find({tripId: tripId});
});
