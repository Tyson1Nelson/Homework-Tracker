angular.module("myApp")

.service("ParentService", ["$http", "$location", "$localStorage", function ($http, $location, $localStorage) {

    this.student = $localStorage.student || {};

    this.showAssignments = function (info) {
        this.student = info;   
        $localStorage.student = info;
//        $location.path("/assignments");
        
    };

    this.getAssignments = function () {
        return $http.get("/api/students").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
//    this.getAssignments = function () {
//        return $http.get("/api/assignments").then(function (response) {
//            return response.data;
//        }, function (response) {
//            alert("Error " + response.status + ": " + response.statusText);
//        });
//    };
    this.createAssignment = function (assignment) {
        return $http.put("/api/students", assignment).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
}]);