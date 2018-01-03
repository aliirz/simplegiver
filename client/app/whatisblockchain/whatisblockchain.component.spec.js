'use strict';

describe('Component: WhatisblockchainComponent', function() {
  // load the controller's module
  beforeEach(module('coingivrApp.whatisblockchain'));

  var WhatisblockchainComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    WhatisblockchainComponent = $componentController('whatisblockchain', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
