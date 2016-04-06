"use strict";

(function(){
  angular
  .module("createProfile")
  .controller("createProfileController",[
    "UserFactory",
    createProfileControllerFunction
  ])


  function createProfileControllerFunction(UserFactory){
    this.user= new UserFactory();
    this.create = function() {
    this.user.$save()
    console.log(this.User);
    }
   }
})();
