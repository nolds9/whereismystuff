"use strict";

(function(){
 angular
 .module("userProfile")
 .factory("ItemFactory", [
   "$resource",
   ResourceFactoryFunction
 ]);

 function ResourceFactoryFunction($resource) {
   return $resource("/items/:id.json")
 };
}());
