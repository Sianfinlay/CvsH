// Routing
Router.configure({
    layoutTemplate: 'app_layout'
});
 
Router.route('/', function () {
  this.render('Home');
});
Router.route('/account');