// levels
/*===================
	level modal intialiations 
==================*/
Template.level1Modal.onRendered( function(){
	$('#level1Hint').openModal();
	$('.modal-trigger').leanModal();
});
Template.level2Modal.onRendered( function(){
	$('#level2Hint').openModal();
	$('.modal-trigger').leanModal();
});
Template.level3Modal.onRendered( function(){
	$('#level3Hint').openModal();
	$('.modal-trigger').leanModal();
});
Template.level4Modal.onRendered( function(){
	$('#level4Hint').openModal();
	$('.modal-trigger').leanModal();
});
Template.level5Modal.onRendered( function(){
	$('#level5Hint').openModal();
	$('.modal-trigger').leanModal();
});

// create level slider
  Template.levelSelect.onRendered( function(){
    var mySwiper = new Swiper ('#levelSelection', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      grabCursor: true,
      breakpoints: {
          1200: {
              slidesPerView: 3,
              spaceBetween: 30
          },
          993: {
              slidesPerView: 3,
              spaceBetween: 10
          },
          600: {
              slidesPerView: 1,
              spaceBetween: 10
          },
          320: {
              slidesPerView: 1,
              spaceBetween: 30
          }
      }
    });
    function reinitSwiper(swiper) {
      setTimeout(function () {
       swiper.onResize();
      }, 500);
    };
    reinitSwiper(mySwiper);
  });
// get level collection for handlebars
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
// get stars, total from all levels
Template.account.helpers({
	// total user's score
    starCount: function () {
      	return Leaderboard.find({owner: Meteor.userId()});
    }
  });
// level 1 form
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
// level 2 form
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
// level 3 form
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
// level 4 form
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
// level 5 form
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