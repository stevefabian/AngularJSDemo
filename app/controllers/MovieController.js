(function () {

    var app = angular.module('app');

    function movieController($scope, movieService) {

        $scope.message = "Hello from the Movie Controller";

        $scope.find = function () {
            movieService.getMovie($scope.title, $scope.year)
            .then(function (response) {
                $scope.movie = response.data;
            });
        };

    };

    app.controller('movieController', movieController);

}());