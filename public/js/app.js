var dependencies = [
    'ui.router'
];

var app = angular.module('app', dependencies);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('start', {
        url: '/',
        templateUrl: 'views/start.html',
        controller: 'startCtrl'
    })
    .state('create', {
        templateUrl: 'views/create.html',
        controller: 'createCtrl'
    })
    .state('afterCreate', {
        templateUrl: 'views/afterCreate.html',
        controller: 'afterCreateCtrl',
        params: {
            event: null
        }
    })
    .state('show', {
        templateUrl: 'views/show.html',
        controller: 'showCtrl',
        url: '/:slug',
        params: {
            event: null
        },
        resolve: {
            event: function(Event, $stateParams, $q){
                if($stateParams.event){
                    return $stateParams.event;
                }
                else {
                    var deferred = $q.defer();
                    Event.get($stateParams.slug).then(function(res){
                        deferred.resolve(res.data);
                    }, function(){
                        deferred.reject();
                    });
                    return deferred.promise;
                }
            }
        }
    });
});

app.filter('capitalize', function() {
    return function(input, scope) {
        if (input!=null)
            input = input.toLowerCase();
        return input.substring(0,1).toUpperCase()+input.substring(1);
    }
});