
import React, { useState, useRef, useEffect } from "react";
import { ShoppingCart, ChevronDown, X } from "lucide-react";
import { IoColorFilterOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickShopHovered, setIsQuickShopHovered] = useState(false);

  return (
    <div
      className="relative bg-gray-100 rounded-lg overflow-hidden group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsQuickShopHovered(false);
      }}
    >
      {/* Product Image */}
      <div className="relative">
        <img
          src={isHovered ? product.hoverImage?.trim() : product.image?.trim()}
          alt={product.name}
          className="w-full h-[200px] sm:h-[350px] object-cover transition-all duration-500"
        />

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-x-0 bottom-0 transition-all duration-300">
            {/* Sizes */}
            <div className="px-4 py-2 overflow-x-auto">
              <div className="flex justify-center items-center gap-2 whitespace-nowrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="w-10 h-8 text-gray-700 hover:text-gray-900 transition-all text-sm font-medium flex-shrink-0"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Shop Button */}
            <button
              className="w-full bg-black text-white py-2 font-medium flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors"
              onMouseEnter={() => setIsQuickShopHovered(true)}
              onMouseLeave={() => setIsQuickShopHovered(false)}
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

      {/* Product Info */}
      <div className="p-4 bg-white text-center">
        <h3 className="text-sm font-medium mb-2 hover:underline cursor-pointer mx-auto">
          {product.name}
        </h3>

        {/* Regular Price Only */}
        <div className="text-gray-500 text-sm mb-2">
          Regular price PKR {product.originalPrice.toLocaleString()}
        </div>

        {/* EMI Banner */}
        <div className="flex justify-center">
          <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded flex items-center gap-1 text-xs">
            <span className="font-medium">
              Pay only Rs. {Math.floor(product.originalPrice / 3).toLocaleString()} now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewInMen = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  const dropdownOptions = [
    "Featured",
    "Best selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, old to new",
    "Date, new to old",
  ];

  const products = [
    {
      id: 1,
      name: "Men Formal Shoes-BLACK",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UkugrxSICS6s-KqlMDgxfoiivCv7J5fZw&s",
      hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qOJ76Fbk6jDmeFqUdSsOjTrMExGobfbXjwLDA6KPp3tD5-0LHRrzd5jntXqOdJJUa8w&usqp=CAU",
      originalPrice: 4500,
      sizes: [40, 41, 42, 43, 44, 45],
    },
    {
      id: 2,
      name: "Men Casual Sneakers-WHITE",
      image: "https://img.joomcdn.net/63cac80ca22a7a44a15963c06857f3e7091c2e11_original.jpeg",
      hoverImage: "https://i.ebayimg.com/images/g/03cAAOSwyOBguPwa/s-l1200.jpg",
      originalPrice: 5200,
      sizes: [40, 41, 42, 43, 44, 45],
    },
    {
      id: 3,
      name: "Men Loafers-BROWN",
      image: "https://starlet.pk/cdn/shop/files/AB-410-4A-BRN-_3.jpg?v=1757007803&width=1500",
      hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjabojB1m9hZMFk9BrDJilaL4ebib_SoC9EAW30OmVcLqDScrdfeFtUBoKgLLHkdaYUE&usqp=CAU",
      originalPrice: 3800,
      sizes: [40, 41, 42, 43, 44, 45],
    },
    {
      id: 4,
      name: "Men Sandals-TAN",
      image: "https://m.media-amazon.com/images/I/61XOyfERqEL._UY1000_.jpg",
      hoverImage: "https://fausto.in/cdn/shop/products/FST_KI-4806_TAN_1-1_MOOD_400x.jpg?v=1743177740",
      originalPrice: 2900,
      sizes: [40, 41, 42, 43, 44, 45],
    },
    {
      id: 5,
      name: "Men Slip On-BLUE",
      image: "https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/17082025/8502-blue-side-jpg-1_1709793439-146786511529.jpg",
      hoverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROxmT1q6dt2v3iN_hpwy2EL0BWcISOyY2qi7S3KUmz8IyKr8HvyF4pKzQz_08qtTBGmf0&usqp=CAU",
      originalPrice: 3500,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 6,
      name: "Men Slip On-BROWN",
      image: "https://img.kwcdn.com/product/1d65865b8c/e7dfa464-068d-400a-bc37-d83e8748df2e_800x800.jpeg",
      hoverImage: "https://i5.walmartimages.com/seo/Leesechin-Clearance-Oversized-Men-s-Shoes-Leather-Pea-Casual-Leather-Shoes-Driving-Lazy-Shoes_cdb05e0c-27a7-4979-a808-4cb63ca1d332.824e0152d16b71bee79205e8950bae82.jpeg",
      originalPrice: 4000,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 7,
      name: "Men Slip On-BROWN",
      image: "https://cdn.shopify.com/s/files/1/2216/4489/files/1156945.jpg?v=1758325996&width=800&height=800&crop=center",
      hoverImage: "https://s.alicdn.com/@sc04/kf/Af6d39f94ecab401bb493194f37741189K/Men-s-Leather-Shoes-2025-New-Business-Formal-Casual-Leather-Shoes-Men-s-Leather-Shoes.jpg_300x300.jpg",
      originalPrice: 4200,
      sizes: [36, 37, 38, 39, 40, 41],
    },
    {
      id: 8,
      name: "Men Slip On-BLACK",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJJu_04bqW3k-mmCjfWR-BsRLP4aJzSvo7jgtc_k6W1V0WCGP0I_fI6mX4gziVAqzelI&usqp=CAU",
      hoverImage: "https://m.media-amazon.com/images/I/51Tj5l+3xjL._UY300_.jpg",
      originalPrice: 4500,
      sizes: [36, 37, 38, 39, 40, 41],
    },
  ];

  const colors = ["#f5d680", "#000", "#f0e6e0", "#b5a642", "#e6c84d", "#e0d0d0", "#f0c0e0", "#e0e0e0", "#e64d4d", "#a0a0a0", "#e680a0"];
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

  // Close filter if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterOpen]);

  return (
    <section className="w-full bg-white">
      {/* Filter Panel at TOP */}
      {isFilterOpen && (
        <div
          ref={filterRef}
          className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg max-h-[80vh] overflow-y-auto"
          style={{ maxHeight: "80vh" }}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <h3 className="text-lg font-bold">FILTER</h3>
            <button onClick={() => setIsFilterOpen(false)} className="text-gray-500 hover:text-black">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Filter Content */}
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Price */}
            <div>
              <h4 className="font-semibold mb-2">Price</h4>
              <p className="text-sm text-gray-600 mb-2">The highest price is PKR 7,500</p>
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
                <label key={brand.name} className="flex items-center gap-2 text-sm">
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
                <label key={style.name} className="flex items-center gap-2 text-sm">
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
                <label key={discount.name} className="flex items-center gap-2 text-sm">
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
      )}

      {/* Main Content (shifted down when filter is open) */}
      <div className={isFilterOpen ? "pt-[300px] md:pt-[350px]" : "pt-12"}>
        <div className="px-2 sm:px-3">
          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-sm sm:text-3xl lg:text-4xl font-normal mb-6">New In - Men</h2>
            <p>A range of men's shoes from desk to dinner. </p>
          </div>

          {/* Filter + Sort Row */}
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
                  {dropdownOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setSelectedOption(option);
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewInMen;

