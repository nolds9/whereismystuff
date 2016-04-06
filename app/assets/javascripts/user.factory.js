"use strict";

(function(){
  angular
  .module("createProfile")
  .factory("UserFactory", [
    "$resource",
    ResourceFactoryFunction
  ]);

  function ResourceFactoryFunction($resource) {
    return $resource("http://localhost:3000/users/:id.json")

  };
}());
