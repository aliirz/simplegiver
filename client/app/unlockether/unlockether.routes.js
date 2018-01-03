'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('unlockether', {
      url: '/unlockether',
      template: '<unlockether></unlockether>'
    });
}
