// Routing
Router.configure({
    layoutTemplate: 'app_layout'
});
 
Router.route('/', {
	name: 'Home',
 	template: 'Home',
    title: 'Home'
});
Router.route('/account', {
	name: 'Account',
 	template: 'account',
    title: 'Account'
});
Router.route('/customisation', {
	name: 'Customisation',
 	template: 'customisation',
    title: 'Customisation'
});

Router.after(function(){
    if (this.route.options.title)
        document.title = 'CvsH | '+ this.route.options.title ;
});