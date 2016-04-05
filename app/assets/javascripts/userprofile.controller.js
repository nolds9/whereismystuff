"use strict";

(function(){
angular
.module("userProfile",[])
.controller("userProfileController",[
  userProfileControllerFunction
]);

function userProfileControllerFunction(){
  console.log("User profile works");
}
})();
