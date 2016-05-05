// facebook login
ServiceConfiguration.configurations.remove({service: "facebook"});
ServiceConfiguration.configurations.remove({service: "twitter"});

// facebook
ServiceConfiguration.configurations.insert({
  service: "facebook",
  appId: "1708230562789289",
  secret: "1983cb0435f0d43977ed8092a89b698d"
});


ServiceConfiguration.configurations.insert({
  service: "twitter",
  consumerKey: "YHsL2VwXpWxmivnItO7nVoUqR",
  secret: "HH0jVAugFoaQPnjf0pnSDAg7zMtYNOJmg781AYXAIEWHggvbGO"
});
