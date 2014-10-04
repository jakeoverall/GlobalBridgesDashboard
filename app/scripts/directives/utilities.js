'use strict';

/**
 * @ngdoc directive
 * @name rotaryDashboardApp.directive:utilities
 * @description
 * # utilities
 */
angular.module('rotaryDashboardApp')
  .directive('utilities', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the utilities directive');
      }
    };
  });
