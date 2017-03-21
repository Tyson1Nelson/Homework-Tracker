// controllers to be added to assignments.js

angular.module("myApp")

.controller("CreateAssignmentsController", ["$scope", "AssignmentService", function ($scope, AssignmentService) {
    $scope.student = AssignmentService.student;
    $scope.createAssignment = function (assignment) {
        console.log(assignment);
    };
    

    $scope.assignments = AssignmentService.showAssignments();
    console.log($scope.assignments);


    }]);