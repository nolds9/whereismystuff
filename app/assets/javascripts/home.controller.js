"use strict";

// NHO: careul of code indentation

(function(){
angular
.module("welcome",[])
.controller("stuffIndexController",[
  "UserFactory",
  "$stateParams",
  "$state",
  stuffIndexControllerFunction
]);

function stuffIndexControllerFunction(UserFactory, $stateParams, $state){
  this.authUser = {}
  this.signIn = function () {
    UserFactory.get({id: parseInt(this.authUser.id)}).$promise.then(function(user){
      this.user = user;
      $state.go("userProfileIndex", {id: parseInt(this.authUser.id)})
    }.bind(this))
  }

 // NHO: reminder to remove unused / commented out code.
// this.user.username=UserFactory.get({username: $stateParams.username});
  // console.log("controller works");
}
})();
