(function () {

    var app = angular.module('app');

    function PeopleController($scope, PeopleService) {

        $scope.message = "Hello from the People Controller";
        $scope.sortFld = "ID";

        $scope.people = PeopleService.getPeople();

        $scope.sort = function(fld) {
            $scope.sortFld = fld;
        };

    };

    app.controller('PeopleController', PeopleController);

}());