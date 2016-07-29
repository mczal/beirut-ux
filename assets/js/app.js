var beirutApp = angular.module('beirutApp', [
    'ngRoute',
    'beirutController'
]);

beirutApp.config(['$routeProvider',
    function($routeProvider){
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
