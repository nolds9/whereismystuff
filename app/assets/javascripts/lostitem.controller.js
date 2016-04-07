"use strict";

(function(){
angular
.module("lostItem",[])
.controller("lostItemController",[
  lostItemControllerFunction
]);

function lostItemControllerFunction(){
  this.profile_reroute = function () {
    this.item = UserFactory.get({id: parseInt(this.item.id)}).$promise.then(function(user){
      $state.go("userProfileIndex", {id: parseInt(this.user_id.id)})
    }.bind(this))
  }
}
})();
