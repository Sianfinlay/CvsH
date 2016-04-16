// Routing
Router.configure({
    layoutTemplate: 'app_layout'
});
 
Router.route('/', {
	name: 'home',
 	template: 'Home',
    title: 'Home',
    onBeforeAction: function(){
    	var currrentUser = Meteor.userId();
    	if(currrentUser){
    		this.render('account');
    	} else {
    		this.next();
    	}
    }
});
Router.route('/account', {
	name: 'account',
 	template: 'account',
    title: 'Account',
    onBeforeAction: function(){
    	var currrentUser = Meteor.userId();
    	if(currrentUser){
    		this.next();
    	} else {
    		this.redirect('/');
    	}
    }
});
Router.route('/customisation', {
	name: 'customisation',
 	template: 'customisation',
    title: 'Customisation',
    onBeforeAction: function(){
    	var currrentUser = Meteor.userId();
    	if(currrentUser){
    		this.next();
    	} else {
    		this.redirect('/');
    	}
    }
});

Router.after(function(){
    if (this.route.options.title)
        document.title = 'CvsH | '+ this.route.options.title ;
});