'use strict';

describe('Component: CongratulationsComponent', function() {
  // load the controller's module
  beforeEach(module('coingivrApp.congratulations'));

  var CongratulationsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CongratulationsComponent = $componentController('congratulations', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
