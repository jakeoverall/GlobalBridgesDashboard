'use strict';

angular.module('app.controllers.thread', [])
  .controller('ThreadCtrl', function ($scope, threadRef, commentsRef) {
    var thread = threadRef.$asObject();

    thread.$bindTo($scope, 'thread');

    $scope.comments = commentsRef.$asArray();

    $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: username,
        text: text
      }).then(function () {
        $scope.newCommentText = "";
      });
    };
  });
