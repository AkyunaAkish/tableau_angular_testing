(function () {
    'use strict';

    angular.module('tableau-angular-testing')
           .directive('chart', chart)

    function chart() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/angular/directives/chart/chart.template.html',
            controller: 'ChartController'
        };
    }

}());