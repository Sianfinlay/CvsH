// levels
Template.levelSelect.helpers({
    levels: function () {
		var stars = 0;
	    Levels.find({owner: Meteor.userId()}).map(function(doc) {
	      stars += doc.score;
	    });
	    Meteor.call("updateStars", stars);
      	return Levels.find({owner: Meteor.userId()});
    }
  });
Template.account.helpers({
	// total user's score
    starCount: function () {
      	return Leaderboard.find({owner: Meteor.userId()});
    }
  });
Template.level1Modal.events({ 
  "click .sumbitScore": function (event) {
	    event.preventDefault();

	    var newScore = $('input[name=newScore]').val();
	    newScore = parseInt(newScore);
	    // Insert avatar changes
	    Meteor.call("updateLevel", 1, newScore);
	    Router.go('/levels');
	    
	}
});
Template.level2Modal.events({ 
  "click .sumbitScore": function (event) {
	    event.preventDefault();

	    var newScore = $('input[name=newScore]').val();
	    newScore = parseInt(newScore);
	    // Insert avatar changes
	    Meteor.call("updateLevel", 2, newScore);
	    Router.go('/levels');

	}
});
Template.level3Modal.events({ 
  "click .sumbitScore": function (event) {
	    event.preventDefault();

	    var newScore = $('input[name=newScore]').val();
	    newScore = parseInt(newScore);
	    // Insert avatar changes
	    Meteor.call("updateLevel", 3, newScore);
	    Router.go('/levels');

	}
});
Template.level4Modal.events({ 
  "click .sumbitScore": function (event) {
	    event.preventDefault();

	    var newScore = $('input[name=newScore]').val();
	    newScore = parseInt(newScore);
	    // Insert avatar changes
	    Meteor.call("updateLevel", 4, newScore);
	    Router.go('/levels');
	}
});
Template.level5Modal.events({ 
  "click .sumbitScore": function (event) {
	    event.preventDefault();

	    var newScore = $('input[name=newScore]').val();
	    newScore = parseInt(newScore);
	    // Insert avatar changes
	    Meteor.call("updateLevel", 5, newScore);
	    Router.go('/levels');
	}
});