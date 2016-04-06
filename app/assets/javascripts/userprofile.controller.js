"use strict";

(function(){
  angular
  .module("userProfile",[])
  .controller("userProfileController",[
    userProfileControllerFunction
  ]);

  function userProfileControllerFunction(){
    console.log("User profile works");
    this.items = [
       {name: "backpack", barcode: 122345},
       {name: "suitcase", barcode: 452324},
       {name: "laptop", barcode: 112131},
       {name: "barbie doll", barcode: 193434},
       {name: "camera", barcode: 981341},
       {name: "cell-phone", barcode: 873430}
     ]

    this.newItem = {};
    this.addItem = function () {
       this.newItem.barcode = Math.floor((Math.random() * 100000) + 10000);
       this.newItem.name = this.newItem.name
       this.items.push(angular.copy(this.newItem))
       this.newItem = {}
    }

  }
})();
