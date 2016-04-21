// on new user
if (Meteor.isServer) {
	Accounts.onCreateUser(function(options, user) {
	  	Avatar.insert({
			skin: 'skin_1',
			hair: 'hair_1_brown',
			outfit: 'dress_1',
			owner: user._id
		});


		// level 1 insert
	    Levels.insert({
			score: 0,
			maxScore: 2,
			completed: false,
			owner: user._id
		});
		// level 2 insert
	    Levels.insert({
			score: 0,
			maxScore: 0,
			completed: false,
			owner: user._id
		});
		// level 3 insert
	    Levels.insert({
			score: 0,
			maxScore: 0,
			completed: false,
			owner: user._id
		});
		// level 4 insert
	    Levels.insert({
			score: 0,
			maxScore: 0,
			completed: false,
			owner: user._id
		});
		// level 5 insert
	    Levels.insert({
			score: 0,
			maxScore: 0,
			completed: false,
			owner: user._id
		});

	  	if (options.profile)
		    user.profile = options.profile;
			console.log(user)
	 	return user;

	    if (options.profile)
	    	user.profile = options.profile;
			console.log(user)
	  	return user;

	});		
	// this code only runs on the server
	// only publish avatar and levels that belongs to current user
	Meteor.publish("avatar", function () {
		return Avatar.find({
			owner: this.userId
		});
	});
	Meteor.publish("levels", function () {
		return Levels.find({
			owner: this.userId
		});
	});
}