"use strict";

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
    this.user = UserFactory.get({id: parseInt(this.authUser.id)}) .$promise.then(function(user){
      $state.go("userProfileIndex", {id: parseInt(this.authUser.id)})
    }.bind(this))
  }

// this.user.username=UserFactory.get({username: $stateParams.username});
  // console.log("controller works");
}
})();
