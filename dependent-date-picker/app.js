var app = angular.module('dependent-date-picker', ['ui.bootstrap', 'ngAnimate', 'ngSanitize']);

app.controller('DateRange', ['$scope',function ($scope) {
    $scope.DataInicial = new Date();
    $scope.DataFinal = null;
}]);

app.controller('DateRangeTriplo', ['$scope',function ($scope) {
    $scope.PrimeiraData = null;
    $scope.SegundaData =  null;
    $scope.TerceiraData = null;
}]);

app.directive('ewDatePicker',function() {

    var htmlTemplate = ' \
        <div class="input-group" ng-init="Init();"> \
            <input type="text" class="form-control" \
                uib-datepicker-popup="dd/MM/yyyy" \
                ng-model="ngModel" \
                is-open="opened" \
                datepicker-options="dateOptions" \
                ng-required="true"  \
                close-text="Close" \
                alt-input-formats="altInputFormats" \
                show-button-bar="false" \
                readonly\
                ng-click="OpenModal()" \
                /> \
            <span class="input-group-btn"> \
                <button type="button" class="btn btn-default" ng-click="OpenModal(this)"><i class="glyphicon glyphicon-calendar"></i></button> \
            </span> \
        </div>';

        return {
            restrict: 'E'
            , scope: {
                ngModel: '='
                , ngModelPredecessor: '=?'
                , dayIncrement: '@?'
                , linkClick: '=?'
            }
            ,template: htmlTemplate
            , controller: ['$scope', function($scope) {
                $scope.altInputFormats = ['M!/d!/yyyy', 'd!/M!/yyyy'];
                $scope.opened = false;
                $scope.dayIncrement = $scope.dayIncrement || 1;

                $scope.dateOptions = {
                    formatYear: 'yy',
                    maxDate: new Date(2020, 5, 22),
                    minDate: new Date(),
                    startingDay: 1
                    , showButtonBar: false
                };
            
                $scope.OpenModal = function(event) {
                    $scope.linkClick = event ? true : false;
                    $scope.opened = true;
                };

                $scope.RecalculateBy = function(_newValue) {
                    var dateValue = new Date(_newValue);
                    if(parseInt($scope.dayIncrement) > 0){
                        dateValue.setDate(dateValue.getDate() + parseInt($scope.dayIncrement));
                    }                    
                    if($scope.dateOptions.minDate != dateValue){
                        $scope.dateOptions.minDate = dateValue;
                    }
                    if(!$scope.ngModel || $scope.ngModel < dateValue) {
                        $scope.ngModel  = dateValue;
                    }
                }

                $scope.Init = function() {
                    if($scope.linkClickFrom && $scope.linkClickTo) throw new Error("link-click-from e link-click-to nao podem ser definidos no mesmo elemento.");
                    if($scope.ngModelPredecessor){
                        $scope.RecalculateBy($scope.ngModelPredecessor);
                    }
                }
                $scope.$watch('ngModel', function(newValue, oldValue){
                    if(newValue && newValue != oldValue) {
                        $scope.linkClick = true;
                    }
                });

                $scope.$watch('ngModelPredecessor', function(newValue, oldValue){
                    if(newValue && newValue != oldValue) {
                        $scope.RecalculateBy(newValue);
                        if($scope.linkClick && $scope.linkClick != false) {
                            $scope.OpenModal();
                        }
                    }
                });

            }]
        }



});