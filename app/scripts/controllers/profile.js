'use strict';

angular.module('app.controllers.profile', [])
  .controller('ProfileCtrl', function ($scope, $state, currentUser, user, UserService) {
    if (!currentUser) {
      $state.go('login');
    }

    $scope.currentUser = currentUser;

    $scope.user = user;

    // Why isn't this working?
    $scope.username = user.username;

  });