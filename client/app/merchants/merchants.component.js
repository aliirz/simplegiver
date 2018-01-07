'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './merchants.routes';

export class MerchantsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('coingivrApp.merchants', [uiRouter])
  .config(routes)
  .component('merchants', {
    template: require('./merchants.html'),
    controller: MerchantsComponent,
    controllerAs: 'merchantsCtrl'
  })
  .name;
