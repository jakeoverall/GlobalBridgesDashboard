'use strict';

describe('Service: committeeService', function () {

  // load the service's module
  beforeEach(module('rotaryDashboardApp'));

  // instantiate service
  var committeeService;
  beforeEach(inject(function (_committeeService_) {
    committeeService = _committeeService_;
  }));

  it('should do something', function () {
    expect(!!committeeService).toBe(true);
  });

});
