if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.modalSignup_login.onRendered( function(){
    $('.modal-trigger').leanModal();
  });

 /* Template.home.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

 Template.home.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });*/
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}