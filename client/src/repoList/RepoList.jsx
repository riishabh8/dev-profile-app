import axios from "axios";
import { useEffect, useState } from "react";
import RepoItem from "../RepoItem/RepoItem";

export default function RepoList(props) {
  const [repo, setRepo] = useState([{}]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${props.repo}`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setRepo(res.data);
    });
  }, [{}]);
  // console.log(repo)
  return (
    <div>
      {repo.map((p) => (
        <RepoItem
          title={p.name}
          key={p.name}
          des={p.description}
          date={new Date(p.updated_at).toDateString()}
          url={p.html_url}
        />
      ))}
    </div>
  );
}
