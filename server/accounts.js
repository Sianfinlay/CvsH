// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({service: "facebook"});
ServiceConfiguration.configurations.remove({service: "twitter"});


ServiceConfiguration.configurations.insert({
  service: "facebook",
  appId: "1708230562789289",
  secret: "1983cb0435f0d43977ed8092a89b698d"
});

// first, remove configuration entry in case service is already configured
/*Accounts.loginServiceConfiguration.remove({
  service: "twitter"
});
Accounts.loginServiceConfiguration.insert({
  service: "twitter",
  consumerKey: "yourConsumerKey",
  secret: "yourSecret"
});*/
