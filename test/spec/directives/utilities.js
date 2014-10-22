'use strict';

describe('Directive: utilities', function () {

  // load the directive's module
  beforeEach(module('rotaryDashboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<utilities></utilities>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the utilities directive');
  }));
});
