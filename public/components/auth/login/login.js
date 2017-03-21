angular.module("myApp.Auth")

.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {
    $scope.parentLogin = function (user) {
        UserService.parentLogin(user).then(function (data) {
            $location.path("/children");
        }, function (data) {
            alert(data.message);
        });
    };

    $scope.studentLogin = function (user) {
        UserService.studentLogin(user).then(function (data) {

            $location.path("/assignments");
        }, function (data) {
            alert(data.message);
        });
    };
}])