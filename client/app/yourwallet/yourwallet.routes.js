'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('yourwallet', {
      url: '/yourwallet',
      template: '<yourwallet></yourwallet>'
    });
}
