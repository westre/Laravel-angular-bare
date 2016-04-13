angular.module("app").config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'app/components/home/homeView.html',
        controller: 'homeController',
        controllerAs: 'homeCtrl'
    }).
    otherwise({
        redirectTo: '/error'
    });

    $locationProvider.html5Mode(true);
});
