"use strict";

(function(){
  angular
  .module("reportFoundItem", [])
  .controller("reportFoundItemController",[
    reportFoundItemControllerFunction
  ])

  function reportFoundItemControllerFunction(){
  }

  // NHO: Is this code being utilized? If not, might recommend leaving incomplete features on a seperate branch...
  function userID (userid){
  // var user_id = body.getElementByClass("input_id").input.val();
  console.log("I was clicked");
};
})();
