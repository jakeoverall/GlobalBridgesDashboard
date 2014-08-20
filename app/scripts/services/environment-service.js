'use strict';

angular.module('app.services.environment', [])
  .service('EnvironmentService', function EnvironmentService($window) {

    return {
      getEnv: function () {
        return $window.env;
      },

      saveUsername: function (username) {
        $window.localStorage.setItem('username', username);
      },

      getUsername: function () {
        return $window.localStorage.getItem('username');
      }
    }
  });
