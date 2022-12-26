const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  _id: String,
  avatar_url: { type: String },
  name: { type: String },
  company: { type: String },
  blog: { type: String },
  location: { type: String },
  email: { type: String },
  bio: { type: String },
  github_id: { type: String },
  linkedin_id: { type: String },
  codechef_id: { type: String },
  hackerrank_id: { type: String },
  twitter_id: { type: String },
  medium_id: { type: String },
  repoUrl: { type: String },
});

module.exports = mongoose.model("Profile", ProfileSchema);
