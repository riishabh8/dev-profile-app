import Footer from "../footer/Footer";
import "./profile.css";
import devLogo from "../assets/Icons _ Illustrations/account_circle-24px.svg";
import location1 from "../assets/Icons _ Illustrations/location_on-24px.svg";
import link from "../assets/Icons _ Illustrations/link.svg";
import buisness from "../assets/Icons _ Illustrations/business-24px.svg";
import email from "../assets/Profile_Icons/email.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RepoList from "../repoList/RepoList";

export default function Profile() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/api/developers/${path}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setProfile(res.data);
    });
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/developers/${path}`);
      window.location.replace("/");
    } catch (err) {}
  };

  return (
    <div className="profile">
      <div className="profileHeader">
        <h2>The Developer Profile</h2>
        <Link to="/" className="link">
          <h2>All Developers</h2>
        </Link>
      </div>
      <div className="devInfo">
        <img src={profile.avatar_url} alt="devLogo" className="devLogo" />
        <div className="devDes">
          <h1 className="devName">{profile.name}</h1>
          <p className="devExp">{profile.bio}</p>
          <div className="socialLinks">
            <a href={profile.github_id}>
              <img src={require("../assets/Profile_Icons/github.png")} alt="" />
            </a>
            <a href={profile.codechef_id}>
              <img
                src={require("../assets/Profile_Icons/codechef.png")}
                alt=""
              />
            </a>
            <a href={profile.hackerrank_id}>
              <img
                src={require("../assets/Profile_Icons/hackerrank.png")}
                alt=""
              />
            </a>

            <a href={profile.linkedin_id}>
              <img
                src={require("../assets/Profile_Icons/linkedin.png")}
                alt=""
              />
            </a>
            <a href={profile.medium_id}>
              <img src={require("../assets/Profile_Icons/medium.png")} alt="" />
            </a>
            <a href={profile.twitter_id}>
              <img
                src={require("../assets/Profile_Icons/twitter.png")}
                alt=""
              />
            </a>
            <img src={email} alt="" />
          </div>
          <div className="links">
            <p>
              <img src={location1} alt="location" /> {profile.location}
              <img src={buisness} alt="buisness" /> {profile.company}
              <img src={link} alt="link" />
              {profile.blog}
            </p>
          </div>
          <button type="button" class="btn btn-danger" onClick={handleDelete}>
            Delete!!
          </button>
        </div>
      </div>
      <div className="repoList container">
        <h2 className="repoHeader">Github repositories</h2>
        <RepoList repo={profile.repoUrl} />
      </div>
      <Footer />
    </div>
  );
}
