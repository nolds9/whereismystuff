"use strict";

(function(){
  angular
  .module("userProfile",[
    "ui.router",
    "ngResource"
  ])
  .controller("userProfileController",[
    "UserFactory",
    "$stateParams",
    userProfileControllerFunction
  ]);

  function userProfileControllerFunction(User, $stateParams){
    var userVM = this;
    this.items = []
    User.all.$promise.then(function(){
      User.all.forEach(function(user){
        if(user.id == $stateParams.id){
          console.log("found user", user)
          userVM.newItem = {};
          userVM.addItem = function () {
             userVM.newItem.barcode = Math.floor((Math.random() * 100000) + 10000);
             userVM.newItem.name = userVM.newItem.name
             userVM.items.push(angular.copy(userVM.newItem))
             userVM.newItem = {}
             console.log(newItem.name)
          }
          userVM.user=user;
        }
      });
    });
    }

  // function showCtrlFunction(Destination, $stateParams){
  //   var showVM = this;
  //   Destination.all.$promise.then(function(){
  //     Destination.all.forEach(function(destination){
  //       if(destination.id == $stateParams.id){
  //         showVM.destination = destination;
  //       }
  //     });
  //   });
  // }
})();
