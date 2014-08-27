'use strict';

angular.module('app.controllers.threads', [])
  .controller('ThreadsCtrl', function ($scope, threadsRef, threadRef, $state) {

    $scope.threads = threadsRef.$asArray();

    $scope.threads.$loaded().then(function (threads) {
      console.log(threads);
    });

    $scope.createThread = function (username, title, text) {
      $scope.threads.$add({
        username: username,
        title: title,
        text: text
      });
      $state.go('secure.threads');
    }

  });
