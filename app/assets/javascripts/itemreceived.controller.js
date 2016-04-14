"use strict";

// NHO: careful of identation
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
