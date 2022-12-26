import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../profileInput/profileInput.css";
import "./addDevPage.css";

export default function AddDevPage() {
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [codechef, setCodechef] = useState("");
  const [hackerrank, setHackerrank] = useState("");
  const [twitter, setTwitter] = useState("");
  const [medium, setMedium] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(github);
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/developers", {
        github,
        linkedin,
        codechef,
        hackerrank,
        twitter,
        medium,
      });
      res.data && window.location.replace("/");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="addDevPage">
      <div className="addDevPageHeading">Add developer profile</div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="profileInput">
            <img
              className="profileInputImg"
              src={require(`../assets/Profile_Icons/github.png`)}
              alt=""
            />
            <p className={`profileInputLabel github`}>github</p>
            <br />
            <input
              type="text"
              className="profileInputTxt"
              onChange={(e) => setGithub(e.target.value)}
              required
            />
          </div>
          <div className="profileInput">
            <img
              className="profileInputImg"
              src={require(`../assets/Profile_Icons/linkedin.png`)}
              alt=""
            />
            <p className={`profileInputLabel`}>linkedin</p>
            <br />
            <input
              type="text"
              className="profileInputTxt"
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
          <div className="profileInput">
            <img
              className="profileInputImg"
              src={require(`../assets/Profile_Icons/codechef.png`)}
              alt=""
            />
            <p className={`profileInputLabel`}>codechef</p>
            <br />
            <input
              type="text"
              className="profileInputTxt"
              onChange={(e) => setCodechef(e.target.value)}
            />
          </div>
          <div className="profileInput">
            <img
              className="profileInputImg"
              src={require(`../assets/Profile_Icons/hackerrank.png`)}
              alt=""
            />
            <p className={`profileInputLabel github`}>hackerrank</p>
            <br />
            <input
              type="text"
              className="profileInputTxt"
              onChange={(e) => setHackerrank(e.target.value)}
            />
          </div>
          <div className="profileInput">
            <img
              className="profileInputImg"
              src={require(`../assets/Profile_Icons/twitter.png`)}
              alt=""
            />
            <p className={`profileInputLabel`}>twitter</p>
            <br />
            <input
              type="text"
              className="profileInputTxt"
              onChange={(e) => setTwitter(e.target.value)}
            />
          </div>
          <div className="profileInput">
            <img
              className="profileInputImg"
              src={require(`../assets/Profile_Icons/medium.png`)}
              alt=""
            />
            <p className={`profileInputLabel `}>medium</p>
            <br />
            <input
              type="text"
              className="profileInputTxt"
              onChange={(e) => setMedium(e.target.value)}
            />
          </div>
        </div>
        <div className="addDevPageFooter">
          <button className="btnDev" type="submit">
            <Link to={"/"} className="link cancelBtn">
              Cancel
            </Link>
          </button>
          <button className="btnDev btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
