// publish collections
// this code only runs on the server
	
	
	Meteor.publish("avatar_levels", function () {
		return [
		    Avatar.find(),
		    Levels.find(),
		    Leaderboard.find()
		  ];
	});
