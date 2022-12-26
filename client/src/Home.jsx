import AddDevButton from "./addDevButton/AddDevButton";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import Heading from "./heading/Heading";
import Items from "./items/Items";
// import Search from "./search/Search";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/developers");
      setProfiles(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Banner />
      <Heading />
      {/* <Search /> */}
      <Items profiles={profiles} />
      <AddDevButton />
      <Footer />
    </>
  );
}

export default Home;
