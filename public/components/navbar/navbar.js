angular.module("myApp")

.directive("navbar", ["UserService", function(UserService) {
    return{
        templateUrl: "components/navbar/navbar.html",
        controller: function ($scope) {
            $scope.userService = UserService.isAuthenticated();
            console.log($scope.userService);
            
            $scope.parent = UserService.user;
            console.log($scope.parent);
        }
    }
}]);

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
