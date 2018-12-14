const mongoose= require("mongoose");
const Schema= mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    summary: {
        type:String,
        required: true
    },
    scrapeDate: {
        type: Date,
        default: Date.now
    },
    link: {
        type:String,
        required: true
    },
    saved: {
        type: Boolean, 
        default: false
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
      }

}); 
const Article= mongoose.model("Aritcle", articleSchema);

module.exports= Article;