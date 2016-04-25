Levels = new Mongo.Collection("levels");
	Meteor.methods({
		addLevel: function (levelNo, maxScore) {
			//Make sure the user is sign up before creating an avatar
			

			// example of level insert
			Levels.insert({
				level: levelNo,
				score: 0,
				maxScore: maxScore,
				completed: false,
				owner: user._id
			});
		},
		updateLevel: function (levelNo, score) {
			var levels = Levels.findOne({
				owner: this.userId
			});
			
			Levels.update({
				level: levelNo,
				owner: this.userId
			}, { 
				$set: {
					score: score,
					completed: true
				}
			});
		}
	});