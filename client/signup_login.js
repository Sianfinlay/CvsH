 //signup and login events

//temporary
 Template.dropdown_nav.events({
 	'click .logout': function(event){
 		event.preventDefault();
 		Meteor.logout( function(err){
        	if(!err) {
        		Router.go('/');
        	}
        });
 	}
 });

 Template.Signup.events({
    'submit .signup': function (event) {
        event.preventDefault();

        var username = event.target.username.value;
        var email = event.target.email.value;
        var password = event.target.password.value;

        var user = {
        	email:email, 
        	password:password,
        	username:username,
        	createdAt: new Date()
        };

        Accounts.createUser(user, function(err){
        	if(!err) {
        		Router.go('/customisation');
        	}
        });
        //works!
    },
 	'click .face_btn':function(event){
        event.preventDefault();
        Meteor.loginWithFacebook(function(err){
            if(!err) {
                Router.go('/customisation');
            }
        });
    }
  });
 Template.Login.events({
 	'submit .login': function (event) {
 		event.preventDefault();
 		var email = event.target.email_login.value;
 		var password = event.target.password_login.value;

 		Meteor.loginWithPassword(email, password, function(err){
 			if(!err) {
 				Router.go('/account');
 			}
 		});
 	},
 	'click .face_btn':function(event){
        event.preventDefault();
        Meteor.loginWithFacebook(function(err){
            if(!err) {
                Router.go('/account');
            }
        });
    }
 });
