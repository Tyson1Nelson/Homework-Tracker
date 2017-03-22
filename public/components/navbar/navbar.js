angular.module("myApp")

.directive("navbar", ["UserService", function(UserService) {
    return{
        templateUrl: "components/navbar/navbar.html",
        controller: function ($scope) {
            $scope.userService = UserService;
//            console.log($scope.userService.user.parent.length);
            
//            $scope.user = UserService.user;
//            console.log($scope.user);
        }
    }
}]);

//$(".nav a").on("click", function(){
//   $(".nav").find(".active").removeClass("active");
//   $(this).parent().addClass("active");
//});
