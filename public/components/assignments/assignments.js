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
    
    console.log($scope.isParent);
    $scope.createAssignment = function (assignment) {
        $scope.student.assignments.push(assignment);
        if (ChildService.student._id === undefined) {
            ChildService.createNewAssignment(assignment);
        } else {
            ChildService.createAssignment($scope.student);
        }
    };
    console.log($scope.student);
    
    $scope.seeAssignments = function (assignment){
        console.log(assignment)
        console.log("assignment")
        $scope.showAssignment = assignment;
        
    }
    
    $scope.editAssignment = function (assignment){
        console.log(assignment);
        console.log($scope.student.assignments[index])
    }
    $scope.edit = function (assignment, x){
        console.log(assignment);
        console.log(x);
        $scope.changeAssignment = assignment;
        $scope.assignment = assignment;
        var index = $scope.student.assignments.indexOf(assignment);
        console.log($scope.student.assignments[index]._id)
        console.log($scope.changeAssignment);
        $scope.student.assignments[index] = $scope.changeAssignment;
        
        
    }
    $scope.delete = function (assignment){
        var index = $scope.student.assignments.indexOf(assignment);
        
        $scope.student.assignments.splice(index, 1);
        console.log($scope.student.assignments);
    }

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