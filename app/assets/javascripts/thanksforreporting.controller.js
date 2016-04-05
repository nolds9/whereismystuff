"use strict";

(function(){
  angular
  .module("thanksForReporting", [])
  .controller("thanksForReportingController",[
    thanksForReportingControllerFunction
  ]);
  function thanksForReportingControllerFunction(){
    console.log("thanks for reporting");
  }
})();
