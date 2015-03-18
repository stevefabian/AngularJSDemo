(function () {

    var app = angular.module('app');

    function movieService($http) {

        var movieService = {};

        movieService.getMovie = function (movie, yor) {
            var url = 'http://www.omdbapi.com/?t=' + movie;
            if (yor) {
                url += ("&y=" + yor);
            }
            return $http.get(url);
        };

        return movieService;

    };

    app.factory('movieService', movieService);

}());