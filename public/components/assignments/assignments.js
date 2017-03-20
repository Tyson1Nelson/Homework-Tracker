angular.module("myApp")

.controller("AssignmentsController", ["$scope", "$http", "AssignmentService", function ($scope, $http, AssignmentService) {
    //    $scope.assignment = {};
    $scope.assignments = [];
    
    AssignmentService.getAssignments().then(function (response) {
        $scope.assignments = response;
    });

    //    (function getAssignments() {
    //        AssignmentService.getAssignments().then(function (assignments) {
    //            $scope.assignments = assignments;
    //        });
    //    })();
}]);