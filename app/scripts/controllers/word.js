'use strict';

/**
 * @ngdoc function
 * @name rotaryDashboardApp.controller:WordCtrl
 * @description
 * # WordCtrl
 * Controller of the rotaryDashboardApp
 */
angular.module('rotaryDashboardApp')
  .controller('WordCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
