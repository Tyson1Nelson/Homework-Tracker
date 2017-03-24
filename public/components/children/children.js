angular.module("myApp")

.controller("ChildController", ["$scope", "ChildService", function ($scope, ChildService) {
    $scope.students = [];
    $scope.passwordMessage = false;

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
        $scope.name = info.name;
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
                for(key in student){
                    if(student[key] !== info[key]){
                        $scope.students[index][key] = student[key]
                    };
                };
            });
        };
        $scope.clearInfo();
    }
    
    $scope.clearInfo = function () {
//        console.log($scope.student);
        delete $scope.student;
        $scope.passwordRepeat = undefined;
    }
    ChildService.getStudents().then(function (response) {
        $scope.students = response;
    });

}]);