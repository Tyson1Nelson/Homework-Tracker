angular.module("myApp")

.controller("HomeController", ["$scope", "UserService", function($scope, UserService){
$scope.user = UserService.user;
    console.log($scope.user === null);
    if($scope.user !== null){
        console.log("hello");
        $scope.loggedIn = true;
    }
    console.log(UserService.user);
    
}])