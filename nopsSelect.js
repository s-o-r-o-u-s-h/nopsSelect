(function () {
    angular.module('nopsSelect',[
            'offClick'
        ])
        .directive('nopsSelect', function () {
            return {
                restrict: 'E',
                templateUrl: 'nopsSelect.html',
                scope: {
                    data: '=dtList',
                    selectedValue: '=value',
                    executeMore: '&more'
                },
                controller: ['$scope', function ($scope) {
                    $scope.isHidden = true;
                    $scope.selectedName = '';

                    $scope.selectDt = function (dt) {
                        $scope.selectedName = dt.name;
                        $scope.selectedValue = dt.id;
                        $scope.isHidden = true;
                    };
                    $scope.checkKeyPress = function ($event) {
                        var keyCode = $event.which || $event.keyCode;
                        if(keyCode == 32)
                            $scope.isHidden = false;
                    };
                    $scope.selectMore = function () {
                        $scope.executeMore();
                        $scope.isHidden = true;
                    };
                }]
            };
        });
})();