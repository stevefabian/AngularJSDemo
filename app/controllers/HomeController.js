(function () {

    var app = angular.module('app');

    function HomeController($scope) {

        $scope.message = "Hello from the Home Controller file";

        $scope.title = "This is the Home Controller";

    }

    app.controller('HomeController', HomeController);

}());