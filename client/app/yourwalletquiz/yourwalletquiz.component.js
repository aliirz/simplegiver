'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './yourwalletquiz.routes';

export class YourwalletquizComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
    this.isAddButton1 = false;
    this.isAddButton2 = false;
    this.moveAhead1 = false;
    this.moveAhead2 = false;
    this.w1 = false;
    this.w2 = false;
    this.w3 = false;
  }
  correctAnswer1() {
    this.moveAhead1 = true;
  }
  correctAnswer2() {
    this.moveAhead2 = true;
  }

  bothAnswered(){
    if (this.moveAhead1 && this.moveAhead2) {
      return true;
    }
    else {
      false;
    }
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

  toggleClass1() {
    this.isAddButton1 = !this.isAddButton;
  }
  toggleClass2() {
    this.isAddButton2 = !this.isAddButton;
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
