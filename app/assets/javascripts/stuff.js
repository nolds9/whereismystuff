//= require angular
//= require angular-resource
//= require angular-ui-router.min

"use strict";

(function(){
  angular
  .module("whereismystuff",[
    "ngResource",
    "ui.router",
    "welcome",
    "createProfile",
    "userProfile",
    "lostItem",
    "itemReceived",
    "reportFoundItem",
    "thanksForReporting"
  ])

  .config([
    "$stateProvider",
    RouterFunction
  ])

  // .factory("UserFactory", [
  //   "$resource",
  //   ResourceFactoryFunction
  // ])

  function RouterFunction ($stateProvider) {
    $stateProvider
    .state("homeIndex", {
      url: "/",
      templateUrl: "/ng-views/home.html",
      controller: "stuffIndexController",
      controllerAs: "stuffIndexViewModel"
    })

    .state("createProfileIndex", {
      url: "/create-profile",
      templateUrl: "/ng-views/createprofile.html",
      controller: "createProfileController",
      controllerAs: "createProfileViewModel"
    })
    .state("userProfileIndex", {
      url: "/user-profile",
      templateUrl: "/ng-views/userprofile.html",
      controller: "userProfileController",
      controllerAs: "userProfileViewModel"
    })
    .state("lostItemIndex", {
      url: "/lost-item",
      templateUrl: "/ng-views/lostitem.html",
      controller: "lostItemController",
      controllerAs: "lostItemViewModel"
    })
    .state("itemReceivedIndex", {
      url: "/item-received",
      templateUrl: "/ng-views/itemreceived.html",
      controller: "itemReceivedController",
      controllerAs: "itemReceivedViewModel"
    })
    .state("reportFoundItem", {
      url: "/report-found-item",
      templateUrl: "/ng-views/reportfounditem.html",
      controller: "reportFoundItemController",
      controllerAs: "reportFoundItemViewModel"
    })
    .state("thanksForReporting", {
      url: "/thanks-for-reporting",
      templateUrl: "/ng-views/thanksforreporting.html",
      controller: "thanksForReportingController",
      controllerAs: "thanksForReportingViewModel"
    });

    function ResourceFactoryFunction($resource) {
      var User = $resource("http://localhost:3000/users/:id.json", {}, {
        update: {method: "PUT"}
      });
      User.all = User.query()
      return User;
    }
  }
  })();
