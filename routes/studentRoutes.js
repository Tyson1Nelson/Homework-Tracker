var express = require("express");
var studentRouter = express.Router();
var Student = require("../models/student");
//var Student = require()


studentRouter.route("/")
    .get(function (req, res) {
    console.log(req.user.assignments);
        Student.findById(req.user._id, function (err, student) {
            if (err) res.status(500).send(err);
            res.send(student);
        });
    })
    .post(function (req, res) {
//        console.log(req.body.assignments)
//        console.log(req.user.assignments);
        console.log(req.user);
        var student = new Student(req.user.assignments);
//        student.user = req.user._id;
        student.save(function (err, newStudent) {
            if (err) res.status(500).send(err);
            res.status(201).send(newStudent);
        });
    });

studentRouter.route("/:assignmentId")
    .get(function (req, res) {
        Student.findOne({user: req.user._id, _id: req.params.assignmentId}, function (err, assignment) {
            if (err) res.status(500).send(err);
            if (!assignment) res.status(404).send("No assignment item found.");
            else res.send(assignment);
        });
    })

    .put(function (req, res) {
        Student.findOneAndUpdate({user: req.user._id, _id: req.params.assignmentId}, req.body, {new: true}, function (err, assignment) {
            if (err) res.status(500).send(err);
            res.send(assignment);
        });
    });

module.exports = studentRouter;