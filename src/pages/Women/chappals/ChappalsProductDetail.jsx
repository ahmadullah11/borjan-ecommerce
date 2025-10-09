import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Heart, Minus, Plus } from "lucide-react";
import ChappalsShoppingCart from "./ChappalsShoppingCart";

export default function ChappalsProductDetail() {
  const location = useLocation();
  const product = location.state?.product;

  const [selectedImage, setSelectedImage] = useState(product?.image || "");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [showCart, setShowCart] = useState(false);

  if (!product) {
    return (
      <div className="p-8 text-center text-gray-500">Product not found.</div>
    );
  }

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="relative min-h-screen bg-white p-6 lg:p-12">
      {/* ✅ Cart Drawer */}
      {showCart && <ChappalsShoppingCart onClose={() => setShowCart(false)} />}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="flex justify-center items-center bg-gray-50 rounded-lg p-4 border">
          <img
            src={selectedImage}
            alt={product.name}
            className="max-h-[500px] object-contain"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-medium text-gray-900 mb-3">
            {product.name}
          </h1>
          <div className="text-2xl font-semibold text-gray-900 mb-4">
            PKR {product.originalPrice.toLocaleString()}
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <p className="text-sm font-semibold mb-2">Size:</p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
                    selectedSize === size
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-900"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-full">
              <button onClick={decrement} className="p-3 hover:bg-gray-100 rounded-l-full">
                <Minus size={16} />
              </button>
              <span className="px-6 font-medium">{quantity}</span>
              <button onClick={increment} className="p-3 hover:bg-gray-100 rounded-r-full">
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setShowCart(true)}
              className="flex-1 bg-indigo-900 text-white py-4 rounded-full font-semibold hover:bg-indigo-800 transition-colors"
            >
              Add to cart
            </button>
            <button className="p-4 border-2 border-gray-300 rounded-full hover:bg-gray-50">
              <Heart size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
