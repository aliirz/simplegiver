'use strict';

describe('Component: YourwalletComponent', function() {
  // load the controller's module
  beforeEach(module('coingivrApp.yourwallet'));

  var YourwalletComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    YourwalletComponent = $componentController('yourwallet', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
