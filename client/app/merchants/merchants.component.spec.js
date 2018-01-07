'use strict';

describe('Component: MerchantsComponent', function() {
  // load the controller's module
  beforeEach(module('coingivrApp.merchants'));

  var MerchantsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    MerchantsComponent = $componentController('merchants', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
