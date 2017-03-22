angular.module("myApp.Auth")

.controller("LogoutController", ["UserService", "ChildService", function (UserService, ChildService) {
    ChildService.reset();
    UserService.logout();
    
}]);