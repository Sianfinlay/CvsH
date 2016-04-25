// client side js 
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

  Template.Signup.onRendered( function(){
    $('.modal-trigger').leanModal();
  });

  /*===================
    level functions 
    ==================*/
  Template.level1Modal.onRendered( function(){
    $('#level1Hint').openModal();
    $('.modal-trigger').leanModal();
  });
  Template.level2Modal.onRendered( function(){
    $('#level2Hint').openModal();
    $('.modal-trigger').leanModal();
  });
  Template.level2Modal.helpers({
    score: function () {
      return score;
    }
  });
  Template.level3Modal.onRendered( function(){
    $('#level3Hint').openModal();
    $('.modal-trigger').leanModal();
  });
  Template.level3Modal.helpers({
    score: function () {
      return score;
    }
  });
  Template.level4Modal.onRendered( function(){
    $('#level4Hint').openModal();
    $('.modal-trigger').leanModal();
  });
  Template.level4Modal.helpers({
    score: function () {
      return score;
    }
  });
  Template.level5Modal.onRendered( function(){
    $('#level5Hint').openModal();
    $('.modal-trigger').leanModal();
  });
  Template.level5Modal.helpers({
    score: function () {
      return score;
    }
  });



  Template.dropdown_nav.onRendered( function(){
    $('.dropdown-button').dropdown({
      belowOrigin: true
    });
  });

  Template.user_avatar.helpers({
    avatar: function () {
      return Avatar.find({
        owner: Meteor.userId()
      });
    }
  });
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


if (Meteor.isClient){
  Meteor.subscribe("avatar_levels");
}