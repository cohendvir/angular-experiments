/**
 * Created by dvircohen on 1/6/16.
 */
var app = angular.module('angularExperimentsApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('promise', {
            url: '/promise',
            templateUrl: 'promise/_promise.html',
            controller: 'promiseCtrl'
        })
        .state('onetimeBind', {
            url: '/onetimeBind',
            templateUrl: 'onetime_bind/_onetime_bind.html',
            controller: 'oneTimeBindCtrl'
        })
        .state('directivePriority', {
            url: '/directivePriority',
            templateUrl: 'directive_priority/_directive_priority.html'
        });

    $urlRouterProvider.otherwise('/');
});
