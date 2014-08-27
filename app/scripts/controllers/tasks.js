'use strict';

angular.module('app.controllers.tasks', [])
  .controller('TasksCtrl', function ($scope, tasksRef, $state) {

    $scope.tasks = tasksRef.$asArray();

    $scope.tasks.$loaded().then(function (tasks) {
      console.log(tasks);
    });

    $scope.createTask = function (username, title, text) {
      $scope.tasks.$add({
        username: username,
        title: title,
        text: text
      });
      $state.go('secure.tasks');
    };

  });
  