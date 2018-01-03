'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './whatisblockchainquiz.routes';

export class WhatisblockchainquizComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('coingivrApp.whatisblockchainquiz', [uiRouter])
  .config(routes)
  .component('whatisblockchainquiz', {
    template: require('./whatisblockchainquiz.html'),
    controller: WhatisblockchainquizComponent,
    controllerAs: 'whatisblockchainquizCtrl'
  })
  .name;
