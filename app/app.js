(function () {

    var app = angular.module('app', ['ngRoute'])
    .config(['$routeProvider',
          function ($routeProvider) {
              $routeProvider.
                when('/home', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                }).
                when('/people', {
                    templateUrl: 'views/people.html',
                    controller: 'PeopleController'
                }).
                when('/movie', {
                    templateUrl: 'views/movie.html',
                    controller: 'MovieController'
                }).
                otherwise({
                    redirectTo: '/home'
                });
          }]);

}());
