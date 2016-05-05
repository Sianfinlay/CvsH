// client side js 
// Mongo collections
Avatar = new Mongo.Collection("avatar");
Levels = new Mongo.Collection("levels");
Leaderboard = new Mongo.Collection("leaderboard",  {
   //create join to avatar collection
    transform: function(doc) {
      doc.avatarObj = Avatar.find({
        owner: doc.owner
      });
      return doc;
    }
  });

  // initialize dropdown menu
  Template.dropdown_nav.onRendered( function(){
    $('.dropdown-button').dropdown({
      belowOrigin: true
    });
  });
  // get user's avatar for handlebars
  Template.user_avatar.helpers({
    avatar: function () {
      return Avatar.find({
        owner: Meteor.userId()
      });
    }
  });

// get collections for client side
if (Meteor.isClient){
  Meteor.subscribe("avatar_levels");
}