'use strict';

describe('Component: SecurityquizComponent', function() {
  // load the controller's module
  beforeEach(module('coingivrApp.securityquiz'));

  var SecurityquizComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    SecurityquizComponent = $componentController('securityquiz', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
