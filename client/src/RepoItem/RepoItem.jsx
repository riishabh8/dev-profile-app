import React from "react";
import hyperLink from "../assets/Icons _ Illustrations/north_east-24px.svg";
import "./repoitem.css";
export default function RepoItem(props) {
  return (
    <div>
      <div className="repoItem">
        <div className="propVal">
          <a href={props.url}>
            <h2 className="propName">{props.title}</h2>
          </a>
          <img src={hyperLink} alt="" className="hyperLink" />
          <h4 className="propDate">Updated on {props.date}</h4>
        </div>
        <h3 className="propDes">{props.des}</h3>
      </div>
    </div>
  );
}
