var express = require("express");
var studentRouter = express.Router();
var Student = require("../models/student");


studentRouter.route("/")
    .get(function (req, res) {
        // console.log(req.user.assignments);
        //    console.log(req.body);
        Student.findById(req.user._id, function (err, student) {
            if (err) res.status(500).send(err);
            res.send(student.assignments);
        });
    })
    .post(function (req, res) {
        // var assignment = new Student(req.user);
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
       // .get(function (req, res) {
       //     Student.findById(req.params.studentId, function (err, student) {
       //         if (err) res.status(500).send(err);
       //         if (!student) res.status(404).send("No assignment found.");
       //         else res.send(student);
       //     });
       // })

        .put(function (req, res) {
            Student.findByIdAndUpdate(req.body, {
                new: true
            }, function (err, student) {
                if (err) res.status(500).send(err);
                res.send(student.assignments);
            });
});

module.exports = studentRouter;