'use strict';

describe('Service: threadService', function () {

  // load the service's module
  beforeEach(module('rotaryDashboardApp'));

  // instantiate service
  var threadService;
  beforeEach(inject(function (_threadService_) {
    threadService = _threadService_;
  }));

  it('should do something', function () {
    expect(!!threadService).toBe(true);
  });

});
