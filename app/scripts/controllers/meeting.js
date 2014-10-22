'use strict';

angular.module('app.controllers.meeting', [])
  .controller('MeetingCtrl', function ($scope, $state, MembersService, membersRef, memberRef, publishedPostsRef, commentsRef) {

    // For Search Page

    $scope.members = membersRef.$asArray();

    $scope.posts = publishedPostsRef.$asArray();

    $scope.now = moment().format();

    $scope.comments = commentsRef.$asArray();

    $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: username,
        text: text
      }).then(function () {
        $scope.newCommentText = "";
      });
    };

  });