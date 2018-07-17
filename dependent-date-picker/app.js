var app = angular.module('dependent-date-picker', ['ui.bootstrap', 'ngAnimate', 'ngSanitize']);

app.controller('HomeController', ['$scope',function ($scope) {
    $scope.opened = false;

    $scope.DataAtual =  new Date(2018, 7, 20);

}]);

app.directive('ewDatePicker',function() {

    var htmlTemplate = ' \
        <div class="input-group col-md-2"> \
            <input type="text" class="form-control" \
                uib-datepicker-popup="dd/MM/yyyy" \
                ng-model="ngModel" \
                is-open="opened" \
                datepicker-options="dateOptions" \
                ng-required="true"  \
                close-text="Close" \
                alt-input-formats="altInputFormats" \
                readonly\
                /> \
            <span class="input-group-btn"> \
                <button type="button" class="btn btn-default" ng-click="open1()"><i class="glyphicon glyphicon-calendar"></i></button> \
            </span> \
        </div>';

        return {
            restrict: 'E'
            , scope: {
                ngModel: '='
            }
            ,template: htmlTemplate
            , controller: ['$scope', function($scope) {

                $scope.altInputFormats = ['M!/d!/yyyy', 'd!/M!/yyyy'];
                $scope.opened = false;

                $scope.dateOptions = {
                    formatYear: 'yy',
                    maxDate: new Date(2020, 5, 22),
                    minDate: new Date(),
                    startingDay: 1
                };
            
                $scope.open1 = function() {
                    $scope.opened = true;

                };

            }]
        }



});