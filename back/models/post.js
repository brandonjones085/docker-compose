const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imagePath: { type: String, required: true }, 
  rates: {type:Number, default: 0}
});

module.exports = mongoose.model("Post", postSchema);
