'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('congratulations', {
      url: '/congratulations',
      template: '<congratulations></congratulations>'
    });
}
