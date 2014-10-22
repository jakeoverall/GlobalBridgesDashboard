'use strict';

angular.module('app.controllers.eventmodal', [])
.controller('EventModalCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
    
    var ModalInstanceCtrl = function ($scope, $modalInstance, $firebase, EnvironmentService) {
    console.log($modal)
     var firebaseUrl = EnvironmentService.getEnv().firebase;             
     
     $scope.events = $firebase(new Firebase(firebaseUrl + '/events')).$asArray();

      $scope.ok = function (event) {
        event.start = new Date(event.start).toISOString();
        event.end = new Date(event.end).toISOString();
        $scope.events.$add(event);
        $modalInstance.close();
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    };

    $scope.open = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: ModalInstanceCtrl,
        size: size
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
}])