angular.module("myApp")

.controller("AssignmentsController", ["$scope", "AssignmentService", "ChildService", function ($scope, AssignmentService, ChildService) {
    
//    $scope.student = [];
    $scope.student = ChildService.student;
//    $scope.assignments = AssignmentService.showAssignments();
    
    
    $scope.createAssignment = function (assignment) {
        console.log(assignment);
        console.log($scope.assignments);
        $scope.student.push(assignment);
    };
    
    console.log($scope.assignments);


    }]);