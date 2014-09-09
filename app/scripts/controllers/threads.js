'use strict';

angular.module('app.controllers.threads', [])
  .controller('ThreadsCtrl', function ($scope, threadsRef, threadRef, $state, $log) {

    $scope.threads = threadsRef.$asArray();

    $scope.threads.$loaded().then(function (threads) {
      console.log(threads);
      $scope.totalItems = $scope.threads.length;
    });

    $scope.createThread = function (username, title, text) {
      $scope.threads.$add({
        username: username,
        title: title,
        text: text
      });
      $state.go('secure.threads');
    };

    $scope.numPages = function () {
      return Math.ceil($scope.threads.length / $scope.numPerPage);
    };

    
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.info('Page changed to: ' + $scope.currentPage);
    };  

  });
