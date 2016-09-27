var beirutApp = angular.module('beirutApp', [
    'ngRoute',
    'beirutController'
]);

beirutApp.config(['$routeProvider','$locationProvider','$httpProvider',
    function($routeProvider,$locationProvider,$httpProvider){
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $routeProvider.
      when('/recruitment-center', {
        'templateUrl': 'partials/candidatePositions.html',
        'controller': 'CandidatePositionController'
      }).
      when('/jobs-management', {
        'templateUrl': 'partials/positions.html',
        'controller': 'PositionController'
      }).
      otherwise({
        'redirectTo': '/recruitment-center'
      });
    }]);
