'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './yourwalletquiz.routes';

export class YourwalletquizComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('coingivrApp.yourwalletquiz', [uiRouter])
  .config(routes)
  .component('yourwalletquiz', {
    template: require('./yourwalletquiz.html'),
    controller: YourwalletquizComponent,
    controllerAs: 'yourwalletquizCtrl'
  })
  .name;
