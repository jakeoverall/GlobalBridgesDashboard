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
        created: moment().format(),
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

    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: 'Accordion group header - #1',
        content: 'Dynamic group body - #1'
      },
      {
        title: 'Accordion group header - #2',
        content: 'Dynamic group body - #2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };

  });
