const router = require("express").Router();
const Profile = require("../models/profiles");
const axios = require("axios");
const { type } = require("express/lib/response");

//Add Profile
router.post("/", async (req, res) => {
  const username = String(req.body.github),
    linkedin_id = `http://linkedin.com/in/${req.body.linkedin}`,
    codechef_id = `http://codechef.com/${req.body.codechef}`,
    hackerrank_id = `http://hackerrank.com/${req.body.hackerrank}`,
    twitter_id = `http://twitter.com/${req.body.twitter}`,
    medium_id = `http://medium.com/${req.body.medium}`;
  // username = "rishverse"
  // console.log("In post route");
  // console.log(req.body)

  var config = {
    method: "get",
    url: `https://api.github.com/users/${username}`,
    headers: {},
  };
  axios(config).then(function (response) {
    val = JSON.parse(JSON.stringify(response.data));
    const newProfile = new Profile({
      _id: val.login,
      avatar_url: val.avatar_url,
      name: val.name,
      company: val.company,
      blog: val.blog,
      location: val.location,
      email: val.email,
      bio: val.bio,
      github_id: val.html_url,
      linkedin_id: linkedin_id,
      codechef_id: codechef_id,
      hackerrank_id: hackerrank_id,
      twitter_id: twitter_id,
      medium_id: medium_id,
      repoUrl: val.repos_url,
    });

    try {
      newProfile.save();
      const response = { id: newProfile._id };
      res.status(201).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

//DELETE Profile
router.delete("/:id", async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    try {
      await profile.delete();
      res.status(204).json("profile has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Profile
router.get("/:id", async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Profiles
router.get("/", async (req, res) => {
  const data = [];
  try {
    let posts;
    posts = await Profile.find();
    for (let i = 0; i < posts.length; i++) {
      data.push({ id: posts[i]._id, avatar_url: posts[i].avatar_url });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
