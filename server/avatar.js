Avatar = new Mongo.Collection("avatar");
	Meteor.methods({
		addAvatar: function (userId) {
			Avatar.insert({
				skin: 'skin_1',
				hair: 'hair_1_brown',
				outfit: 'dress_1',
				owner: user._id
			});
		},
		updateAvatar: function (newSkin, newHair, newOutfit) {
			var avatar = Avatar.findOne({
				owner: this.userId
			});
			
			Avatar.update({
				owner: this.userId
			}, { 
				$set: {
					skin: newSkin,
					hair: newHair,
					outfit: newOutfit
				}
			});
		}
	});



