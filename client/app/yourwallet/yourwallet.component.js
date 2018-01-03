'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './yourwallet.routes';

export class YourwalletComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('coingivrApp.yourwallet', [uiRouter])
  .config(routes)
  .component('yourwallet', {
    template: require('./yourwallet.html'),
    controller: YourwalletComponent,
    controllerAs: 'yourwalletCtrl'
  })
  .name;
