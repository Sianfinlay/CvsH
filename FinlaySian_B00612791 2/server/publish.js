// publish collections
	
	Meteor.publish("avatar_levels", function () {
		return [
		    Avatar.find(),
		    Levels.find(),
		    Leaderboard.find()
		  ];
	});
