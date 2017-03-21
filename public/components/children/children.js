angular.module("myApp")

.controller("ChildController", ["$scope", "ChildService", function ($scope, ChildService) {
    //    $scope.assignment = {};
    $scope.students = [];
    
//    if ()
    ChildService.getStudents().then(function (response) {
//        console.log(response);
        $scope.students = response;
    });
    $scope.studentInfo = function (info){
        ChildService.studentInfo(info);
    };
    $scope.signup = function (student){
//        console.log(student);
        ChildService.createStudent(student).then(function(response){
            console.log(response);
        })
    }

}]);
