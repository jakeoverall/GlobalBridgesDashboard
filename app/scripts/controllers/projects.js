'use strict'

angular.module('app.controllers.projects', [])
  .controller('ProjectsCtrl', function ($scope, projectsRef, $state) {

    $scope.projects = projectsRef.$asArray();

    $scope.newTaskTitle = ''
    $scope.newTaskLabelText = '';
    $scope.showTasksTab = true;
    $scope.showCompletedTab = false;

    $scope.removeCommittee = function(item) {
      $scope.committees.$remove(item);
    };

    $scope.addCommittee = function(committee){
        if(committee.name){
            $scope.committees.$add(committee)
        }
    };

    $scope.viewProject = function(project){
      debugger;
        $state.go('secure.project', {projectId: project.$id});
    }

    $scope.edit = function (item) {
      item.editing = true;
    };

    $scope.cancelEdit = function (item) {
      item.editing = false;
    };

    $scope.cancelAdd = function ($event) {
      if ($event.keyCode != 27) return;
      this.showForm = false;
    };

    $scope.doneEditing = function (item) {
      item.editing = false;
      $scope.committees.$save(item);
    };
  });