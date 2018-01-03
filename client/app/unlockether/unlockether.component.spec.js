'use strict';

describe('Component: UnlocketherComponent', function() {
  // load the controller's module
  beforeEach(module('coingivrApp.unlockether'));

  var UnlocketherComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    UnlocketherComponent = $componentController('unlockether', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
