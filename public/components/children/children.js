angular.module("myApp")

.controller("ChildController", ["$scope", "ChildService", function ($scope, ChildService) {
    //    $scope.assignment = {};
    $scope.students = [];
//    $scope.signup = false;

    ChildService.getStudents().then(function (response) {
//        console.log(response);
        $scope.students = response;
    });
    $scope.studentInfo = function (info){
        ChildService.studentInfo(info);
    };
    $scope.signup = function (student){
        ChildService.createStudent(student).then(function(response){
            $scope.students.push(response);
        })
    }

}]);
