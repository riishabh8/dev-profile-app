const mongoose = require("mongoose");

const RepoSchema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String },
  html_url: { type: String },
  description: { type: String },
  updated_at: { type: String },
});

module.exports = mongoose.model("Repo", RepoSchema);
