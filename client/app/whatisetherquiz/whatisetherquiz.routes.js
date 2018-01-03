'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('whatisetherquiz', {
      url: '/whatisetherquiz',
      template: '<whatisetherquiz></whatisetherquiz>'
    });
}
