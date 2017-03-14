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
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Assignment", assignmentSchema);
