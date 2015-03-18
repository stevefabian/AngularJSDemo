(function () {

    var app = angular.module('app');

    var movieInfo = function() {
        return {
            templateUrl: 'app/templates/movieTemplate.html'
        };
    };

    app.directive('movieInfo', movieInfo);

}());