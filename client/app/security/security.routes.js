'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('security', {
      url: '/security',
      template: '<security></security>'
    });
}
