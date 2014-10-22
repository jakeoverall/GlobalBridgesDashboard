'use strict';

describe('Service: invoiceService', function () {

  // load the service's module
  beforeEach(module('rotaryDashboardApp'));

  // instantiate service
  var invoiceService;
  beforeEach(inject(function (_invoiceService_) {
    invoiceService = _invoiceService_;
  }));

  it('should do something', function () {
    expect(!!invoiceService).toBe(true);
  });

});
