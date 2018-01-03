'use strict';

describe('Component: WhatisetherquizComponent', function() {
  // load the controller's module
  beforeEach(module('coingivrApp.whatisetherquiz'));

  var WhatisetherquizComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    WhatisetherquizComponent = $componentController('whatisetherquiz', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
