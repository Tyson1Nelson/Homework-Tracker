var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var uSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    Parent: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("User", userSchema);