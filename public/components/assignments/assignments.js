angular.module("myApp")

.controller("AssignmentsController", ["$scope", "ChildService", function ($scope, ChildService) {
    $scope.student = [];

    var date = new Date();
    $scope.today = date.getFullYear() + '-' + 0 + (date.getMonth() + 1) + '-' + date.getDate();
    $scope.date = new Date();

    console.log(ChildService.student._id === undefined);

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

    $scope.createAssignment = function (assignment) {
        $scope.student.assignments.push(assignment);
        if (ChildService.student._id === undefined) {
            ChildService.createNewAssignment(assignment);
        } else {
            ChildService.createAssignment($scope.student);
        }
    };
    console.log($scope.student);


    }])

.controller('viewAssignmentController', ["$scope", "AssignmentService", function ($scope, AssignmentView){

        AssignmentView.query(function(response){
            $scope.showAssignments = response.results;
        });

           $scope.showAssignments = function(objectId){
            $scope.modalOn = true;
             $scope.modal = AssignmentView.get({ showAssignments: objectId });

             console.log($scope.modal)
        }

    }]);