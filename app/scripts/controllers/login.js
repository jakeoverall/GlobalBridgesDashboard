'use strict';

angular.module('app.controllers.login', [])
  .controller('LoginCtrl', function ($scope, UserService, $state) {
    $scope.name = "Global Bridges";

    $scope.logMeIn = function (email, password) {
      UserService.logIn(email, password).then(function (user) {
        $state.go('secure.dashboard');
      }, function (error) {
        alert(error);
      });

    };

    $scope.register = function (username, email, password) {
      UserService.register(username, email, password).then(function (user) {
        UserService.logIn(email, password).then(function () {
          $state.go('secure.dashboard');
        });

      }, function (error) {
        alert(error);
      });
    };

  });
