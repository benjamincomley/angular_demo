(function () {
  'use strict';
  angular
    .module("demoApp")
    .controller("mainController", function($scope, userService) {
      $scope.users = userService.users();
      $scope.newUser = {};
      $scope.addUser = function() {
        userService.add($scope.newUser);
        $scope.newUser = {}
      }
    });
})();
