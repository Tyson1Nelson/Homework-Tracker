angular.module("myApp.Auth")

.controller("LogoutController", ["UserService", function (UserService) {
    UserService.logout();
}]);