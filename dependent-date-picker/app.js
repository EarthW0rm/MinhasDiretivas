var app = angular.module('dependent-date-picker', ['ui.bootstrap', 'ngAnimate', 'ngSanitize']);

app.controller('HomeController', ['$scope',function ($scope) {
    $scope.opened = false;

    $scope.DataInicial = null;
    $scope.DataFinal = null;

}]);

app.directive('ewDatePicker',function() {

    var htmlTemplate = ' \
        <div class="input-group"> \
            <input type="text" class="form-control" \
                uib-datepicker-popup="dd/MM/yyyy" \
                ng-model="ngModel" \
                is-open="opened" \
                datepicker-options="dateOptions" \
                ng-required="true"  \
                close-text="Close" \
                alt-input-formats="altInputFormats" \
                readonly\
                ng-click="OpenModal()" \
                /> \
            <span class="input-group-btn"> \
                <button type="button" class="btn btn-default" ng-click="OpenModal()"><i class="glyphicon glyphicon-calendar"></i></button> \
            </span> \
        </div>';

        return {
            restrict: 'E'
            , scope: {
                ngModel: '='
                , ngModelPredecessor: '=?'
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
            
                $scope.OpenModal = function() {
                    $scope.opened = true;
                };

                $scope.$watch('ngModelPredecessor', function(newValue, oldValue){
                    if(newValue && newValue != oldValue){
                        $scope.dateOptions.minDate=newValue;
                        if($scope.ngModel && $scope.ngModel < newValue){
                            $scope.ngModel = newValue;
                        }
                    }
                });

            }]
        }



});