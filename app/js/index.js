import 'babel-polyfill';
import angular from 'angular';
import angularUiRouter from 'angular-ui-router';

import mainTemplate from '../partials/main/index.html';
import startTemplate from '../partials/start/index.html';

import GameService from '../js/games/index';

import MainController from '../js/main/index';
import StartController from '../js/start/index';

angular.module('app', [angularUiRouter])
    .controller('MainController', MainController)
    .controller('StartController', StartController)
    .service('GameService', GameService)

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: "/",
                template: mainTemplate,
                controller: 'MainController as main'
            })
            .state('start', {
                url: '/start',
                template: startTemplate,
                controller: 'StartController as start'
            });
    });