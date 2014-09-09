(function () {

    var app = angular.module('app');

    function HomeController($scope) {

        $scope.message = "Hello from the Home Controller file";

    };

    app.controller('HomeController', HomeController);

}());