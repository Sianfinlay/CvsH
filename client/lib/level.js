// levels
Template.levelSelect.helpers({
    levels: function () {
      return Levels.find();
    }
  });
Template.account.helpers({
	// total user's score
    starCount: function () {
    	var stars = 0;
      	Levels.find({level:1}).map(function(doc) {
		  stars += doc.score;
		});
		Levels.find({level:2}).map(function(doc) {
		  stars += doc.score;
		});
		Levels.find({level:3}).map(function(doc) {
		  stars += doc.score;
		});
		Levels.find({level:4}).map(function(doc) {
		  stars += doc.score;
		});
		Levels.find({level:5}).map(function(doc) {
		  stars += doc.score;
		});

		return stars;
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