'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './whatisetherquiz.routes';

export class WhatisetherquizComponent {
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

export default angular.module('coingivrApp.whatisetherquiz', [uiRouter])
  .config(routes)
  .component('whatisetherquiz', {
    template: require('./whatisetherquiz.html'),
    controller: WhatisetherquizComponent,
    controllerAs: 'whatisetherquizCtrl'
  })
  .name;
