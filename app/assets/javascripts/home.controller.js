"use strict";

(function(){
angular
.module("welcome",[])
.controller("stuffIndexController",[
  "$stateParams",
  "UserFactory",
  stuffIndexControllerFunction
]);

function stuffIndexControllerFunction(UserFactory, $stateParams){
this.user.email=UserFactory.get({email: $stateParams.email});
this.user.username=UserFactory.get({username: $stateParams.username});
  console.log("controller works");
}
})();
