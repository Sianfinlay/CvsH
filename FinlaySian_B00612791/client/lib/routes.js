// Routing
Router.configure({
    layoutTemplate: 'app_layout'
});
// get home page 
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
// get account page
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
// get leaderboard page
Router.route('/leaderboard', {
    name: 'leaderboard',
    template: 'leaderboard',
    title: 'Leaderboard',
    onBeforeAction: function(){
        var currrentUser = Meteor.userId();
        if(currrentUser){
            this.next();
        } else {
            this.redirect('/');
        }
    }
});
// get levels page
Router.route('/levels', {
    name: 'levels',
    template: 'levelSelect',
    title: 'Levels',
    onBeforeAction: function(){
        var currrentUser = Meteor.userId();
        if(currrentUser){
            this.next();
        } else {
            this.redirect('/');
        }
    }
});
// level 1
Router.route('/levels/1', {
    name: 'level1',
    template: 'level1',
    title: 'Levels | 1',
    onBeforeAction: function(){
        var currrentUser = Meteor.userId();
        if(currrentUser){
            this.next();
        } else {
            this.redirect('/');
        }
    }
});
// level 2
Router.route('/levels/2', {
    name: 'level2',
    template: 'level2',
    title: 'Levels | 2',
    onBeforeAction: function(){
        var currrentUser = Meteor.userId();
        if(currrentUser){
            this.next();
        } else {
            this.redirect('/');
        }
    }
});
// level 3
Router.route('/levels/3', {
    name: 'level3',
    template: 'level3',
    title: 'Levels | 3',
    onBeforeAction: function(){
        var currrentUser = Meteor.userId();
        if(currrentUser){
            this.next();
        } else {
            this.redirect('/');
        }
    }
});
// level 4
Router.route('/levels/4', {
    name: 'level4',
    template: 'level4',
    title: 'Levels | 4',
    onBeforeAction: function(){
        var currrentUser = Meteor.userId();
        if(currrentUser){
            this.next();
        } else {
            this.redirect('/');
        }
    }
});
// level 5
Router.route('/levels/5', {
    name: 'level5',
    template: 'level5',
    title: 'Levels | 5',
    onBeforeAction: function(){
        var currrentUser = Meteor.userId();
        if(currrentUser){
            this.next();
        } else {
            this.redirect('/');
        }
    }
});
// get customisation page
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
//create title 
Router.after(function(){
    if (this.route.options.title)
        document.title = 'CvsH | '+ this.route.options.title ;
});