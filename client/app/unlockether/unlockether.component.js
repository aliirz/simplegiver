'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './unlockether.routes';

export class UnlocketherComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('coingivrApp.unlockether', [uiRouter])
  .config(routes)
  .component('unlockether', {
    template: require('./unlockether.html'),
    controller: UnlocketherComponent,
    controllerAs: 'unlocketherCtrl'
  })
  .name;
