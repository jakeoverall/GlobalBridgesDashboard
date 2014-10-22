'use strict';

angular.module('app.services.notifications', [])
  .service('NotificationService', function ($notification, quiverUtilities) {
      $notification.setSetting('custom', quiverUtilities.notificationConfig);

      return {
        notify: function (title, content, userData) {
          return $notification.notify(null, title, content, userData, 'notify');
        },
        error: function (title, content, userData) {
          return $notification.notify(null, title, content, userData, 'error');
        },
        success: function (title, content, userData) {
          return $notification.notify(null, title, content, userData, 'success');
        },
        warning: function (title, content, userData) {
          return $notification.notify(null, title, content, userData, 'warning');
        }
      };

    });
