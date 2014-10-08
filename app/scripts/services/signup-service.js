'use strict';

angular.module('app.services.signup', [])
  .service('SignupService', function SignupService(EnvironmentService, $firebase) {
    var firebaseUrl = EnvironmentService.getEnv().firebase;

    return {
      getApplicants: function () {
        return $firebase(new Firebase(firebaseUrl + '/applicants'));
      },
      getApplicant: function (memberId) {
        return $firebase(new Firebase(firebaseUrl + '/applicants/' + memberId));
      }
    }
  });