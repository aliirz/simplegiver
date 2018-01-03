'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-validation-match';

import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import unlockether from './unlockether/unlockether.component';
import WhatisblockchainComponent from './whatisblockchain/whatisblockchain.component';
import WhatisblockchainquizComponent from './whatisblockchainquiz/whatisblockchainquiz.component';
import WhatisetherComponent from './whatisether/whatisether.component';
import WhatisetherquizComponent from './whatisetherquiz/whatisetherquiz.component';
import SecurityComponent from './security/security.component';
import SecurityquizComponent from './securityquiz/securityquiz.component';
import YourwalletComponent from './yourwallet/yourwallet.component';
import YourwalletquizComponent from './yourwalletquiz/yourwalletquiz.component';


import './app.scss';

angular.module('coingivrApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,
  uiBootstrap, _Auth, account, admin, 'validation.match', navbar, footer, main, unlockether, constants,
  socket, util, WhatisblockchainComponent, WhatisblockchainquizComponent, WhatisetherComponent,
  WhatisetherquizComponent, SecurityComponent, SecurityquizComponent, YourwalletComponent,
  YourwalletquizComponent
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['coingivrApp'], {
      strictDi: true
    });
  });
