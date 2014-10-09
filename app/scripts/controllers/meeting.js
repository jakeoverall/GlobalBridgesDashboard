'use strict';

angular.module('app.controllers.meeting', [])
  .controller('MeetingCtrl', function ($scope, $state, MembersService, membersRef, memberRef, publishedPostsRef) {

    // For Search Page

    $scope.members = membersRef.$asArray();

    $scope.posts = publishedPostsRef.$asArray();

    $scope.now = moment().format();
 //    console.log(now);

 //    $scope.timediff = function(){
	//   return  now - $scope.posts.text.created
	// };

  });