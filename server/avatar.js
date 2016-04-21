Avatar = new Mongo.Collection("avatar");
	Meteor.methods({
		addAvatar: function (userId) {
			//Make sure the user is sign up before creating an avatar
			

			//var username = Meteor.user().username || Meteor.user().profile.name
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
			
			var username = Meteor.user().username || Meteor.user().profile.name
			Avatar.update({
				owner: this.userId
			}, { 
				$set: {
					skin: newSkin,
					hair: newHair,
					outfit: newOutfit
				}
			});
		},
		deleteAvatar: function (avatarId) {
			var avatar = Avatar.findOne(avatarId);
			if (avatar.owner !== Meteor.userId()) {
				throw new Meteor.Error("not-authorized");
			}

			//Avatar.remove(avatarId) {

			//}
		}
	});



