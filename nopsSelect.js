(function () {
    angular.module('nopsSelect',[
            'offClick'
        ])
        .directive('nopsSelect', function () {
            return {
                restrict: 'E',
                templateUrl: 'nopsSelect.html',
                require: 'ngModel',
                link: function (scope, elem, attrs,ngModelCtrl) {
                    if(!ngModelCtrl) return;
                    if(scope.required) {
                        ngModelCtrl.$setValidity('required',false);
                        var modelVal = function () {
                            return ngModelCtrl.$viewValue;
                        };
                        scope.$watch(modelVal, function (newValue, oldValue) {
                            if(newValue === oldValue) return;
                            ngModelCtrl.$setValidity('required','' != newValue);
                        });
                    }
                    scope.isHidden = true;
                    scope.selectedName = '';

                    scope.selectDt = function (dt) {
                        scope.selectedName = dt.name;

                        ngModelCtrl.$setViewValue(dt.id);
                        scope.isHidden = true;
                    };
                    scope.checkKeyPress = function ($event) {
                        var keyCode = $event.which || $event.keyCode;
                        if(keyCode == 32)
                            scope.isHidden = false;
                    };
                    scope.selectMore = function () {
                        scope.executeMore();
                        scope.isHidden = true;
                    };
                },
                scope: {
                    data: '=dtList',
                    executeMore: '&more',
                    required: '=isRequired'
                }
            };
        });
})();