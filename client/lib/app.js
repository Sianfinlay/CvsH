// client side js 
Avatar = new Mongo.Collection("avatar");
Levels = new Mongo.Collection("levels");

  Template.Signup.onRendered( function(){
    $('.modal-trigger').leanModal();
  });
  Template.level1Modal.onRendered( function(){
    $('#level1Hint').openModal();
    $('.modal-trigger').leanModal();
  });
  Template.level1Modal.helpers({
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
      return Avatar.find();
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
  });


if (Meteor.isClient){
  Meteor.subscribe("avatar");
  Meteor.subscribe("levels");
  
}