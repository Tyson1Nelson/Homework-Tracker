var express = require("express");
var studentRouter = express.Router();
var Student = require("../models/student");


studentRouter.route("/")
    .get(function (req, res) {
        // console.log(req.student.assignments);
        //    console.log(req.body);
        Student.findById(req.user._id, function (err, student) {
            if (err) res.status(500).send(err);
            res.send(student.assignments);
        });
    })
    .post(function (req, res) {
        // var assignment = new Student(req.student);
        Student.findById(req.user._id, function (err, student) {
            if (err) return res.status(500).send(err);
            student.assignments.push(req.body);
            student.save(function (err, newStudent) {
                if (err) return res.status(500).send(err);
                res.status(201).send(newStudent.assignments);
            });
        });
    });

studentRouter.route("/:assignmentId")
   .get(function (req, res) {
       Student.findById(req.user._id, function (err, student) {
           if (err) return res.status(500).send(err);
           var assignment = student.assignments.id(req.params.assignmentId);
           res.send(assignment);
       });
   })

    .put(function (req, res) {
        Student.findById(req.user._id, function (err, student) {
            if (err) return res.status(500).send(err);
            var assignment = student.assignments.id(req.params.assignmentId);

            // Don't let students change the completed property
            if (req.body.completed) {
                delete req.body.completed;
            }
//                console.log(req.body);
                console.log(assignment.toObject().hasOwnProperty(key));
                console.log(assignment.toObject());
            for (var key in req.body) {
//                console.log(assignment)
                console.log(assignment.toObject().hasOwnProperty(key));
//                if (assignment.toObject().hasOwnProperty(key)) {
                    assignment[key] = req.body[key] || assignment[key];
//                }
            }

            student.save(function(err) {
                if (err) return res.status(500).send(err);
                res.send(assignment);
            });
        });
    });
// });

module.exports = studentRouter;