(function () {

    var app = angular.module('app');

    function PeopleService() {

        var PeopleService = {};

        var people = [
             {
                 id: 1,
                 firstname: 'Steve',
                 lastname: 'Fabian'
             },
             {
                 id: 2,
                 firstname: 'Cosmo',
                 lastname: 'Fabian'
             }
        ];

        PeopleService.getPeople = function() {
            return people;
        };

        return PeopleService;

    };

    app.factory('PeopleService', PeopleService);

}());