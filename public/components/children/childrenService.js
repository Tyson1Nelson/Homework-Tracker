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
    this.getAssignments = function () {
        return $http.get("/api/assignments").then(function (response) {
            var student = $localStorage.user;
            student.assignments = response.data;
            return student;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
    console.log(this.user);
    
    this.createStudent = function (student) {
        return $http.post("/api/students", student).then(function (response) {
            return response.data;
        }, function (response) {
            alert("Error " + response.status + ": " + response.statusText);
        });
    };
    this.createAssignment = function (student) {
        console.log(student.assignments);
        return $http.put("/api/students/" + student._id, {
            assignments: student.assignments
        }).then(function (response) {
            return response.data;
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
    
    this.delete = function (student) {
        console.log(student.assignments);
        return $http.put("/api/students/" + student._id, {
            assignments: student.assignments
        }).then(function (response) {
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