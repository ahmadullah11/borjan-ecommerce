// src/components/Header.jsx
import React, { useState } from "react";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // 🧠 MENU DATA (used for both desktop & mobile)
  const menus = [
    {
      title: "SALE",
      color: "text-red-600",
      submenu: [
        { name: "Men", link: "/sale/men" },
        { name: "Kids", link: "/sale/kids" },
        { name: "Bags & Accessories", link: "/sale/accessories" },
      ],
    },
    {
      title: "WEDDING’25",
      color: "text-blue-600",
      submenu: [
        { name: "Women", link: "/women-wedding" },
        { name: "Men", link: "/men-wedding" },
        { name: "Clutches", link: "/clutches-wedding" },
      ],
    },
    {
      title: "NEW IN",
      submenu: [
        { name: "Women", link: "/NewInWen/new-in-women" },
        { name: "Men", link: "/NewInMen/new-in-men" },
      ],
    },
    {
      title: "WOMEN",
      submenu: [
        { name: "Slippers", link: "/slipperwomen" },
        { name: "Sandals", link: "/sandalswomen" },
        { name: "Heels", link: "/women/heels" },
        { name: "Chappals", link: "/women/chappals" },
        { name: "Khussa", link: "/women/khussa" },
        { name: "Court Shoes", link: "/women/court-shoes" },
        { name: "Comfort", link: "/women/comfort" },
        { name: "Sneakers", link: "/women/sneakers" },
        { name: "Pumps", link: "/women/pumps" },
        { name: "Moccasins", link: "/women/moccasins" },
        { name: "Mules", link: "/women/mules" },
        { name: "Party Wear", link: "/women/party-wear" },
        { name: "Platforms", link: "/women/platforms" },
        {
          name: "Accessories",
          submenu: [
            { name: "Fragrances", link: "/women/accessories/fragrances" },
            { name: "Nail Paints", link: "/women/accessories/nail-paints" },
            { name: "Tints", link: "/women/accessories/tints" },
            { name: "Scarves", link: "/women/accessories/scarves" },
            { name: "Socks", link: "/women/accessories/socks" },
            { name: "Happy Feet", link: "/women/accessories/happy-feet" },
          ],
        },
      ],
    },
    {
      title: "MEN",
      submenu: [
        { name: "Peshawaris", link: "/men/peshawaris" },
        { name: "Sandals", link: "/men/sandals" },
        { name: "Slippers", link: "/men/slippers" },
        { name: "Chappals", link: "/men/chappals" },
        { name: "Casuals", link: "/men/clashals" },
        { name: "Formals", link: "/men/formals" },
        { name: "Sneakers", link: "/men/sneakers" },
        { name: "Comfort", link: "/men/comfort" },
        { name: "Rugged", link: "/men/rugged" },
        { name: "Extra Large Size", link: "/men/extra-large" },
        {
          name: "Accessories",
          submenu: [
            { name: "Fragrances", link: "/men/accessories/fragrances" },
            { name: "Wallets", link: "/men/accessories/wallets" },
            { name: "Cufflinks", link: "/men/accessories/cufflinks" },
            { name: "Belts", link: "/men/accessories/belts" },
            { name: "Socks", link: "/men/accessories/socks" },
            { name: "Shoe Care", link: "/men/accessories/shoe-care" },
          ],
        },
      ],
    },
    {
      title: "KIDS",
      submenu: [
        { name: "New In", link: "/kids/new" },
        {
          name: "Boys",
          submenu: [
            { name: "Casuals", link: "/kids/boys/clashals" },
            { name: "Formals", link: "/kids/boys/formals" },
            { name: "School Shoes", link: "/kids/boys/school-shoes" },
          ],
        },
        {
          name: "Girls",
          submenu: [
            { name: "Casuals", link: "/kids/girls/clashals" },
            { name: "School Shoes", link: "/kids/girls/school-shoes" },
          ],
        },
        { name: "Accessories", link: "/kids/accessories" },
        { name: "Toys", link: "/kids/toys" },
      ],
    },
    {
      title: "BAGS",
      submenu: [
        { name: "New In", link: "/bags/new" },
        { name: "Shoulder Bags", link: "/bags/shoulder" },
        { name: "Trendy Bags", link: "/bags/trendy" },
        { name: "Wallets", link: "/bags/wallets" },
        { name: "Clutches", link: "/bags/clutches" },
        { name: "Pouches", link: "/bags/pouches" },
        { name: "Laptop Bags", link: "/bags/laptop" },
        { name: "Men Backpack", link: "/bags/backpack" },
      ],
    },
    {
      title: "FRAGRANCES",
      submenu: [
        { name: "Women", link: "/fragrances/women" },
        { name: "Men", link: "/fragrances/men" },
      ],
    },
    {
      title: "BEST SELLER",
      submenu: [
        { name: "Women", link: "/best-seller/women" },
        { name: "Men", link: "/best-seller/men" },
        { name: "Kids", link: "/best-seller/kids" },
        { name: "Bags", link: "/best-seller/bags" },
      ],
    },
    { title: "NAYZA", link: "/nayza" },
  ];

  return (
    <header className="border-b">
      {/* 🔝 Top Banner */}
      <div className="bg-black text-white text-sm overflow-hidden whitespace-nowrap">
        <p className="inline-block animate-marquee px-4">
          Don’t miss our End of Season Sale! Shop your favorites at Flat 50% OFF
          on selected items.
        </p>
      </div>

      {/* ===== DESKTOP NAVBAR ===== */}
      <div className="flex items-center justify-between px-6 py-6">
        <div className="text-2xl font-bold">Borjan</div>

        <nav className="hidden md:flex space-x-6 font-medium text-sm relative">
          {menus.map((menu) => (
            <div key={menu.title} className="group relative">
              <NavLink
                to={menu.link || "#"}
                className={`flex items-center space-x-1 ${menu.color || ""}`}
              >
                <span>{menu.title}</span>
                {menu.submenu && (
                  <>
                    <FaChevronDown className="group-hover:hidden" />
                    <FaChevronUp className="hidden group-hover:inline" />
                  </>
                )}
              </NavLink>

              {/* Dropdown */}
              {menu.submenu && (
                <div className="absolute z-[999] left-0 bg-white shadow-lg hidden group-hover:block w-56">
                  <ul className="p-2 space-y-1">
                    {menu.submenu.map((sub, i) =>
                      sub.submenu ? (
                        <li key={i} className="group relative">
                          <NavLink
                            to={sub.link || "#"}
                            className="flex justify-between items-center"
                          >
                            {sub.name} ▶
                          </NavLink>
                          <div className="absolute left-full top-0 w-48 bg-white shadow-lg hidden group-hover:block">
                            <ul className="p-2 space-y-1">
                              {sub.submenu.map((s, j) => (
                                <li key={j}>
                                  <NavLink to={s.link}>{s.name}</NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ) : (
                        <li key={i}>
                          <NavLink to={sub.link}>{sub.name}</NavLink>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4 text-xl">
          <FaSearch />
          <FaShoppingCart />
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div className="md:hidden">
        <button
          className="absolute left-4 top-5 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 overflow-y-auto">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <h2 className="font-semibold text-lg">MENU</h2>
            <button onClick={() => setMenuOpen(false)}>
              <FaTimes className="text-xl" />
            </button>
          </div>

          <ul className="divide-y">
            {menus.map((item, i) => (
              <li key={i} className="px-4 py-3">
                <div className="flex justify-between items-center">
                  <span
                    onClick={() => item.submenu && toggleSubmenu(item.title)}
                    className="font-medium text-gray-800 flex-1 cursor-pointer"
                  >
                    {item.title}
                  </span>
                  {item.submenu && (
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className="text-gray-600"
                    >
                      {activeMenu === item.title ? <FaMinus /> : <FaPlus />}
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {activeMenu === item.title && item.submenu && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {item.submenu.map((sub, j) => (
                      <li key={j}>
                        {sub.submenu ? (
                          <details className="ml-2">
                            <summary className="cursor-pointer text-gray-700">
                              {sub.name}
                            </summary>
                            <ul className="ml-4 mt-1 space-y-1">
                              {sub.submenu.map((s, k) => (
                                <li key={k}>
                                  <NavLink
                                    to={s.link}
                                    onClick={() => setMenuOpen(false)}
                                    className="block py-1 text-gray-700 hover:text-blue-600"
                                  >
                                    {s.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </details>
                        ) : (
                          <NavLink
                            to={sub.link}
                            onClick={() => setMenuOpen(false)}
                            className="block py-1 text-gray-700 hover:text-blue-600"
                          >
                            {sub.name}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
