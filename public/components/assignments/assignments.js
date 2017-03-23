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
    }

    $scope.createAssignment = function (assignment) {
        $scope.student.assignments.push(assignment);
        console.log(assignment);
        if (ChildService.student._id === undefined) {
            ChildService.createNewAssignment(assignment);
        } else {
            ChildService.createAssignment($scope.student);
            $scope.student = ChildService.student;
        }
    };
    console.log($scope.student);

    $scope.seeAssignments = function (assignment) {
        console.log(assignment)
        console.log("assignment")
        $scope.showAssignment = assignment;

    }
    $scope.editAssignment = function (assignment,date) {
        console.log(assignment);
        console.log(date);
        var index = $scope.student.assignments.indexOf($scope.editView);
        assignment.dueDate = date.dueDate;
        console.log(assignment);
        getInfo();

    }

    $scope.findAssignment = function (assignment) {
        var index = $scope.student.assignments.indexOf(assignment);
        console.log($scope.student.assignments);
        $scope.editView = $scope.student.assignments[index];
        console.log($scope.editView.dueDate)
    }

    $scope.delete = function (assignment) {
        var index = $scope.student.assignments.indexOf(assignment);
        $scope.student.assignments.splice(index, 1);
        if (ChildService.student._id === undefined) {
            //            ChildService.createNewAssignment(assignment);
        } else {
            ChildService.delete($scope.student);
            ChildService.getSingleStudent($scope.student).then(function (response) {
                console.log(response);
            });
        }
    }

    getInfo();
    $scope.student = ChildService.student;
            }])

.controller('viewAssignmentController', ["$scope", "AssignmentService", function ($scope, AssignmentView) {

    AssignmentView.query(function (response) {
        $scope.showAssignments = response.results;
    });

    $scope.showAssignments = function (objectId) {
        $scope.modalOn = true;
        $scope.modal = AssignmentView.get({
            showAssignments: objectId
        });

        console.log($scope.modal)
    }

    }]);