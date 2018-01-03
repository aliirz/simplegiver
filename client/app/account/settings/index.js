'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('coingivrApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
