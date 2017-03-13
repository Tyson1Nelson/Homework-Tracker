app.use("/parent", checkParent, require("./routes/parentRoutes"));

function checkParent (req, res, next) {
    if (req.user.userType === "parent") {
        return next();
    }
    return res.status(403).send
}

app.use("/student", require("./routes/studentRoutes"));

