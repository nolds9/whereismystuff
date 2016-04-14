"use strict";

(function(){
angular
.module("lostItem",[])
.controller("lostItemController",[
  lostItemControllerFunction
]);

function lostItemControllerFunction(){
  this.profile_reroute = function () {
    // NHO: Not sure I follow what you are trying to query for here
    // Are you trying to find an specific item? if so don't you want to use the ItemFactory?
    this.item = UserFactory.get({id: parseInt(this.item.id)}).$promise.then(function(user){
      // NHO: where does this.user_id come from? Can't we pass in the user returned from the DB's id
      $state.go("userProfileIndex", {id: parseInt(this.user_id.id)})
    }.bind(this))
  }
}
})();
