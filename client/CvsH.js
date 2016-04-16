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
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      
      // If we need pagination
      pagination: '.swiper-pagination',
      
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
 

  Template.user_avatar.helpers({
    avatar: function () {
      return Avatar.find();
    }

  });


if (Meteor.isClient){
  Meteor.subscribe("avatar");
}