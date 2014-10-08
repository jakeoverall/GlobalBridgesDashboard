'use strict';

angular.module('app.controllers.word', [])
  .controller('WordCtrl', function ($scope, wordRef, draftsRef, _, $localStorage, publishedNewsRef, publishedPostsRef, publishedMessagesRef) {

  	$scope.$storage = $localStorage;

    $scope.news = publishedNewsRef.$asArray();

    $scope.posts = publishedPostsRef.$asArray();

    $scope.messages = publishedMessagesRef.$asArray();
    /*
     * Word
    */
    var word = wordRef.$asObject();

    word.$bindTo($scope, 'word');

    word.$loaded().then(function () {
      if (!$scope.$storage.activeDraft || $scope.$storage.activeDraft.wordId !== $scope.word.$id) {
        $scope.$storage.activeDraft = {
          markdown: $scope.word.published ? $scope.word.published.markdown : '#Use your words! \n\n(But please make it Markdown...)',
          created: moment().format(),
          wordId: $scope.word.$id
        };
      }

      // $scope.showDraft = true;
    });


    /*
     * Drafts
    */
    $scope.drafts = draftsRef.$asArray();
  

    $scope.saveDraft = function (draft) {
      draft.edited = moment().format();

      $scope.drafts.$add(draft);
      console.log("done");
    };

    $scope.removeDraft = function (draft) {
      $scope.drafts.$remove(draft);
    };

    $scope.makeActiveDraft = function (draft) {
      $scope.$storage.activeDraft = _.clone(draft);
      $scope.$storage.activeDraft.wordId = $scope.word.$id;

    };

    $scope.setPublishedDraft = function (draft) {
      if (word.type === "News") {
        $scope.news.$add({
          text: draft
        }).then(function (draft) {
          var datetime = moment().format();
          draft.edited = datetime;
          draft.published = datetime;
          $scope.word.published = draft;
          console.log($scope.word.published);
        })
      } else if (word.type === "Presidents Message") {
        $scope.messages.$add({
          text: draft
        }).then(function (draft) {
          var datetime = moment().format();
          draft.edited = datetime;
          draft.published = datetime;
          $scope.word.published = draft;
          console.log($scope.word.published);
        })
      } else {
        $scope.posts.$add({
          text: draft
        }).then(function (draft) {
          var datetime = moment().format();
          draft.edited = datetime;
          draft.published = datetime;
          $scope.word.published = draft;
          console.log($scope.word.published);
        })
      } 
    };

    $scope.unpublish = function () {
      delete $scope.word.published;
      console.log("done");
    };

    $scope.setEditedDatetime = function (draft) {
      draft.edited = moment().format();
    };

    $scope.handleActiveDraftChange = function (draft) {
      draft.edited = moment().format();
    };

    /*
     * Files
    */
    // $scope.files = filesRef.$asObject();

    // $scope.removeFromClipboard = function (file) {
    //   var fileName = $filter('filename')(file.Key);

    //   if (ClipboardService.remove(file, $scope)) {
    //     return NotificationService.success('- Clipboard', fileName + ' has been removed from the clipboard.');
    //   } else {
    //     return NotificationService.error('Not Found', fileName + ' was not found in the clipboard');
    //   }

    // };

    // var SUFFIX_REGEX = /\.(\w+)$/,
    //   imgList = ['jpg', 'jpeg', 'png', 'gif', 'tiff', 'ico'],
    //   videoList = ['mp4', 'webm'];

    // $scope.addFromClipboard = function (file) {
    //   var url = "https://s3.amazonaws.com/" + $scope.files.Name + "/" + file.Key,
    //     matches = file.Key.match(SUFFIX_REGEX),
    //     suffix = (matches && matches.length > 0) ? matches[1].toLowerCase() : null,
    //     isImg = !!~imgList.indexOf(suffix),
    //     isVideo = !!~videoList.indexOf(suffix),
    //     markdown = "\n\n";

    //   if (isImg) {
    //     markdown += '![' + $filter('filename')(file.Key) + '](' + url + ')';
    //   } else if (isVideo) {
    //     markdown += '!![' + $filter('filename')(file.Key) + '](' + url + ')';
    //   } else {
    //     markdown += '[' + $filter('filename')(file.Key) + '](' + url + ')';
    //   }

    //   $scope.$storage.activeDraft.markdown +=  markdown;

    //   NotificationService.success('Markdown Added');
    // };

    /*
     * Location
    */
    // $scope.getLocations = _.debounce(function (location) {
    //   var promise = LocationService.getLocations(location);

    //   promise.then(function (locations) {
    //     $scope.locations = locations;
    //   });
    //   return promise;
    // }, 500);

    // $scope.addLocation = function (location) {
    //   $scope.word.location = location;
    // };

    // $scope.removeLocation = function () {
    //   delete $scope.locationSearch;
    //   delete $scope.locations;
    //   delete $scope.word.location;
    // };

  });
