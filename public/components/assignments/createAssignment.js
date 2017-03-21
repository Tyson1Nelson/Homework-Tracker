// controllers to be added to assignments.js

angular.module("myApp")

.controller("CreateAssignmentsController", ["$scope", "AssignmentService", "ChildService", function ($scope, AssignmentService, ChildService) {
    $scope.student = ChildService.student;
    $scope.createAssignment = function (assignment) {
        console.log(assignment);
    };
    

    $scope.assignments = AssignmentService.showAssignments();
    console.log($scope.assignments);


    }]);