// client side js 
Avatar = new Mongo.Collection("avatar");

  Template.Signup.onRendered( function(){
    $('.modal-trigger').leanModal();
  });
  Template.dropdown_nav.onRendered( function(){
    $('.dropdown-button').dropdown({
      belowOrigin: true
    });
  });
  Template.custom_slider.onRendered( function(){
    $('ul.tabs').tabs();
    
      
  });
 Template.customisation.helpers({
    avatar: function () {
      return Avatar.find();
    }
  });
 Template.customisation.events({ 
  "click #saveAvatar": function (event) {
    event.preventDefault();

    var skin = $('input[name=skin]:checked').val();
    var hair = $('input[name=hair]:checked').val();
    var outfit = $('input[name=outfit]:checked').val();

    if(skin == null){
      skin = $('input[name=altskin]').val();
    }
    if(hair == null){
      hair = $('input[name=althair]').val();
    }
    if(outfit == null){
      outfit = $('input[name=altoutfit').val();
    }
    // Insert avatar changes
    Meteor.call("updateAvatar", skin, hair, outfit);
    Router.go('/account');
  }
 });
 Template.skin.onRendered( function(){
  var mySwiper = new Swiper ('#Skin', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      
      // If we need pagination
      //pagination: '.swiper-pagination',
      
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
                slidesPerView: 2,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        }
      
    });
    // change skin being display on avatar, this is not saved yet
    $("img.ava_base").click(function() {
        $('img').removeClass('img_active');
        $(this).addClass('img_active');
        $(this).next().prop("checked", "checked");
        var checked_rad = $('input[name=skin]:checked').val();
        console.log(checked_rad +"radio is checked");

        var base_src = "/images/dressup/skin/"+ checked_rad +".svg";
        $('img.base').attr("src", base_src);
    }); 
 });
 Template.hair.onRendered( function(){
  var mySwiper = new Swiper ('#Hair', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      slidesPerColumn: 2,
      // If we need pagination
      //pagination: '.swiper-pagination',
      
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
    // change skin being display on avatar, this is not saved yet
    $("img.ava_hair").click(function() {
        $('img').removeClass('img_active');
        $(this).addClass('img_active');
        $(this).next().prop("checked", "checked");
        var checked_rad = $('input[name=hair]:checked').val();
        console.log(checked_rad +"radio is checked");

        var hair_src = "/images/dressup/hair/"+ checked_rad +".svg";
        $('img.hair').attr("src", hair_src);
    }); 
 });

 Template.outfit.onRendered( function(){
  var mySwiper = new Swiper ('#Outfit', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      
      // If we need pagination
      //pagination: '.swiper-pagination',
      
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
                slidesPerView: 2,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        }
      
    });
    // change skin being display on avatar, this is not saved yet
    $("img.ava_outfit").click(function() {
        $('img').removeClass('img_active');
        $(this).addClass('img_active');
        $(this).next().prop("checked", "checked");
        var checked_rad = $('input[name=outfit]:checked').val();
        console.log(checked_rad +"radio is checked");

        var outfit_src = "/images/dressup/outfit/"+ checked_rad +".svg";
        $('img.outfit').attr("src", outfit_src);
    }); 
 });

  Template.user_avatar.helpers({
    avatar: function () {
      return Avatar.find();
    }
  });


if (Meteor.isClient){
  Meteor.subscribe("avatar");
}