(function () {

    var app = angular.module('app');

    function PeopleController($scope, PeopleService) {

        $scope.message = "Hello from the People Controller";

        $scope.people = PeopleService.getPeople();

    };

    app.controller('PeopleController', PeopleController);

}());