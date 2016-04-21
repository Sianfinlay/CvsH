Levels = new Mongo.Collection("levels");
	Meteor.methods({
		addLevel: function (maxScore, userId) {
			//Make sure the user is sign up before creating an avatar
			

			// example of level insert
			Levels.insert({
				score: 0,
				maxScore: maxScore,
				completed: false,
				owner: user._id
			});
		},
		updateLevel: function (score) {
			var levels = Levels.findOne({
				owner: this.userId
			});
			
			Levels.update({
				owner: this.userId
			}, { 
				$set: {
					score: score,
					completed: true
				}
			});
		},
		deleteLevel: function (avatarId) {
			var levels = Levels.findOne(avatarId);
			if (levels.owner !== Meteor.userId()) {
				throw new Meteor.Error("not-authorized");
			}

			//Levels.remove(avatarId) {

			//}
		}
	});