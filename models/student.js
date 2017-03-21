var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    tasks: {
        type: String
    },
    notes: {
        type: String
    },
    priority: {
        type: Number,
    },
    completed: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: String
    },
//    user: {
//        type: Schema.Types.ObjectId,
//        ref: "Student",
//        required: true
//    }
});

var studentSchema = new Schema({
    name: {
        type: String,
        required: true,
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
    parent: {
        type: Schema.Types.ObjectId,
        ref: "Parent"
    },
    assignments: [ assignmentSchema ]
});

module.exports = mongoose.model("Student", studentSchema);