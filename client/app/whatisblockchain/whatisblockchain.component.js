'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './whatisblockchain.routes';

export class WhatisblockchainComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('coingivrApp.whatisblockchain', [uiRouter])
  .config(routes)
  .component('whatisblockchain', {
    template: require('./whatisblockchain.html'),
    controller: WhatisblockchainComponent,
    controllerAs: 'whatisblockchainCtrl'
  })
  .name;
