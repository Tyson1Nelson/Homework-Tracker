angular.module("myApp")

.service("ChildService", ["$http", "$location", "$localStorage", function ($http, $location, $localStorage) {

    this.student = $localStorage.student || {};

    this.studentInfo = function (info) {
        this.student = info;   
        $localStorage.student = info;
        console.log(info);
        $location.path("/assignments");
        
    };

    this.getStudents = function () {
        return $http.get("/api/students").then(function (response) {
            console.log(response.data);
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
    this.createStudent = function (student) {
        return $http.post("/api/students", student).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
//    this.createAssignment = function (assignment) {
//        return $http.put("/api/children", assignment).then(function (response) {
//            return response.data;
//        }, function (response) {
//            alert("Error " + response.status + ": " + response.statusText);
//        });
//    };
}]);