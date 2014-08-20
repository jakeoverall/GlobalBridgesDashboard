'use strict';

angular.module('app.services.task', [])
  .service('TaskService', function TaskService(EnvironmentService, $firebase) {
    var firebaseUrl = EnvironmentService.getEnv().firebase;

    return {
      getTasks: function () {
        return $firebase(new Firebase(firebaseUrl + '/tasks'));
      },

      getTask: function (threadId) {
        return $firebase(new Firebase(firebaseUrl + '/tasks/' + taskId));
      }
      
    }
  });