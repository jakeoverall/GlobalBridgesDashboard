'use strict';

/**
 * @ngdoc function
 * @name rotaryDashboardApp.controller:WordsCtrl
 * @description
 * # WordsCtrl
 * Controller of the rotaryDashboardApp
 */
angular.module('rotaryDashboardApp')
  .controller('WordsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
