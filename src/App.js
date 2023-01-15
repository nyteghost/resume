import './App.css';
import Navbar from "./components/topbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import About from "./pages/about";
import Index from "./pages/index";
import Apis from "./pages/apis";
import Databases from "./pages/databases";
import Pokedex from "./pages/pokedex";
import StageComp from "./pages/stage";

function App() {
  return (
      <>
        {/* This is the alias of BrowserRouter i.e. Router */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/Resume" element={<Resume/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Databases" element={<Databases/>} />
            <Route path="/Pokedex" element={<Pokedex/>} />
            <Route path="/Stage" element={<StageComp/>} />

          </Routes>
        </Router>
      </>
  );
}


export default App;