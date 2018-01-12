(function () {
    'use strict';

    angular.module('tableau-angular-testing')
           .controller('ChartController', ChartController)

    ChartController.$inject = [
        '$scope'
    ];

    function ChartController($scope) {
        var chartContainer = document.getElementById('chart-container');
        var chartURL = 'http://public.tableausoftware.com/views/Presents/TreeMap';
        
        var options = {
            width: '600px',
            height: '540px',
            hideToolbar: true,
            hideTabs: true
        };

        new tableauSoftware.Viz(chartContainer, chartURL, options);
    }

}());