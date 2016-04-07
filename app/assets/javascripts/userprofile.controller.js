"use strict";

(function(){
  angular
  .module("userProfile",[
    "ui.router",
    "ngResource"
  ])
  .controller("userProfileController",[
    "UserFactory",
    "ItemFactory",
    "$stateParams",
    "$state",
    userProfileControllerFunction
  ]);

  function userProfileControllerFunction(User, Item, $stateParams, $state){
    var userVM = this;
    User.get({id: $stateParams.id}).$promise.then(function(user){
      userVM.user = user
      userVM.items = user.items
    })
    userVM.newItem = new Item()
    userVM.addItem = function() {
      userVM.newItem.barcode = Math.floor((Math.random() * 100000) + 10000);
      userVM.newItem.user_id = $stateParams.id //not doing exactly what we think
      userVM.newItem.$save().then(function(item){
        $state.go("userProfileIndex", {}, {reload: true})
      })
    }
  }
})();
