import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, ChevronDown, X } from "lucide-react";
import { IoColorFilterOutline } from "react-icons/io5";
import MoccasinsQuickAddModel from "./MoccasinsQuickAddModel";

const Filter = ({ isFilterOpen, setIsFilterOpen }) => {
  const filterRef = useRef(null);

  const colors = [
    "#f5d680",
    "#000",
    "#f0e6e0",
    "#b5a642",
    "#e6c84d",
    "#e0d0d0",
    "#f0c0e0",
    "#e0e0e0",
    "#e64d4d",
    "#a0a0a0",
    "#e680a0",
  ];
  const sizes = [36, 37, 38, 39, 40, 41, 42];
  const sizeCounts = { 36: 32, 37: 32, 38: 32, 39: 32, 40: 32, 41: 32, 42: 2 };
  const brands = [{ name: "Borjan", count: 32 }];
  const styles = [
    { name: "Women Heel", count: 25 },
    { name: "Women Sandal", count: 3 },
    { name: "Women Slipper", count: 4 },
  ];
  const discounts = [
    { name: "20%", count: 1 },
    { name: "30%", count: 3 },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    if (isFilterOpen)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterOpen]);

  if (!isFilterOpen) return null;

  return (
    <div
      ref={filterRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg max-h-[80vh] overflow-y-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h3 className="text-lg font-bold">FILTER</h3>
        <button
          onClick={() => setIsFilterOpen(false)}
          className="text-gray-500 hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Filter Content */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Price */}
        <div>
          <h4 className="font-semibold mb-2">Price</h4>
          <p className="text-sm text-gray-600 mb-2">
            The highest price is PKR 7,500
          </p>
          <div className="flex justify-between text-xs mb-1">
            <span>0</span>
            <span>7500</span>
          </div>
          <input
            type="range"
            min="0"
            max="7500"
            defaultValue="7500"
            className="w-full h-2 bg-gray-200 rounded appearance-none cursor-pointer"
          />
          <button className="mt-3 w-full bg-black text-white py-2 rounded text-sm font-medium">
            Apply Filter
          </button>
        </div>

        {/* Size */}
        <div>
          <h4 className="font-semibold mb-2">Size</h4>
          <div className="space-y-2">
            {sizes.map((size) => (
              <label key={size} className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="w-4 h-4" />
                <span>
                  {size} ({sizeCounts[size]})
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Color */}
        <div>
          <h4 className="font-semibold mb-2">Color</h4>
          <div className="flex flex-wrap gap-2">
            {colors.map((color, idx) => (
              <div
                key={idx}
                className="w-5 h-5 rounded-full border border-gray-300 cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Brand */}
        <div>
          <h4 className="font-semibold mb-2">Brand</h4>
          {brands.map((brand) => (
            <label
              key={brand.name}
              className="flex items-center gap-2 text-sm"
            >
              <input type="checkbox" className="w-4 h-4" />
              <span>
                {brand.name} ({brand.count})
              </span>
            </label>
          ))}
        </div>

        {/* Style */}
        <div>
          <h4 className="font-semibold mb-2">Style</h4>
          {styles.map((style) => (
            <label
              key={style.name}
              className="flex items-center gap-2 text-sm"
            >
              <input type="checkbox" className="w-4 h-4" />
              <span>
                {style.name} ({style.count})
              </span>
            </label>
          ))}
        </div>

        {/* Discount */}
        <div>
          <h4 className="font-semibold mb-2">Discount</h4>
          {discounts.map((discount) => (
            <label
              key={discount.name}
              className="flex items-center gap-2 text-sm"
            >
              <input type="checkbox" className="w-4 h-4" />
              <span>
                {discount.name} ({discount.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Remove All Button */}
      <div className="p-4 border-t">
        <button className="w-full bg-gray-100 text-black py-2 rounded font-medium text-sm">
          Remove all
        </button>
      </div>
    </div>
  );
};

// ✅ FIXED PRODUCT IMAGE HEIGHT + FULL IMAGE (no crop)
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickShopHovered, setIsQuickShopHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate("/ProductDetail", { state: { product } });
  };

  const displayPrice = product.salePrice || product.originalPrice;

  return (
    <>
      <div
        className="relative bg-gray-100 rounded-lg overflow-hidden group w-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsQuickShopHovered(false);
        }}
        onClick={handleProductClick}
      >
        <div className="relative">
          <img
            src={isHovered ? product.hoverImage?.trim() : product.image?.trim()}
            alt={product.name}
            className="w-full h-[270px] sm:h-[380px] object-contain transition-all duration-500"
          />

          {isHovered && (
            <div className="absolute inset-x-0 bottom-0 transition-all duration-300">
              <button
                className="w-full bg-black text-white py-2 font-medium flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors"
                onMouseEnter={() => setIsQuickShopHovered(true)}
                onMouseLeave={() => setIsQuickShopHovered(false)}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(true);
                }}
              >
                {isQuickShopHovered ? (
                  <ShoppingCart className="w-5 h-5" />
                ) : (
                  <span>Quick shop</span>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="p-4 bg-white text-center">
          <h3 className="text-sm font-medium mb-2 hover:underline">
            {product.name}
          </h3>
          <div className="text-gray-500 text-sm mb-2">
            Regular price PKR {product.originalPrice.toLocaleString()}
          </div>
          {product.salePrice && (
            <div className="text-red-600 font-bold text-lg mb-2">
              PKR {product.salePrice.toLocaleString()}
            </div>
          )}
          <div className="flex justify-center">
            <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
              Pay only Rs. {Math.floor(displayPrice / 3).toLocaleString()} now
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <MoccasinsQuickAddModel product={product} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

const MoccasinsWomen = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Women Slipper Heels-LIGHT BLUE",
      image:
        "https://www.borjan.com.pk/cdn/shop/files/1_d81706cd-5242-4df9-ac73-60883eba2d67.png?v=1759838080",
      hoverImage:
        "https://www.borjan.com.pk/cdn/shop/files/2_1bb41de7-c4b0-45a3-a282-b6027e04a85c.png?v=1759836657",
      originalPrice: 3888,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 2,
      name: "Women Slipper Heels-GOLDEN",
      image:
        "https://www.borjan.com.pk/cdn/shop/files/1_1dc082e5-f524-4841-ab06-cd98f339f2f1.jpg?v=1759838944",
      hoverImage:
        "https://www.borjan.com.pk/cdn/shop/files/2_f133f697-48b3-4a34-9fc3-841d1d3148d4.png?v=1759838080",
      originalPrice: 4405,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 3,
      name: "Women Slipper Heels-KHAKI",
      image:
        "https://www.borjan.com.pk/cdn/shop/files/1_34659a89-d00f-419d-9288-a2bc4d5acf0a.png?v=1759836657",
      hoverImage:
        "https://www.borjan.com.pk/cdn/shop/files/2_50e1533e-1ee8-48af-aece-331c78b13013.jpg?v=1759838944",
      originalPrice: 4300,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 4,
      name: "Women Slipper Heels-TAN",
      image:
        "https://www.borjan.com.pk/cdn/shop/files/1_f4677f14-f780-4639-9c99-e2663b6211b1.jpg?v=1759308731",
      hoverImage:
        "https://www.borjan.com.pk/cdn/shop/files/2_0c1bc9f5-c85a-4964-909f-9fc2deb8fe40.jpg?v=1759308731",
      originalPrice: 3800,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 5,
      name: "Women Slipper Heels-BEIGE",
      image:
        "https://www.borjan.com.pk/cdn/shop/files/1_90875871-737a-43e9-82fd-f1d0b6cf6278.jpg?v=1759130927",
      hoverImage:
        "https://www.borjan.com.pk/cdn/shop/files/2_0656ab59-1a38-4933-941e-09e2ca501d9c.jpg?v=1758189472",
      originalPrice: 3500,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 6,
      name: "Women Slipper Heels-BLACK",
      image:
        "https://1ststep.pk/cdn/shop/files/black_fancy_heel_slippers_0413052_1_800x.webp?v=1747837400",
      hoverImage:
        "https://img4.dhresource.com/webp/m/f3/albu/jc/g/14/9fa48b15-bbba-4c65-81b6-3916dbb05dd0.jpg",
      originalPrice: 4000,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 7,
      name: "Women Slipper Heels-PINK",
      image:
        "https://www.borjan.com.pk/cdn/shop/files/1_1cefd092-0136-48fa-9cc2-b351dd0317a0.png?v=1758965738",
      hoverImage:
        "https://www.borjan.com.pk/cdn/shop/files/2_16756e55-e3e2-4e87-91dd-b469e246fa7b.png?v=1758965738",
      originalPrice: 4200,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 8,
      name: "Women Slipper Heels-WHITE",
      image:
        "https://n.nordstrommedia.com/it/8de0f791-9861-4f67-bc07-ac1a6ad33ee5.jpeg?h=368&w=240&dpr=2",
      hoverImage:
        "https://snfproducts.pk/wp-content/uploads/2023/07/WhatsApp-Image-2023-08-07-at-4.23.30-PM-1.jpeg",
      originalPrice: 4500,
      sizes: [36, 37, 38, 39, 40, 41],
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="pt-12 px-2 sm:px-3">
        <div className="text-center mb-6">
          <h2 className="text-sm sm:text-3xl lg:text-4xl font-normal mb-6">
          Moccasins - Women 
          </h2>
          <p>
            Pick from the coziest moccasins in an array of gorgeous autumnal hues.
            </p>
        </div>

        <div className="flex justify-between items-center px-2 sm:px-3 py-4 border-b mb-6 relative">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <IoColorFilterOutline className="w-5 h-5" />
            <span className="font-medium">Filter</span>
          </button>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-black"
            >
              <span className="font-medium">{selectedOption}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-20">
                {["Featured", "Best selling", "Price, low to high"].map(
                  (option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setSelectedOption(option);
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {option}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        <Filter isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoccasinsWomen;


