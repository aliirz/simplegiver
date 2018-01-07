'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('merchants', {
      url: '/merchants',
      template: '<merchants></merchants>'
    });
}
