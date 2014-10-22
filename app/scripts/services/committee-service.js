'use strict';

angular.module('app.services.committees', [])
  .service('CommitteesService', function CommitteesService(EnvironmentService, $firebase) {
    var firebaseUrl = EnvironmentService.getEnv().firebase;

    return {
      getCommittees: function () {
        return $firebase(new Firebase(firebaseUrl + '/committees'));
      },

      getCommittee: function (committeeId) {
        return $firebase(new Firebase(firebaseUrl + '/committees/' + committeeId));
      },
      	
      getTasks: function (committeeId) {
        return $firebase(new Firebase(firebaseUrl + '/committees/' + committeeId + '/tasks'));
      },

      getTask: function (committeeId, taskId) {
        return $firebase(new Firebase(firebaseUrl + '/committees/' + committeeId + '/tasks/' + taskId));
      }
      
    }
  });