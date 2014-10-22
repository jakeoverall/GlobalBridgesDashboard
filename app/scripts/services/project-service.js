'use strict';

angular.module('app.services.projects', [])
  .service('ProjectsService', function ProjectsService(EnvironmentService, $firebase) {
    var firebaseUrl = EnvironmentService.getEnv().firebase;

    return {
      getProjects: function () {
        return $firebase(new Firebase(firebaseUrl + '/projects'));
      },

      getProject: function (projectId) {
        return $firebase(new Firebase(firebaseUrl + '/projects/' + projectId));
      }
      
    }
  });