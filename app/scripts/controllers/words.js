'use strict';

angular.module('app.controllers.words', [])
  .controller('WordsCtrl', function ($scope, wordsRef, $timeout) {
    /*
     * Words
    */
    $scope.words = wordsRef.$asArray();

    $scope.removeWord = function (word) {
      var title = word.title;

      $scope.words.$remove(word).then(function () {
        NotificationService.success('Deleted', 'Bye bye ' + title + '!');
      }, function (error) {
        NotificationService.error('Delete Failed', 'Something is up!');
      });
    };

    $scope.createWord = function (title) {
      $scope.words.$add({
        title: title,
        type: 'page',
        created: moment().format(),
        author: {
          name: $scope.user.name || $scope.currentUser.id,
          email: $scope.user.email || $scope.currentUser.email
        }
      }).then(function () {
        delete $scope.newWordTitle;
      });

    };

    $scope.unpublishWord = function (word) {
      delete word.published;
      word.edited = true;

    };

    $scope.saveWord = function (word) {
      delete word.edited;

      word.slug = Slug.slugify(word.slug);

      $scope.words.$save(word).then(function () {
        NotificationService.success('Saved', word.title);
      }, function (error) {
        NotificationService.error('Save Error', error);
      });

    };



  });
