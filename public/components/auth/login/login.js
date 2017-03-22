angular.module("myApp.Auth")

.controller("LoginController", ["$scope", "$location", "UserService", "ChildService", function ($scope, $location, UserService, ChildService) {
    $scope.parentLogin = function (user) {
        console.log(ChildService.student);
        UserService.parentLogin(user).then(function (data) {
            $location.path("/children");
        }, function (data) {
            alert(data.message);
        });
    };

    $scope.studentLogin = function (user) {
        UserService.studentLogin(user).then(function (data) {
            console.log(data)
            $location.path("/assignments");
        }, function (data) {
            alert(data.message);
        });
    };
}])