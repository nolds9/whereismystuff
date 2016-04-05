"use strict";

(function(){
angular
.module("welcome",[])
.controller("stuffIndexController",[
  stuffIndexControllerFunction
]);

function stuffIndexControllerFunction(){
  console.log("controller works");
}
})();
