import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./pages/Home.module.css";
import Boginoo from "./pages/Boginoo";
import Home from "./pages/Home";
import LandingPP from "./pages/LandingPP";
import Spotify from "./pages/Spotify";
import Snake from "./pages/Snake";
import Vlog from "./pages/Vlog";
import Flip from "./pages/Flip";
import Weather from "./pages/Weather";
import Country from "./pages/Country";

function App() {
  return (
    <div>
      <div className={styles.all}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boginoo" element={<Boginoo />} />
            <Route path="/landingpp" element={<LandingPP />} />
            <Route path="/spotify" element={<Spotify />} />
            <Route path="/snake" element={<Snake />} />
            <Route path="/vlog" element={<Vlog />} />
            <Route path="/flip" element={<Flip />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/country" element={<Country />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
