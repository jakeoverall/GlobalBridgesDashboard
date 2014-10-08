'use strict';

angular.module('app.services.admin', [])
  .service('AdminService', function TaskService(EnvironmentService, $firebase) {
    var firebaseUrl = EnvironmentService.getEnv().firebase;

    return {
      getWords: function () {
        return $firebase(new Firebase(firebaseUrl + '/content/words'));
      },

      getWord: function (wordId) {
        return $firebase(new Firebase(firebaseUrl + '/content/words/' + wordId));
      },

      getDrafts: function (wordId) {
        return $firebase(new Firebase(firebaseUrl + '/content/words/' + wordId + '/drafts'));
      },

      getPublished: function () {
        return $firebase(new Firebase(firebaseUrl + '/content/published'));
      },

      getPublishedNews: function () {
        return $firebase(new Firebase(firebaseUrl + '/content/published/news'));
      },

      getPublishedPosts: function () {
        return $firebase(new Firebase(firebaseUrl + '/content/published/posts'));
      },

      getPublishedMessages: function () {
        return $firebase(new Firebase(firebaseUrl + '/content/published/messages'));
      }
      
    }
  });