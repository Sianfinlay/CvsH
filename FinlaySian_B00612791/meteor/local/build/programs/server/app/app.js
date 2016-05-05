var require = meteorInstall({"server":{"accounts.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/accounts.js                                                //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
// facebook login                                                    //
ServiceConfiguration.configurations.remove({ service: "facebook" });
ServiceConfiguration.configurations.remove({ service: "twitter" });  // 3
                                                                     //
// facebook                                                          //
ServiceConfiguration.configurations.insert({                         // 6
  service: "facebook",                                               // 7
  appId: "1708230562789289",                                         // 8
  secret: "1983cb0435f0d43977ed8092a89b698d"                         // 9
});                                                                  //
                                                                     //
ServiceConfiguration.configurations.insert({                         // 13
  service: "twitter",                                                // 14
  consumerKey: "YHsL2VwXpWxmivnItO7nVoUqR",                          // 15
  secret: "HH0jVAugFoaQPnjf0pnSDAg7zMtYNOJmg781AYXAIEWHggvbGO"       // 16
});                                                                  //
///////////////////////////////////////////////////////////////////////

},"avatar.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/avatar.js                                                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Avatar = new Mongo.Collection("avatar");                             // 1
Meteor.methods({                                                     // 2
	addAvatar: function () {                                            // 3
		function addAvatar(userId) {                                       // 3
			Avatar.insert({                                                   // 4
				skin: 'skin_1',                                                  // 5
				hair: 'hair_1_brown',                                            // 6
				outfit: 'dress_1',                                               // 7
				owner: user._id                                                  // 8
			});                                                               //
		}                                                                  //
                                                                     //
		return addAvatar;                                                  //
	}(),                                                                //
	updateAvatar: function () {                                         // 11
		function updateAvatar(newSkin, newHair, newOutfit) {               // 11
			var avatar = Avatar.findOne({                                     // 12
				owner: this.userId                                               // 13
			});                                                               //
                                                                     //
			Avatar.update({                                                   // 16
				owner: this.userId                                               // 17
			}, {                                                              //
				$set: {                                                          // 19
					skin: newSkin,                                                  // 20
					hair: newHair,                                                  // 21
					outfit: newOutfit                                               // 22
				}                                                                //
			});                                                               //
		}                                                                  //
                                                                     //
		return updateAvatar;                                               //
	}()                                                                 //
});                                                                  //
///////////////////////////////////////////////////////////////////////

},"levels.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/levels.js                                                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Levels = new Mongo.Collection("levels");                             // 1
Leaderboard = new Mongo.Collection("leaderboard");                   // 2
Meteor.methods({                                                     // 3
	addLevel: function () {                                             // 4
		function addLevel(levelNo, maxScore) {                             // 4
			// example of level insert                                        //
			Levels.insert({                                                   // 6
				level: levelNo,                                                  // 7
				score: 0,                                                        // 8
				maxScore: maxScore,                                              // 9
				completed: false,                                                // 10
				owner: user._id                                                  // 11
			});                                                               //
		}                                                                  //
                                                                     //
		return addLevel;                                                   //
	}(),                                                                //
	updateLevel: function () {                                          // 14
		function updateLevel(levelNo, score) {                             // 14
			var levels = Levels.findOne({                                     // 15
				owner: this.userId                                               // 16
			});                                                               //
                                                                     //
			Levels.update({                                                   // 19
				level: levelNo,                                                  // 20
				owner: this.userId                                               // 21
			}, {                                                              //
				$set: {                                                          // 23
					score: score,                                                   // 24
					completed: true                                                 // 25
				}                                                                //
			});                                                               //
		}                                                                  //
                                                                     //
		return updateLevel;                                                //
	}(),                                                                //
	updateStars: function () {                                          // 29
		function updateStars(newStars) {                                   // 29
			var leaderboard = Leaderboard.findOne({                           // 30
				owner: this.userId                                               // 31
			});                                                               //
                                                                     //
			Leaderboard.update({                                              // 34
				owner: this.userId                                               // 35
			}, {                                                              //
				$set: {                                                          // 37
					stars: newStars                                                 // 38
				}                                                                //
			});                                                               //
		}                                                                  //
                                                                     //
		return updateStars;                                                //
	}()                                                                 //
});                                                                  //
///////////////////////////////////////////////////////////////////////

},"newUser.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/newUser.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
// on new user                                                       //
if (Meteor.isServer) {                                               // 2
	Accounts.onCreateUser(function (options, user) {                    // 3
		Avatar.insert({                                                    // 4
			skin: 'skin_1',                                                   // 5
			hair: 'hair_1_brown',                                             // 6
			outfit: 'dress_1',                                                // 7
			owner: user._id                                                   // 8
		});                                                                //
                                                                     //
		// level 1 insert                                                  //
		Levels.insert({                                                    // 3
			level: 1,                                                         // 14
			score: 0,                                                         // 15
			maxScore: 2,                                                      // 16
			completed: false,                                                 // 17
			owner: user._id                                                   // 18
		});                                                                //
		// level 2 insert                                                  //
		Levels.insert({                                                    // 3
			level: 2,                                                         // 22
			score: 0,                                                         // 23
			maxScore: 4,                                                      // 24
			completed: false,                                                 // 25
			owner: user._id                                                   // 26
		});                                                                //
		// level 3 insert                                                  //
		Levels.insert({                                                    // 3
			level: 3,                                                         // 30
			score: 0,                                                         // 31
			maxScore: 6,                                                      // 32
			completed: false,                                                 // 33
			owner: user._id                                                   // 34
		});                                                                //
		// level 4 insert                                                  //
		Levels.insert({                                                    // 3
			level: 4,                                                         // 38
			score: 0,                                                         // 39
			maxScore: 6,                                                      // 40
			completed: false,                                                 // 41
			owner: user._id                                                   // 42
		});                                                                //
		// level 5 insert                                                  //
		Levels.insert({                                                    // 3
			level: 5,                                                         // 46
			score: 0,                                                         // 47
			maxScore: 2,                                                      // 48
			completed: false,                                                 // 49
			owner: user._id                                                   // 50
		});                                                                //
                                                                     //
		Leaderboard.insert({                                               // 53
			owner: user._id,                                                  // 54
			stars: 0                                                          // 55
		});                                                                //
                                                                     //
		if (options.profile) user.profile = options.profile;               // 58
		console.log(user);                                                 // 60
		return user;                                                       // 61
                                                                     //
		if (options.profile) user.profile = options.profile;               // 63
		console.log(user);                                                 // 65
		return user;                                                       // 66
	});                                                                 //
}                                                                    //
///////////////////////////////////////////////////////////////////////

},"publish.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/publish.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
// publish collections                                               //
                                                                     //
Meteor.publish("avatar_levels", function () {                        // 3
	return [Avatar.find(), Levels.find(), Leaderboard.find()];          // 4
});                                                                  //
///////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./server/accounts.js");
require("./server/avatar.js");
require("./server/levels.js");
require("./server/newUser.js");
require("./server/publish.js");
//# sourceMappingURL=app.js.map
