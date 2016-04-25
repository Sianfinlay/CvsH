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
	    	level: 1,
			score: 0,
			maxScore: 2,
			completed: false,
			owner: user._id
		});
		// level 2 insert
	    Levels.insert({
	    	level: 2,
			score: 0,
			maxScore: 4,
			completed: false,
			owner: user._id
		});
		// level 3 insert
	    Levels.insert({
	    	level: 3,
			score: 0,
			maxScore: 6,
			completed: false,
			owner: user._id
		});
		// level 4 insert
	    Levels.insert({
	    	level: 4,
			score: 0,
			maxScore: 6,
			completed: false,
			owner: user._id
		});
		// level 5 insert
	    Levels.insert({
	    	level: 5,
			score: 0,
			maxScore: 2,
			completed: false,
			owner: user._id
		});

		Leaderboard.insert({
			owner: user._id,
			stars: 0
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
	
	
}