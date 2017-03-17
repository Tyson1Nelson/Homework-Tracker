//var app = angular.module("myApp", []);


angular.module("myApp", ["ngRoute"])

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

//    .when("/signup", {
//        templateUrl: "auth/signup/signup.html",
//        controller: "SignUpController"
//    })
//
//    .when("/login", {
//            templateUrl: "auth/login/login.html",
//            controller: "LoginController"
//        })
        .otherwise({
            redirectTo: "/home"
        })

}])

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
