"use strict";

(function(){
  angular
  .module("reportFoundItem", [])
  .controller("reportFoundItemController",[
    reportFoundItemControllerFunction
  ]);
  function reportFoundItemControllerFunction(){
    console.log("report found item");
  }
})();
