'use strict';

describe('Controller: StripectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('rotaryDashboardApp'));

  var StripectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StripectrlCtrl = $controller('StripectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
