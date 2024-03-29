/// <reference path='../../typings/index.d.ts' />
/// <reference path='../typings/index.d.ts' />

import * as angular from 'angular';
import * as material from 'angular-material';
import * as messages from 'angular-messages';
import * as aria from 'angular-aria';
import * as animate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import AppState from './app.state';
import Common from './common';
import Components from './components';
import 'angular-material/angular-material.css';


const root = angular
  .module('IGF-GUI', [
    material,
    messages,
    aria,
    animate,
    uiRouter,
    Common,
    Components
  ])
  .component('igfgApp', AppComponent)
  .config(AppState)
  .run(['$state', ($state) => $state.go('app.KPCREF')])
  .name;


export default root;