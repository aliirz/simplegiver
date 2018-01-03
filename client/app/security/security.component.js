'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './security.routes';

export class SecurityComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('coingivrApp.security', [uiRouter])
  .config(routes)
  .component('security', {
    template: require('./security.html'),
    controller: SecurityComponent,
    controllerAs: 'securityCtrl'
  })
  .name;
