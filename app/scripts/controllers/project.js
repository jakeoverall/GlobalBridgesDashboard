'use strict'

angular.module('app.controllers.project', [])
  .controller('ProjectCtrl', function ($scope,projectRef) {
    
    $scope.project = projectRef.$asObject();
    // $scope.tasks = tasksRef.$asArray();


    $scope.newTaskTitle = ''
    $scope.newTaskLabelText = '';
    $scope.showTasksTab = true;
    $scope.showCompletedTab = false;

    $scope.removeTask = function(task) {
      $scope.tasks.$remove(task)
    };

    $scope.completeTask = function(task) {
        task.completed = true;
        $scope.tasks.$save(task);      
    };

    $scope.incompleteTask = function(task) {
        task.completed = false;
        $scope.tasks.$save(task);      
    };

    $scope.newItem = function (task) {
      task.completed = false;
      $scope.tasks.$add(task);
      this.showForm = false;
    };

    $scope.edit = function (task) {
      task.editing = true;
    };

    $scope.cancelEdit = function (task) {
      task.editing = false;
    };

    $scope.doneEditing = function (task) {
      task.editing = false;
      $scope.tasks.$save(task)
    };
  })

  