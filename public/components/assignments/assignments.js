angular.module("myApp")

.controller("AssignmentsController", ["$scope", "AssignmentService", function ($scope, AssignmentService) {
    //    $scope.assignment = {};
    $scope.students = [];
    
    AssignmentService.getAssignments().then(function (response) {
        $scope.students = response;
    });
    $scope.studentInfo = function (info){
        AssignmentService.showAssignments(info);
    };

}]);