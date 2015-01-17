if (Meteor.isClient) {
  //This code is only run on the client
  
  //Config accounts
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  //inBody functions

  //Landing Page Functions
  Template.inBody.events({
    'click button': function(){
      //Switch to Play view
      Session.set("hasUser", true);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
