angular.module("myApp")

.service("ChildService", ["$http", "$location", "$localStorage", function ($http, $location, $localStorage) {

    this.student = $localStorage.student || {};
    this.user = $localStorage.user;
//    console.log(this.user);
    
    this.studentInfo = function (info) {
        this.getSingleStudent(info)
        this.student = info;
        $localStorage.student = info;
        //        console.log(info);
        $location.path("/assignments");

    };
    
//////////////////logged in as parent//////////////////
    
    
    this.getStudents = function () {
        return $http.get("/api/students").then(function (response) {
            console.log(response.data);
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
    
    this.getSingleStudent = function (info) {
        return $http.get("/api/students/" + info._id).then(function (response) {
            console.log(response.data);
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
    
    this.createStudent = function (student) {
        return $http.post("/api/students", student).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
    this.editStudent = function(student, newInfo){
        return $http.put("/api/students/" + student._id, newInfo).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
    
    this.editAssignmentInfo = function(student){
        console.log(student);
        return $http.put("/api/students/" + student._id, {
            assignments: student.assignments
        }).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
    
    /////////////////Logged in as Student/////////////////
    
    this.getAssignments = function () {
        return $http.get("/api/assignments").then(function (response) {
            var student = $localStorage.user;
            student.assignments = response.data;
            return student;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
    
    this.createNewAssignment = function (assignment) {
        console.log(assignment);
        return $http.post("/api/assignments", assignment).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
    
    this.edit = function (assignment) {
//          console.log(student);
          console.log(assignment);
        return $http.put("/api/assignments/" + assignment._id, assignment).then(function (response) {
            console.log(response.data);
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
    
    this.reset = function () {
        this.student = {};
        console.log("reset");
    };
}]);