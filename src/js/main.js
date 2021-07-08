var app = angular.module("hostingerApp", ["ngRoute"]);

app.controller('timerController', ['$scope', '$timeout', function($scope, $timeout) {
    var targerDate = new Date;
    targerDate.setDate(1);
    if(targerDate.getMonth() == 11) {
        targerDate.setMonth = 0;
    } else {
        targerDate.setMonth(targerDate.getMonth() + 1);
    }
    targerDate.setHours(0);
    targerDate.setMinutes(0);
    targerDate.setSeconds(0);
    
    var getDateLeft = function() {
        var currentDate = new Date;
        var timeLeft = new Date(Math.abs(targerDate - currentDate));
        $scope.daysLeft = timeLeft.getDate();
        $scope.hoursLeft = timeLeft.getHours();
        $scope.minutesLeft = timeLeft.getMinutes();
        $scope.secondsLeft = timeLeft.getSeconds();
        if ($scope.daysLeft < 10) {
            $scope.daysLeft = "0" + $scope.daysLeft;
            if ($scope.daysLeft == 0) {
                $scope.daysLeft = "00";
            } 
        }
        if ($scope.hoursLeft < 10) {
            $scope.hoursLeft = "0" + $scope.hoursLeft;
            if ($scope.hoursLeft == 0) {
                $scope.hoursLeft = "00";
            } 
        }
        if ($scope.minutesLeft < 10) {
            $scope.minutesLeft = "0" + $scope.minutesLeft;
            if ($scope.minutesLeft == 0) {
                $scope.minutesLeft = "00";
            } 
        }
        if ($scope.secondsLeft < 10) {
            $scope.secondsLeft = "0" + $scope.secondsLeft;
            if ($scope.secondsLeft == 0) {
                $scope.secondsLeft = "00";
            } 
        }
    }

    getDateLeft();

    $scope.onTimeout = function() {
        getDateLeft();
        tick = $timeout($scope.onTimeout, 100);
    }
    var tick = $timeout($scope.onTimeout, 100);
}]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/src/view/landing.html"
    });
});