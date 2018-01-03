'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './securityquiz.routes';

export class SecurityquizComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('coingivrApp.securityquiz', [uiRouter])
  .config(routes)
  .component('securityquiz', {
    template: require('./securityquiz.html'),
    controller: SecurityquizComponent,
    controllerAs: 'securityquizCtrl'
  })
  .name;
