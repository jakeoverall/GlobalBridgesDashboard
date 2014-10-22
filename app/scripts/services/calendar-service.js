'use strict';

angular.module('app.services.calendar', [])
  .service('CalendarService', function CalendarService(EnvironmentService, $firebase) {
    var firebaseUrl = EnvironmentService.getEnv().firebase;

    return {
      getEvents: function () {
        return $firebase(new Firebase(firebaseUrl + '/events'));
      },

      getEvent: function (eventId) {
        return $firebase(new Firebase(firebaseUrl + '/events/' + eventId));
      }
    }
  });
