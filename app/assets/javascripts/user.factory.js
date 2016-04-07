"use strict";

(function(){
  angular
  .module("createProfile")
  .factory("UserFactory", [
    "$resource",
    ResourceFactoryFunction
  ]);

  function ResourceFactoryFunction($resource) {
    var User = $resource("http://localhost:3000/users/:id.json")
    User.all = User.query();
    return User;

  };
}());
