'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('securityquiz', {
      url: '/securityquiz',
      template: '<securityquiz></securityquiz>'
    });
}
