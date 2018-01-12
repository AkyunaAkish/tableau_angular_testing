(function () {
    'use strict';

    angular.module('tableau-angular-testing')
           .controller('ChartController', ChartController)

    ChartController.$inject = [
        '$scope'
    ];

    function ChartController($scope) {
        $scope.testing = 'Yo Dawg!'
    }

}());