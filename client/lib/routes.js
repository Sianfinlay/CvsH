// Routing
Router.configure({
    layoutTemplate: 'app_layout'
});
 
Router.route('/', {
	name: 'home',
 	template: 'Home',
    title: 'Home'
});
Router.route('/account', {
	name: 'account',
 	template: 'account',
    title: 'Account'
});
Router.route('/customisation', {
	name: 'customisation',
 	template: 'customisation',
    title: 'Customisation'
});

Router.after(function(){
    if (this.route.options.title)
        document.title = 'CvsH | '+ this.route.options.title ;
});