(function () {

    var app = angular.module('app');

    function PeopleService() {

        var PeopleService = {};

        var people = [
             {
                 id: 1,
                 firstname: 'Steve',
                 lastname: 'Fabian',
                 amount: 21123.45
             },
             {
                 id: 2,
                 firstname: 'Chuck',
                 lastname: 'Lafferty',
                 amount: 32234.56
             }
        ];

        PeopleService.getPeople = function() {
            return people;
        };

        return PeopleService;

    };

    app.factory('PeopleService', PeopleService);

}());