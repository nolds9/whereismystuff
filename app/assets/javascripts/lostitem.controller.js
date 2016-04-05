"use strict";

(function(){
angular
.module("lostItem",[])
.controller("lostItemController",[
  lostItemControllerFunction
]);

function lostItemControllerFunction(){
  console.log("this is where lost item is shown");
}
})();
