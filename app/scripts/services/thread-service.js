'use strict';

angular.module('app.services.thread', [])
  .service('ThreadService', function ThreadService(EnvironmentService, $firebase) {
    var firebaseUrl = EnvironmentService.getEnv().firebase;

    return {
      getThreads: function () {
        return $firebase(new Firebase(firebaseUrl + '/threads'));
      },

      getThread: function (threadId) {
        return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId));
      },

      getComments: function (threadId) {
        return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId + '/comments'));
      }
      
    }
  });
