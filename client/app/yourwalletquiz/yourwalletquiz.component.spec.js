'use strict';

describe('Component: YourwalletquizComponent', function() {
  // load the controller's module
  beforeEach(module('coingivrApp.yourwalletquiz'));

  var YourwalletquizComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    YourwalletquizComponent = $componentController('yourwalletquiz', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
