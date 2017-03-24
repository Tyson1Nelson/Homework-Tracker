angular.module("myApp")

.controller("ChildController", ["$scope", "ChildService", function ($scope, ChildService) {
    //    $scope.assignment = {};
    $scope.students = [];
    //    $scope.signup = false;
    $scope.passwordMessage = false;

    ChildService.getStudents().then(function (response) {
        //        console.log(response);
        $scope.students = response;
    });
    $scope.studentInfo = function (info) {
        ChildService.studentInfo(info);
    };
    $scope.signup = function (student) {
        ChildService.createStudent(student).then(function (response) {
            $scope.students.push(response);
        })
    }
    var info = {};
    $scope.find = function (student, i) {
        console.log(i);
        info = student;
    }
    $scope.deleteStudent = function () {
        var index = $scope.students.indexOf(info);
        $scope.students.splice(index, 1);
    }

    $scope.editStudent = function (student) {
        var index = $scope.students.indexOf(info);
        console.log(student);
        if (student !== undefined) {
            ChildService.editStudent(info, student).then(function (resonse) {
                $scope.students[index] = student;
            });
        };
        $scope.clearInfo();

    }
    $scope.clearInfo = function () {
        delete $scope.student;
        $scope.passwordRepeat = undefined;
    }

}]);