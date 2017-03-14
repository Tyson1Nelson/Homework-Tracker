var express = require("express");
var studentRouter = express.Router();
var Assignments = require("../models/assignment");


studentRouter.route("/")
    .get(function (req, res) {
    console.log("In student routes");
        Assignments.find({user: req.user._id}, function (err, assignment) {
            if (err) res.status(500).send(err);
            res.send(assignment);
        });
    })
    .post(function (req, res) {
        var assignment = new Assignments(req.body);
        assignment.user = req.user._id;
        assignment.save(function (err, newAssignment) {
            if (err) res.status(500).send(err);
            res.status(201).send(newAssignment);
        });
    });

studentRouter.route("/:assignmentId")
    .get(function (req, res) {
        Assignments.findOne({user: req.user._id, _id: req.params.assignmentId}, function (err, assignment) {
            if (err) res.status(500).send(err);
            if (!assignment) res.status(404).send("No assignment item found.");
            else res.send(assignment);
        });
    })

    .put(function (req, res) {
        Assignments.findOneAndUpdate({user: req.user._id, _id: req.params.assignmentId}, req.body, {new: true}, function (err, assignment) {
            if (err) res.status(500).send(err);
            res.send(assignment);
        });
    });

module.exports = studentRouter;