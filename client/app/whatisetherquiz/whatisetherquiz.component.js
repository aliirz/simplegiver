'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './whatisetherquiz.routes';

export class WhatisetherquizComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('coingivrApp.whatisetherquiz', [uiRouter])
  .config(routes)
  .component('whatisetherquiz', {
    template: require('./whatisetherquiz.html'),
    controller: WhatisetherquizComponent,
    controllerAs: 'whatisetherquizCtrl'
  })
  .name;
