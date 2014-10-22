'use strict';

angular.module('app.controllers.signup', [])
  .controller('SignupCtrl', function ($scope, applicantsRef, $state) {

    $scope.applicants = applicantsRef.$asArray();

    // $scope.threads.$loaded().then(function (threads) {
    //   console.log(threads);
    //   $scope.totalItems = $scope.threads.length;
    // });

    $scope.createApplicant = function (name, email, birthday, address, address2, city, state, country, employer, position, rotarian) {
      $scope.applicants.$add({
        name: $scope.user.fullname,
        email: $scope.user.email,
        birthday: $scope.user.birthday,
        address: $scope.user.address,
        address2: $scope.user.address2,
        city: $scope.user.city,
        state: $scope.user.state,
        country: $scope.user.country,
        employer: $scope.user.company,
        position: $scope.user.position
      });
      console.log("done");
      // $state.go('thanks');
    };
  

  });