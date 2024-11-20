const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
});

const CommentModel = mongoose.model("Comment", CommentSchema);

module.exports = CommentModel;
