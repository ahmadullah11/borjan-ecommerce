// src/components/Header.jsx
import React from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { NavLink } from "react-router-dom"; // ✅ Use NavLink for routing

export default function Header() {
  return (
    <header className="border-b">
      {/* Top Banner */}
      <div className="bg-black text-white text-sm overflow-hidden whitespace-nowrap">
        <p className="inline-block animate-marquee px-4">
          Don’t miss our End of Season Sale! Shop your favorites at Flat 50% OFF
          on selected items.
        </p>
      </div>

      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <div className="text-2xl font-bold">Borjan</div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 font-medium text-sm relative">
          {/* SALE */}
          <div className="group relative">
            <NavLink
              to="/sale"
              className="flex items-center space-x-1 text-red-600"
            >
              <span>SALE</span>
              <FaChevronDown className="group-hover:hidden inline" />
              <FaChevronUp className="hidden group-hover:inline" />
            </NavLink>
            <div className="absolute z-[999] left-0  w-48 bg-white shadow-lg hidden group-hover:block">
              <ul className="p-2 space-y-1">
                <li><NavLink to="/sale/men">Men</NavLink></li>
                <li><NavLink to="/sale/kids">Kids</NavLink></li>
                <li><NavLink to="/sale/accessories">Bags & Accessories</NavLink></li>
              </ul>
            </div>
          </div>

          {/* WEDDING’25 */}
          <div className="group relative">
            <NavLink
              to="/wedding25"
              className="flex items-center space-x-1 text-blue-600"
            >
              <span>WEDDING’25</span>
              <FaChevronDown className="group-hover:hidden" />
              <FaChevronUp className="hidden group-hover:inline" />
            </NavLink>
            <div className="absolute z-[999] left-0  w-48 bg-white shadow-lg hidden group-hover:block">
              <ul className="p-2 space-y-1">
                <li><NavLink to="/women-wedding">WOMEN</NavLink></li>
                <li><NavLink to="/men-wedding">MEN</NavLink></li>
                <li><NavLink to="/clutches-wedding">CLUTCHES</NavLink></li>
              </ul>
            </div>
          </div>

          {/* NEW IN */}
          <div className="group relative">
            <NavLink to="/new-in-women" className="flex items-center space-x-1">
              <span>NEW IN</span>
              <FaChevronDown className="group-hover:hidden" />
              <FaChevronUp className="hidden group-hover:inline" />
            </NavLink>
            <div className="absolute z-[999] left-0  w-48 bg-white shadow-lg hidden group-hover:block">
              <ul className="p-2 space-y-1">
                <li><NavLink to="/new-in-women">Women</NavLink></li>
                <li><NavLink to="/new-in-men">Men</NavLink></li>
              </ul>
            </div>
          </div>

          {/* WOMEN */}
          <div className="group relative">
            <NavLink to="/women" className="flex items-center space-x-1">
              <span>WOMEN</span>
              <FaChevronDown className="group-hover:hidden" />
              <FaChevronUp className="hidden group-hover:inline" />
            </NavLink>
            <div className="absolute z-[999] left-0  w-56 bg-white shadow-lg hidden group-hover:block">
              <ul className="p-2 space-y-1">
                <li><NavLink to="/slipperwomen">Slippers</NavLink></li>
                <li><NavLink to="/sandalswomen">Sandals</NavLink></li>
                <li><NavLink to="/women/heels">Heels</NavLink></li>
                <li><NavLink to="/women/chappals">Chappals</NavLink></li>
                <li><NavLink to="/women/khussa">Khussa</NavLink></li>
                <li><NavLink to="/women/court-shoes">Court Shoes</NavLink></li>
                <li><NavLink to="/women/comfort">Comfort</NavLink></li>
                <li><NavLink to="/women/sneakers">Sneakers</NavLink></li>
                <li><NavLink to="/women/pumps">Pumps</NavLink></li>
                <li><NavLink to="/women/moccasins">Moccasins</NavLink></li>
                <li><NavLink to="/women/mules">Mules</NavLink></li>
                <li><NavLink to="/women/party-wear">Party Wear</NavLink></li>
                <li><NavLink to="/women/platforms">Platforms</NavLink></li>
                {/* Accessories submenu */}
                <li className="group relative">
                  <NavLink to="/women/accessories" className="flex justify-between items-center">
                    Accessories <span>▶</span>
                  </NavLink>
                  <div className="absolute z-[999] left-full top-0  w-48 bg-white shadow-lg hidden group-hover:block">
                    <ul className="p-2 space-y-1">
                      <li><NavLink to="/women/accessories/fragrances">Fragrances</NavLink></li>
                      <li><NavLink to="/women/accessories/nail-paints">Nail Paints</NavLink></li>
                      <li><NavLink to="/women/accessories/tints">Tints</NavLink></li>
                      <li><NavLink to="/women/accessories/scarves">Scarves</NavLink></li>
                      <li><NavLink to="/women/accessories/socks">Socks</NavLink></li>
                      <li><NavLink to="/women/accessories/happy-feet">Happy Feet</NavLink></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* MEN */}
          <div className="group relative">
            <NavLink to="/men" className="flex items-center space-x-1">
              <span>MEN</span>
              <FaChevronDown className="group-hover:hidden" />
              <FaChevronUp className="hidden group-hover:inline" />
            </NavLink>
            <div className="absolute z-[999] left-0  w-56 bg-white shadow-lg hidden group-hover:block">
              <ul className="p-2 space-y-1">
                <li><NavLink to="/men/peshawaris">Peshawaris</NavLink></li>
                <li><NavLink to="/men/sandals">Sandals</NavLink></li>
                <li><NavLink to="/men/slippers">Slippers</NavLink></li>
                <li><NavLink to="/men/chappals">Chappals</NavLink></li>
                <li><NavLink to="/men/clashals">Clashals</NavLink></li>
                <li><NavLink to="/men/formals">Formals</NavLink></li>
                <li><NavLink to="/men/sneakers">Sneakers</NavLink></li>
                <li><NavLink to="/men/comfort">Comfort</NavLink></li>
                <li><NavLink to="/men/rugged">Rugged</NavLink></li>
                <li><NavLink to="/men/extra-large">Extra Large Sizes</NavLink></li>
                {/* Accessories submenu */}
                <li className="group relative">
                  <NavLink to="/men/accessories" className="flex justify-between items-center">
                    Accessories <span>▶</span>
                  </NavLink>
                  <div className="absolute left-full top-0 mt-0 w-48 bg-white shadow-lg hidden group-hover:block">
                    <ul className="p-2 space-y-1">
                      <li><NavLink to="/men/accessories/fragrances">Fragrances</NavLink></li>
                      <li><NavLink to="/men/accessories/wallets">Wallets</NavLink></li>
                      <li><NavLink to="/men/accessories/cufflinks">Cufflinks</NavLink></li>
                      <li><NavLink to="/men/accessories/belts">Belts</NavLink></li>
                      <li><NavLink to="/men/accessories/socks">Socks</NavLink></li>
                      <li><NavLink to="/men/accessories/shoe-care">Shoe Care</NavLink></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* KIDS */}
          <div className="group relative">
            <NavLink to="/kids" className="flex items-center space-x-1">
              <span>KIDS</span>
              <FaChevronDown className="group-hover:hidden" />
              <FaChevronUp className="hidden group-hover:inline" />
            </NavLink>
            <div className="absolute z-[999] left-0  w-56 bg-white shadow-lg hidden group-hover:block">
              <ul className="p-2 space-y-1">
                <li><NavLink to="/kids/new">New in</NavLink></li>
                <li>
                  Boys
                  <ul className="ml-4">
                    <li><NavLink to="/kids/boys/clashals">Clashals</NavLink></li>
                    <li><NavLink to="/kids/boys/formals">Formals</NavLink></li>
                    <li><NavLink to="/kids/boys/school-shoes">School Shoes</NavLink></li>
                  </ul>
                </li>
                <li>
                  Girls
                  <ul className="ml-4">
                    <li><NavLink to="/kids/girls/clashals">Clashals</NavLink></li>
                    <li><NavLink to="/kids/girls/school-shoes">School Shoes</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/kids/accessories">Accessories</NavLink></li>
                <li><NavLink to="/kids/toys">Toys</NavLink></li>
              </ul>
            </div>
          </div>

          {/* BAGS */}
          <div className="group relative">
            <NavLink to="/bags" className="flex items-center space-x-1">
              <span>BAGS</span>
              <FaChevronDown className="group-hover:hidden" />
              <FaChevronUp className="hidden group-hover:inline" />
            </NavLink>
            <div className="absolute z-[999] left-0  w-56 bg-white shadow-lg hidden group-hover:block">
              <ul className="p-2 space-y-1">
                <li><NavLink to="/bags/new">New in</NavLink></li>
                <li><NavLink to="/bags/shoulder">Shoulder Bags</NavLink></li>
                <li><NavLink to="/bags/trendy">Trendy Bags</NavLink></li>
                <li><NavLink to="/bags/wallets">Wallets</NavLink></li>
                <li><NavLink to="/bags/clutches">Clutches</NavLink></li>
                <li><NavLink to="/bags/pouches">Pouches</NavLink></li>
                <li><NavLink to="/bags/laptop">Laptop Bags</NavLink></li>
                <li><NavLink to="/bags/backpack">Men Backpack</NavLink></li>
              </ul>
            </div>
          </div>

          {/* FRAGRANCES */}
          <div className="group relative">
            <NavLink to="/fragrances" className="flex items-center space-x-1">
              <span>FRAGRANCES</span>
              <FaChevronDown className="group-hover:hidden" />
              <FaChevronUp className="hidden group-hover:inline" />
            </NavLink>
            <div className="absolute z-[999] left-0  w-40 bg-white shadow-lg hidden group-hover:block">
              <ul className="p-2 space-y-1">
                <li><NavLink to="/fragrances/women">Women</NavLink></li>
                <li><NavLink to="/fragrances/men">Men</NavLink></li>
              </ul>
            </div>
          </div>

          {/* BEST SELLER */}
          <div className="group relative">
            <NavLink to="/best-seller" className="flex items-center space-x-1">
              <span>BEST SELLER</span>
              <FaChevronDown className="group-hover:hidden" />
              <FaChevronUp className="hidden group-hover:inline" />
            </NavLink>
            <div className="absolute z-[999] left-0  w-48 bg-white shadow-lg hidden group-hover:block">
              <ul className="p-2 space-y-1">
                <li><NavLink to="/best-seller/women">Women</NavLink></li>
                <li><NavLink to="/best-seller/men">Men</NavLink></li>
                <li><NavLink to="/best-seller/kids">Kids</NavLink></li>
                <li><NavLink to="/best-seller/bags">Bags</NavLink></li>
              </ul>
            </div>
          </div>

          {/* NAYZA */}
          <NavLink to="/nayza" className="flex items-center space-x-1">
            <span>NAYZA</span>
          </NavLink>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-xl">
          <FaSearch />
          <FaUser />
          <FaHeart />
          <div className="relative">
            <FaShoppingCart />
            <span className="absolute z-[999] -top-2 -right-2 text-xs bg-black text-white rounded-full px-1">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
