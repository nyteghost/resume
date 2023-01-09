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
            <Route path="/Apis" element={<Apis/>} />
            <Route path="/Databases" element={<Databases/>} />
          </Routes>
        </Router>
      </>
  );
}


export default App;