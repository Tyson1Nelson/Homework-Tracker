var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var parentSchema = new Schema({
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
    isParent: Boolean
});

module.exports = mongoose.model("Parent", parentSchema);