angular.module("myApp")

.service("AssignmentService", ["$http", "$location", function ($http, $location) {

    this.student = {};

    this.showAssignments = function (info) {
        this.student = info;    
        $location.path("/create-assignment");
        
    };

    this.getAssignments = function () {
        return $http.get("/api/student").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
    this.createAssignment = function (assignment) {
        return $http.put("/api/student", assignment).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
}]);