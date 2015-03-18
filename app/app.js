(function () {

    var app = angular.module('app', ['ngRoute'])
    .config(['$routeProvider',
          function ($routeProvider) {
              $routeProvider.
                when('/home', {
                    templateUrl: 'app/views/home.html',
                    controller: 'HomeController'
                }).
                when('/people', {
                    templateUrl: 'app/views/people.html',
                    controller: 'PeopleController'
                }).
                when('/movie', {
                    templateUrl: 'app/views/movie.html',
                    controller: 'movieController'
                }).
                otherwise({
                    redirectTo: '/home'
                });
          }]);

}());
