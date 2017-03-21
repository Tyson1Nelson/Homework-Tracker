angular.module("myApp")

.controller("ChildController", ["$scope", "ChildService", function ($scope, ChildService) {
    //    $scope.assignment = {};
    $scope.students = [];
    
//    if ()
    ChildService.getStudents().then(function (response) {
        $scope.students = response;
    });
    $scope.studentInfo = function (info){
        ChildService.showAssignments(info);
    };

}]);
