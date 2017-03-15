angular.module("myApp") 

.service("AssignmentService", ["$http", function ($http) {
    this.getAssignments = function () {
        return $http.get("/api/student").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };

    this.saveAssignment = function (assignment) {
        return $http.post("/api/student", assignment).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
}])

.controller("AssignmentsController", ["$scope", "$http", "AssignmentService", function ($scope, $http, AssignmentService) {
    $scope.assignment = {};
    $scope.assignments = [];

//    (function getAssignments() {
//        AssignmentService.getAssignments().then(function (assignments) {
//            $scope.assignments = assignments;
//        });
//    })();
}]);
    
