'use strict';

angular.module('app.services.members', [])
  .service('MembersService', function MembersService(EnvironmentService, $firebase) {
    var firebaseUrl = EnvironmentService.getEnv().firebase;

    return {
      getMembers: function () {
        return $firebase(new Firebase(firebaseUrl + '/users'));
      },
      getMember: function (memberId) {
        return $firebase(new Firebase(firebaseUrl + '/users/' + memberId));
      }
    }
  });