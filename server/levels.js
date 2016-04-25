Levels = new Mongo.Collection("levels");
Leaderboard = new Mongo.Collection("leaderboard");
	Meteor.methods({
		addLevel: function (levelNo, maxScore) {
			

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
		},
		updateStars: function (newStars) {
			var leaderboard = Leaderboard.findOne({
				owner: this.userId
			});

			Leaderboard.update({
				owner: this.userId
			}, {
				$set: {
					stars: newStars
				}
			});
		}
	});