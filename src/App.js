import { Navbar, Home, Footer } from "./components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/about/About";
import Photographers from "./components/about/Photographers";
import Destinations from "./components/destinations/Destinations";
import Profile from "./components/about/Profile";
import Gallery from "./components/about/Gallery"; 
import Map from "./components/destinations/Map";
import "./styles/index.css";
import "./styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photographers" element={<Photographers />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/destinations" element={<Map />}/>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
    </BrowserRouter>      
  );
}

export default App;
