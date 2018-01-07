'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './congratulations.routes';

export class CongratulationsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('coingivrApp.congratulations', [uiRouter])
  .config(routes)
  .component('congratulations', {
    template: require('./congratulations.html'),
    controller: CongratulationsComponent,
    controllerAs: 'congratulationsCtrl'
  })
  .name;
