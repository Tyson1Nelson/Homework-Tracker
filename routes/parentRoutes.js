var express = require("express");
var parentRoute = express.Router();
var Student = require("../models/student");

parentRoute.route("/")
    .get(function (req, res) {
    console.log(req.body);
        Student.find({parent: req.user._id}, function (err, student) {
//        console.log(user);
            
            if (err) res.status(500).send(err);
            res.send(student);
        });
    })

    .post(function (req, res) {
        var student = new Student(req.body);
        console.log(req.body);
        student.parent = req.user._id;
        student.save(function (err, newStudent) {
            if (err) res.status(500).send(err);
            res.status(201).send(newStudent);
        });
    });

parentRoute.route("/:studentId")
    .get(function (req, res) {
        Student.findOne({_id: req.params.studentId, parent: req.user._id}, function (err, student) {
            if (err) res.status(500).send(err);
            if (!student) res.status(404).send("No student item found.");
            else res.send(student);
        });
    })

    .put(function (req, res) {
        Student.findOneAndUpdate({_id: req.params.studentId, parent: req.user._id}, req.body, {new: true}, function (err, student) {
            if (err) res.status(500).send(err);
            res.send(student);
        });
    })

    .delete(function (req, res) {
        Student.findOneAndRemove({_id: req.params.studentId, parent: req.user._id}, function (err, student) {
            if (err) res.status(500).send(err);
            res.send(student);
        });
    });

module.exports = parentRoute;