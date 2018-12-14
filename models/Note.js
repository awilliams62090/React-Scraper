const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    noteAuthor: String,
    noteText: String,
    noteDate: {
        type: Date,
        default: Date.now
    },
    headlineId: {
        ref: "Article",
        type: Schema.Types.ObjectId
    }
}); 
const Note= mongoose.model("Note", noteSchema);

module.exports= Note;