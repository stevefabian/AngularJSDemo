(function () {

    var app = angular.module('app');

    function MovieService($http) {

        var MovieService = {};

        MovieService.getMovie = function (movie) {
            return $http.get('http://www.omdbapi.com/?t=' + movie);
        };

        return MovieService;

    };

    app.factory('MovieService', MovieService);

}());