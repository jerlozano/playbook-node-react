/**
 * Created by andrew.barickman on 5/24/2016.
 */
var PSApps;
PSApps = angular.module('PSApps', [
    'ngRoute',
    'PSAppsControllers'
]);

PSApps.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/partials/main.html',
            controller: 'homeCtrl'
        }).
        when('/playbook',{
            templateUrl: '/partials/editplaybook.html',
            controller: 'pbCtrl'
        }).
        when('/playbook/:pbId',{
            templateUrl: '/partials/editplaybook.html',
            controller: 'pbCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);
