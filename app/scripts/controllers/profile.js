'use strict';

angular.module('app.controllers.profile', [])
  .controller('ProfileCtrl', function ($scope, $state, UserService, $q, twitterService, $http, membersRef, memberRef) {
    // if (!currentUser) {
    //   $state.go('login');
    // }

    // $scope.currentUser = currentUser;

    // $scope.user = user;

    // $scope.username = user.username;

    // For Search Page

    $scope.members = membersRef.$asArray();


    // For Social Media

    $scope.tweets; //array of tweets
    
    twitterService.initialize();

    //using the OAuth authorization result get the latest 20 tweets from twitter for the user
    $scope.refreshTimeline = function() {
        twitterService.getLatestTweets().then(function(data) {
            $scope.tweets = data;
        });
    }

    $scope.followersCount = function() {
        twitterService.getFollowersCount().then(function(data) {
            $scope.followers = data;
        });
    }

    //when the user clicks the connect twitter button, the popup authorization window opens
    $scope.connectButton = function() {
        twitterService.connectTwitter().then(function() {
        	console.log("done");
            if (twitterService.isReady()) {
                //if the authorization is successful, hide the connect button and display the tweets
                $('#connectButton').fadeOut(function(){
                    $('#getTimelineButton, #signOut').fadeIn();
                    $scope.refreshTimeline();
                });
            }
        });
    }

    //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    $scope.signOut = function() {
        twitterService.clearCache();
        $scope.tweets.length = 0;
        $('#getTimelineButton, #signOut').fadeOut(function(){
            $('#connectButton').fadeIn();
        });
    }

    //if the user is a returning user, hide the sign in button and display the tweets
    if (twitterService.isReady()) {
        $('#connectButton').hide();
        $('#getTimelineButton, #signOut').show();
        $scope.refreshTimeline();
        $scope.followersCount();
    }

    $http.get('js/app/contact/contacts.json').then(function (resp) {
        $scope.items = resp.data.items;
        $scope.item = $scope.items[0];
        $scope.item.selected = true;
    });

    $scope.btnText = 'Edit';

      $scope.editItem = function(item){
       $scope.user.editing = !$scope.user.editing; 
      };

      $scope.doneEditing = function(item){
        $scope.user.editing = false;
        $scope.user.$save();
      };

  });