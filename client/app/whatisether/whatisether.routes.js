'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('whatisether', {
      url: '/whatisether',
      template: '<whatisether></whatisether>'
    });
}
