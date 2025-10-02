import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home/Home";
import Clutches from "./pages/Wedding25/Clutches"; 
import Women from "./pages/Wedding25/Women";
import Men from "./pages/Wedding25/Men";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/clutches" element={<Clutches />} />
      </Routes>
    </Router>
  );
}

export default App;
