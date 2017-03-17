var express = require("express");
var authRoutes = express.Router();
var User = require("../models/student");
var jwt = require("jsonwebtoken");
var config = require("../config");


authRoutes.post("/login/student", function (req, res) {
    User.findOne({email: req.body.email}, function (err, user) {
        if (err) return res.status(500).send(err);
        if (!user || user.password !== req.body.password) {
            return res.status(401).send({success: false, message: "Invalid email or password"});
        }
        var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"});
        console.log(user.toObject());
        res.send({token: token, success: true, user: user.toObject(), message: "Here's your token!"});
    });
});




//authRoutes.post("/login", function (req, res) {
//    User.findOne({email: req.body.email}, function (err, user) {
//        if (err) return res.status(500).send(err);
//        if (!user) {
//            return res.status(401).send({success: false, message: "Invalid email or password"});
//        }

//        user.checkPassword(req.body.password, function (err, isMatch) {
//            if (err) return res.status(403).send(err);
//            if (!isMatch) return res.status(403).send({success: false, message: "Invalid email or password"});
//            var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"});
//            res.send({token: token, success: true, user: user.withoutPassword(), message: "Here's your token!"});
//        });
//    });
//});

module.exports = authRoutes;