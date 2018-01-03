'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('whatisblockchain', {
      url: '/whatisblockchain',
      template: '<whatisblockchain></whatisblockchain>'
    });
}
