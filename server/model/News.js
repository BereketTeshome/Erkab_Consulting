const mongoose = require("mongoose");

const NewSchema = new mongoose.Schema(
  {
    newsImage: {
      type: String,
      required: true,
    },
    newsTitle: {
      type: String,
      required: true,
    },
    newsBody: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", NewSchema);
