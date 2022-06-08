import Home from "../component/Home";
import Singer from "../component/Singer";
import Song from "../component/Song";
import Rank from "../component/Rank";
import { Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singer" element={<Singer />} />
      <Route path="/song" element={<Song />} />
      <Route path="/rank" element={<Rank />} />
    </Routes>
  );
}

export default AppRouter;
