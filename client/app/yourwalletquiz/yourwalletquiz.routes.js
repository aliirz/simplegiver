'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('yourwalletquiz', {
      url: '/yourwalletquiz',
      template: '<yourwalletquiz></yourwalletquiz>'
    });
}
