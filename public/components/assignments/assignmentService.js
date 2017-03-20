angular.module("myApp") 

.service("AssignmentService", ["$http", function ($http) {
    
    this.getAssignments = function () {
        return $http.get("/api/children").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };

    this.saveAssignment = function (assignment) {
        return $http.post("/api/children", assignment).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
}])
