if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.Signup.onRendered( function(){
    $('.modal-trigger').leanModal();
  });
  Template.dropdown_nav.onRendered( function(){
    $('.dropdown-button').dropdown({
      belowOrigin: true
    });
  });
  Template.custom_tabs.onRendered( function(){
    $('ul.tabs').tabs();
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}