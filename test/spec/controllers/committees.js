'use strict';

describe('Controller: CommitteesCtrl', function () {

  // load the controller's module
  beforeEach(module('rotaryDashboardApp'));

  var CommitteesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommitteesCtrl = $controller('CommitteesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
