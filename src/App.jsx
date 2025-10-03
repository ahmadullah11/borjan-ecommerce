import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home/Home";
import ClutchesWedding from "./pages/Wedding25/ClutchesWedding";
import WomenWedding from "./pages/Wedding25/WomenWedding";
import MenWedding from "./pages/Wedding25/MenWedding";
import NewInWomen from "./pages/NewIn/NewInWomen";
import NewInMen from "./pages/NewIn/NewInMen";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header always visible */}
        <Header />

        {/* Page content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/women-wedding" element={<WomenWedding />} />
            {/* <Route path="/WomenWeddingProductDetail" element={<WomenWeddingProductDetail />} /> */}
            <Route path="/men-wedding" element={<MenWedding />} />
            <Route path="/clutches-wedding" element={<ClutchesWedding />} />

            {/* import New-In  */}
            <Route path="/new-in-women" element={<NewInWomen />} />
            <Route path="/new-in-men" element={<NewInMen />} />
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
