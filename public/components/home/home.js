angular.module("myApp")

.controller("HomeController", ["$scope", "UserService", function($scope, UserService){
$scope.user = UserService.user;
    console.log($scope.user);
    if($scope.user._id !== undefined){
        console.log("hello");
        $scope.loggedIn = true;
    }
    console.log(UserService.user);
    
}])