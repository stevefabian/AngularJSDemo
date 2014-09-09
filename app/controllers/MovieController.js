(function () {

    var app = angular.module('app');

    function MovieController($scope, MovieService) {

        $scope.message = "Hello from the Movie Controller";

        $scope.find = function () {
            MovieService.getMovie($scope.title)
            .then(function (response) {
                $scope.movie = response.data;
            });
        };

    };

    app.controller('MovieController', MovieController);

}());