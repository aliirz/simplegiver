'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('whatisblockchainquiz', {
      url: '/whatisblockchainquiz',
      template: '<whatisblockchainquiz></whatisblockchainquiz>'
    });
}
