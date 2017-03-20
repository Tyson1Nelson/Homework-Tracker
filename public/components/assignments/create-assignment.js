angular.module("createAssignmentApp")

    .service("AssignmentService", ["$http", function ($http) {

        this.createAssignment = function (assignment) {
            return $http.post("/api/children", assignment).then(function (response) {
                return response.data;
            }, function (response) {
                alert("Error " + response.status + ": " + response.statusText);
            });
        };
    }])
