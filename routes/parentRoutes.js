var express = require("express");
var parentRoute = express.Router();
var Children = require("../models/student");

parentRoute.route("/")
    .get(function (req, res) {
    console.log(req.body);
        Children.find({parent: req.user._id}, function (err, children) {
//        console.log(user);
            
            if (err) res.status(500).send(err);
            res.send(children);
        });
    })

    .post(function (req, res) {
        var child = new Children(req.body);
        child.parent = req.user._id;
        child.save(function (err, newChild) {
            if (err) res.status(500).send(err);
            res.status(201).send(newChild);
        });
    });

parentRoute.route("/:childId")
    .get(function (req, res) {
        Children.findOne({_id: req.params.childId, parent: req.user._id}, function (err, child) {
            if (err) res.status(500).send(err);
            if (!child) res.status(404).send("No child item found.");
            else res.send(child);
        });
    })

    .put(function (req, res) {
        Children.findOneAndUpdate({_id: req.params.childId, parent: req.user._id}, req.body, {new: true}, function (err, child) {
            if (err) res.status(500).send(err);
            res.send(child);
        });
    })

    .delete(function (req, res) {
        Children.findOneAndRemove({_id: req.params.childId, parent: req.user._id}, function (err, child) {
            if (err) res.status(500).send(err);
            res.send(child);
        });
    });

module.exports = parentRoute;