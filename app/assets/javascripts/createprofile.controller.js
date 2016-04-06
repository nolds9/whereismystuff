"use strict";

(function(){
  angular
  .module("createProfile")
  .controller("createProfileController",[
    "UserFactory",
    "$state",
    createProfileControllerFunction
  ])


  function createProfileControllerFunction(UserFactory, $state){
    this.newUser = new UserFactory();
    this.create = function() {
      this.newUser.$save().then(function(user){
        $state.go("userProfileIndex", {id: user.id})
      })
    }
   }
})();
