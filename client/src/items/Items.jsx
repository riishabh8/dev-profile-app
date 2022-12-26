import { useState } from "react";
import { Link } from "react-router-dom";
import Item from "../item/Item";
import "./items.css";

export default function Items({ profiles }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="wrap">
        <div className="input-group">
          <div className="form-outline">
            <input
              type="search"
              className="form-control"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <button type="button" className="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className="items grid">
        {profiles
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (val.id.includes(searchTerm.toLowerCase())) {
              return val;
            }
          })
          .map((p) => (
            <Link
              to={`/profile/${p.id}`}
              className="col-md-6 col-sm-6 item"
              key={p.id}
            >
              <Item id={p.id} img={p.avatar_url} key={p.id} />
            </Link>
          ))}
      </div>
    </>
  );
}
