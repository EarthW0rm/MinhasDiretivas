var app = angular.module('dependent-date-picker', ['ui.bootstrap']);

app.controller('HomeController', ['$scope',function ($scope) {
    $scope.opened = false;

    $scope.DataAtual = (new Date()).toLocaleDateString();

    

    $scope.dateOptions = {
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    $scope.open1 = function() {
        $scope.opened = true;
    };
}]);