var beirutApp = angular.module('beirutApp', [
    'ngRoute',
    'naif.base64',
    'sidekeekController'
]);

beirutApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
      when('/home', {
        'templateUrl': 'partials/home.html',
        'controller': 'Imgbase64Controller'
      }).
      otherwise({
        'redirectTo': '/home'
      });
    }]);
