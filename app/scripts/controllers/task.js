'use strict';

angular.module('app.controllers.task', [])
  .controller('TaskCtrl', function ($scope, taskRef, commentsRef) {
    var thread = threadRef.$asObject();

    thread.$bindTo($scope, 'thread');

    $scope.comments = commentsRef.$asArray();

    $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: username,
        text: text
      });
    };
  });