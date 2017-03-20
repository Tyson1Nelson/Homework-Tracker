angular.module("myApp") 

.service("AssignmentService", ["$http", function ($http) {
    
    this.getAssignments = function () {
        return $http.get("/api/children").then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
}]);
