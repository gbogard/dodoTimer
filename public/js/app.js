var dependencies = [
    'ui.router'
];

var app = angular.module('app', dependencies);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('start', {
        url: '/',
        templateUrl: 'views/start.html',
        controller: 'startCtrl'
    })
    .state('create', {
        url: '/',
        templateUrl: 'views/create.html',
        controller: 'createCtrl'
    });
});