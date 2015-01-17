if (Meteor.isClient) {
  //This code is only run on the client
  function hasLogged(){
    Template.body.noUser = false;
  }
  
  //Config accounts
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Template.body.noUser = true;
  });
}
