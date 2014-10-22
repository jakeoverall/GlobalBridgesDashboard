'use strict';

angular.module('app.controllers.dashboard', [])
  .controller('DashboardCtrl', function ($scope, $state, MembersService, membersRef, memberRef, wordsRef, wordRef, publishedNewsRef, publishedMessagesRef) {

    // For Search Page

    $scope.members = membersRef.$asArray();

    $scope.news = publishedNewsRef.$asArray();

    $scope.messages = publishedMessagesRef.$asArray();


  });