import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home/Home";
import ClutchesWedding from "./pages/Wedding25/ClutchesWedding";
import WomenWedding from "./pages/Wedding25/WomenWedding";
import WomenWeddingProductDetail from "./pages/Wedding25/WomenWeddingProductDetail/WomenWeddingProductDetail";
import WomenWeddingShoppingCart from "./pages/Wedding25/WomenWeddingProductDetail/WomenWeddingShoppingCart";
import WomenQuickAddModal from "./pages/Wedding25/WomenWeddingProductDetail/WomenQuickAddModal";
import MenWedding from "./pages/Wedding25/MenWedding";
import NewInWomen from "./pages/NewIn/NewInWomen";
import NewInMen from "./pages/NewIn/NewInMen";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/women-wedding" element={<WomenWedding />} />
            <Route
              path="/wedding25/WomenWeddingProductDetail"
              element={<WomenWeddingProductDetail />}
            />
            <Route
              path="/wedding25/WomenWeddingProductDetail/WomenWeddingShoppingCart"
              element={<WomenWeddingShoppingCart />}
            />
            {/* Keep modal route for safety but we’ll not use it for navigation */}
            <Route
              path="/wedding25/WomenWeddingProductDetail/WomenQuickAddModal"
              element={<WomenQuickAddModal />}
            />
            <Route path="/men-wedding" element={<MenWedding />} />
            <Route path="/clutches-wedding" element={<ClutchesWedding />} />
            <Route path="/new-in-women" element={<NewInWomen />} />
            <Route path="/new-in-men" element={<NewInMen />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
