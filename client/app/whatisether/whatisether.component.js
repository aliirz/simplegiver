'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './whatisether.routes';

export class WhatisetherComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('coingivrApp.whatisether', [uiRouter])
  .config(routes)
  .component('whatisether', {
    template: require('./whatisether.html'),
    controller: WhatisetherComponent,
    controllerAs: 'whatisetherCtrl'
  })
  .name;
