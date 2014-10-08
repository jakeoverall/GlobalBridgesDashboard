'use strict';

describe('Service: membersService', function () {

  // load the service's module
  beforeEach(module('rotaryDashboardApp'));

  // instantiate service
  var membersService;
  beforeEach(inject(function (_membersService_) {
    membersService = _membersService_;
  }));

  it('should do something', function () {
    expect(!!membersService).toBe(true);
  });

});
