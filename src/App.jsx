import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import WomenWedding from "./pages/WEDDING25/Women/WomenWedding";
import ProductDetail from "./pages/WEDDING25/Women/ProductDetail";
import QuickAddModel from "./pages/WEDDING25/Women/QuickAddModel";
import ShoppingCart from "./pages/WEDDING25/Women/ShoppingCart";

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
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
