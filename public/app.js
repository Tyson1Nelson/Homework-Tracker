angular.module("myApp", ["ngRoute", "myApp.Auth"])

.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "HomeController"
        })
        .when("/assignments", {
            templateUrl: "components/assignments/assignments.html",
            controller: "AssignmentsController"
        })
        .otherwise({
            redirectTo: "/home"
        })

}])

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
