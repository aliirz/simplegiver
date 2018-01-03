'use strict';

describe('Component: SecurityComponent', function() {
  // load the controller's module
  beforeEach(module('coingivrApp.security'));

  var SecurityComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    SecurityComponent = $componentController('security', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
