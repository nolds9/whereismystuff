"use strict";

(function(){
  angular
  .module("createProfile")
  .factory("UserFactory", [
    "$resource",
    ResourceFactoryFunction
  ]);

  function ResourceFactoryFunction($resource) {
    // NHO: shouldn't this url be relative...
    var User = $resource("http://localhost:3000/users/:id.json") // NHO: support for update?
    User.all = User.query();
    return User;

  };
}());
