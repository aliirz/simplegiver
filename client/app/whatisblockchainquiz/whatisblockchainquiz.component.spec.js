'use strict';

describe('Component: WhatisblockchainquizComponent', function() {
  // load the controller's module
  beforeEach(module('coingivrApp.whatisblockchainquiz'));

  var WhatisblockchainquizComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    WhatisblockchainquizComponent = $componentController('whatisblockchainquiz', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
