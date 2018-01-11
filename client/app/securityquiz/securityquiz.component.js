'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './securityquiz.routes';

export class SecurityquizComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
    this.isAddButton = false;
    this.moveAhead = false;
    this.w1 = false;
    this.w2 = false;
    this.w3 = false;
  }

  correctAnswer() {
    this.moveAhead = true;
  }

  wrongAnswer1() {
    this.w1 = true;
  }
  wrongAnswer2() {
    this.w2 = true;
  }
  wrongAnswer3() {
    this.w3 = true;
  }

  toggleClass() {
    this.isAddButton = !this.isAddButton;
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
