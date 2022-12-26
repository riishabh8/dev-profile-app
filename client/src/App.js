import AddDevPage from "./addDevPage/AddDevPage";
import Home from "./Home";
import Profile from "./profile/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/add" element={<AddDevPage />}></Route>
      </Routes>
    </Router>
  );
}
