import { Link } from "react-router-dom";
import "./addDevButton.css";

export default function AddDevButton() {
  return (
    <div className="addDevButton">
      <h3 className="txt">Could not find what you were looking for ?</h3>
      <button type="submit" className="btn">
        <Link to={"/add"} className="link">Add developer info</Link>
      </button>
    </div>
  );
}
