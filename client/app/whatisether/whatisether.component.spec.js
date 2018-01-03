'use strict';

describe('Component: WhatisetherComponent', function() {
  // load the controller's module
  beforeEach(module('coingivrApp.whatisether'));

  var WhatisetherComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    WhatisetherComponent = $componentController('whatisether', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
