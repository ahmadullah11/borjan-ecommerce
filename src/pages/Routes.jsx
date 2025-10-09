import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Home from "./Home/Home";
import WomenWedding from "./WEDDING25/Women/WomenWedding";
import ProductDetail from "./WEDDING25/Women/ProductDetail";
import QuickAddModel from "./WEDDING25/Women/QuickAddModel";
import ShoppingCart from "./WEDDING25/Women/ShoppingCart";

import MenWedding from "./WEDDING25/Men/MenWedding";
import MenProductDetail from "./WEDDING25/Men/MenProductDetail";
import MenQuickAddModel from "./WEDDING25/Men/MenQuickAddModel";
import MenShoppingCart from "./WEDDING25/Men/MenShoppingCart";

import ClutchesWedding from "./WEDDING25/Clutches/ClutchesWedding";
import ClutchesProductDetail from "./WEDDING25/Clutches/ClutchesProductDetail";
import ClutchesQuickAddModel from "./WEDDING25/Clutches/ClutchesQuickAddModel";
import ClutchesShoppingCart from "./WEDDING25/Clutches/ClutchesShoppingCart";

import MenNewIn from "./NEWIN/Men/MenNewIn";
import NewMenProductDetail from "./NEWIN/Men/NewMenProductDetail";
import NewMenQuickAddModel from "./NEWIN/Men/NewMenQuickAddModel";
import NewMenShoppingCart from "./NEWIN/Men/NewMenShoppingCart";

import WomenNewIn from "./NEWIN/Women/WomenNewIn";
import NewWomenProductDetail from "./NEWIN/Women/NewWomenProductDetail";
import NewWomenQuickAddModel from "./NEWIN/Women/NewWomenQuickAddModel";
import NewWomenShoppingCart from "./NEWIN/Women/NewWomenShoppingCart";

import Women from './Women/Index.jsx'

function Index() {
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

            <Route path="/NewInMen/new-in-men" element={<MenNewIn />} />
            <Route path="/NewMenProductDetail" element={<NewMenProductDetail />} />
            <Route path="/NewMenQuickAddModel" element={<NewMenQuickAddModel />} />
            <Route path="/NewMenShoppingCart" element={<NewMenShoppingCart />} />

             <Route path="/NewInWen/new-in-women" element={<WomenNewIn/>} />
            <Route path="/NewWomenProductDetail" element={<NewWomenProductDetail />} />
            <Route path="/NewWomenQuickAddModel" element={<NewWomenQuickAddModel />} />
            <Route path="/NewWomenShoppingCart" element={<NewWomenShoppingCart />} />


            <Route path='collections/*' element={<Women />} />


          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default Index