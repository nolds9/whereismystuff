"use strict";

(function(){
angular
.module("itemReceived",[])
.controller("itemReceivedController",[
  itemReceivedControllerFunction
]);

function itemReceivedControllerFunction(){
  console.log("this is where we congratulate on receiving item");
}
})();
