'use strict';

angular.module('app.controllers.dashboard', [])
  .controller('DashboardCtrl', function ($scope, $state, MembersService, membersRef, memberRef, wordsRef, wordRef, publishedRef) {

    // For Search Page

    $scope.members = membersRef.$asArray();

    $scope.published = publishedRef.$asArray();


  });