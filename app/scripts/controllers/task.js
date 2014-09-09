'use strict';

angular.module('app.controllers.task', [])
  .controller('TaskCtrl', function ($scope, taskRef, commentsRef) {
    var task = taskRef.$asObject();
    console.log(task);

    task.$bindTo($scope, 'task');

    $scope.comments = commentsRef.$asArray();

    $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: username,
        text: text
      });
    };

    $scope.editTask = function (title, text) {
      $scope.taskRef.$set({
        title: title,
        text: text
      })
    };

    // $scope.removeTask = function (title, text) {
    //   $scope.taskRef.$remove({
    //     title: title,
    //     text: text
    //   })
    // };
  });