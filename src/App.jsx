import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import WomenWedding from "./pages/WEDDING25/Women/WomenWedding";
import ProductDetail from "./pages/WEDDING25/Women/ProductDetail";
import QuickAddModel from "./pages/WEDDING25/Women/QuickAddModel";
import ShoppingCart from "./pages/WEDDING25/Women/ShoppingCart";

import MenWedding from "./pages/WEDDING25/Men/MenWedding";
import MenProductDetail from "./pages/WEDDING25/Men/MenProductDetail";
import MenQuickAddModel from "./pages/WEDDING25/Men/MenQuickAddModel";
import MenShoppingCart from "./pages/WEDDING25/Men/MenShoppingCart";

import ClutchesWedding from "./pages/WEDDING25/Clutches/ClutchesWedding";
import ClutchesProductDetail from "./pages/WEDDING25/Clutches/ClutchesProductDetail";
import ClutchesQuickAddModel from "./pages/WEDDING25/Clutches/ClutchesQuickAddModel";
import ClutchesShoppingCart from "./pages/WEDDING25/Clutches/ClutchesShoppingCart";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/women-wedding" element={<WomenWedding />} />
            <Route path="/ProductDetail" element={<ProductDetail />} />
            <Route path="/QuickAddModel" element={<QuickAddModel />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />

            <Route path="/Men-wedding" element={<MenWedding />} />
            <Route path="/MenProductDetail" element={<MenProductDetail />} />
            <Route path="/MenQuickAddModel" element={<MenQuickAddModel />} />
            <Route path="/MenShoppingCart" element={<MenShoppingCart />} />

            <Route path="/Clutches-wedding" element={<ClutchesWedding />} />
            <Route path="/ClutchesProductDetail" element={<ClutchesProductDetail />} />
            <Route path="/ClutchesQuickAddModel" element={<ClutchesQuickAddModel />} />
            <Route path="/ClutchesShoppingCart" element={<ClutchesShoppingCart />} />


          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
