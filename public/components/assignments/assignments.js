angular.module("myApp")

.controller("AssignmentsController", ["$scope", "ChildService", function ($scope, ChildService) {

    $scope.student = [];

    var date = new Date();
    $scope.today = date.getFullYear() + '-' + 0 + (date.getMonth() + 1) + '-' + date.getDate();
    $scope.date = new Date();

    console.log(ChildService.student._id === undefined);

    function getInfo() {
        if (ChildService.student._id === undefined) {
            $scope.isParent = false;
            $scope.student = ChildService.user;
            ChildService.getAssignments().then(function (response) {
                $scope.student = response;
            });
        } else {
            $scope.isParent = true;
            $scope.student = ChildService.student;
        }
    };

    $scope.createAssignment = function (assignment) {
        $scope.student.assignments.push(assignment);
        console.log(assignment);
        if (ChildService.student._id === undefined) {
            ChildService.createNewAssignment(assignment);
        } else {
            toDb();
            $scope.student = ChildService.student;
        }
    };

    $scope.seeAssignments = function (assignment) {
        $scope.showAssignment = assignment;
    }

    $scope.editAssignment = function (assignment) {
        var index = $scope.student.assignments.indexOf($scope.editView);
        for (key in assignment) {
            if (assignment[key] !== $scope.editView[key]) {
                $scope.editView[key] = assignment[key];
            };
        }
        $scope.new = {};
        toDb();
    }

    $scope.findAssignment = function (assignment) {
        var index = $scope.student.assignments.indexOf(assignment);
        $scope.editView = $scope.student.assignments[index];
    }

    $scope.delete = function (assignment) {
        var index = $scope.student.assignments.indexOf(assignment);
        $scope.student.assignments.splice(index, 1);
        toDb();
        ChildService.getSingleStudent($scope.student);
    }
    function toDb (){
        ChildService.editAssignmentInfo($scope.student);
    }

    getInfo();
    $scope.student = ChildService.student;
}]);