
  import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, ChevronDown, X } from "lucide-react";
import { IoColorFilterOutline } from "react-icons/io5";
import QuickAddModel from "./QuickAddModel";

const Filter = ({ isFilterOpen, setIsFilterOpen }) => {
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    if (isFilterOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterOpen]);

  if (!isFilterOpen) return null;

  return (
    <div
      ref={filterRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg max-h-[80vh] overflow-y-auto"
    >
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h3 className="text-lg font-bold">FILTER</h3>
        <button onClick={() => setIsFilterOpen(false)} className="text-gray-500 hover:text-black">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4 border-t">
        <button className="w-full bg-gray-100 text-black py-2 rounded font-medium text-sm">
          Remove all
        </button>
      </div>
    </div>
  );
};

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
            className="w-full h-[250px] sm:h-[350px] object-cover transition-all duration-500"
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
                {isQuickShopHovered ? <ShoppingCart className="w-5 h-5" /> : <span>Quick shop</span>}
              </button>
            </div>
          )}
        </div>

        <div className="p-4 bg-white text-center">
          <h3 className="text-sm font-medium mb-2 hover:underline">{product.name}</h3>
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
        <QuickAddModel
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

const WomenWedding = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

const products = [
    {
      id: 1,
      name: "Women Slipper Heels-LIGHT BLUE",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkseKh79sZX2VBjTCZ9k2HD2q1mFkjdZiWA&s",
      hoverImage:
        "https://ae01.alicdn.com/kf/S6f27778ee60640ff8120ab40091a0fa5V.jpg",
      originalPrice: 3888,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 2,
      name: "Women Slipper Heels-GOLDEN",
      image:
        "https://www.borjan.com.pk/cdn/shop/files/1_af359e79-f055-4d5b-814c-d0f85669e1d1.png?v=1757096655",
      hoverImage:
        "https://www.borjan.com.pk/cdn/shop/files/4_af6d834a-66be-4d3f-bfa1-14cd84531ee9.png?v=1757096655&width=1445",
      originalPrice: 4405,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 3,
      name: "Women Slipper Heels-KHAKI",
      image:
        "https://www.borjan.com.pk/cdn/shop/files/B14006552-BLACK.png?v=1757097711",
      hoverImage:
        "https://www.borjan.com.pk/cdn/shop/files/4_2919059b-ffe6-4589-880b-007aad1061ed.png?v=1757097711&width=1445",
      originalPrice: 4300,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 4,
      name: "Women Slipper Heels-TAN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhefr8XHGUSBfN1xLyF9f701tOMMdXWPi9Fg&s",
      hoverImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYvYGiJkq7jMrgzKm7I6VgnRvnoXtFr9OZg&s",
      originalPrice: 3800,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 5,
      name: "Women Slipper Heels-BEIGE",
      image:
        "https://1ststep.pk/cdn/shop/files/seraphina_gold_heel_slippers_0412464_1_800x.webp?v=1726505569",
      hoverImage:
        "https://rukminim2.flixcart.com/image/480/640/xif0q/shopsy-sandal/r/l/6/6-akh-001-6-ak-sky-white-original-imah8rfrzbmb8dkc.jpeg?q=90",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGhcWGhD-ugsWBHGBLT4v42vtBd18xUeTVl5rThAfw4dPgYAwliaf7YB83dURhxA3LNQ&usqp=CAU",
      hoverImage:
        "https://snfproducts.pk/wp-content/uploads/2024/09/WhatsApp-Image-2024-10-10-at-05.53.05-1.jpeg",
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
          <h2 className="text-sm sm:text-3xl lg:text-4xl font-normal mb-6">Women Wedding</h2>
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
                {["Featured", "Best selling", "Price, low to high"].map((option) => (
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
                ))}
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

export default WomenWedding;
