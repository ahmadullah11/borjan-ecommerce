import { useState } from "react";
import { X, Minus, Plus, ArrowRight } from "lucide-react";

export default function WomenQuickAddModel({ product, onClose }) {
  // Manage selected size and quantity
  const [selectedSize, setSelectedSize] = useState("36");
  const [quantity, setQuantity] = useState(1);

  // Functions to increase/decrease quantity
  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // If product data not found, don't render anything
  if (!product) return null;

  return (
    // Dark background overlay + center modal
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      {/* Modal Box */}
      <div className="bg-white rounded-lg w-full max-w-md shadow-2xl relative">
        
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        {/* 🖼️ Product Image + Title + Price */}
        <div className="flex items-center gap-4 p-4 border-b">
          <div className="w-28 h-28 bg-gray-100 rounded overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-base font-medium">{product.name}</h2>
            <p className="text-gray-800 font-semibold mt-1">
              PKR {product.originalPrice.toLocaleString()}
            </p>
          </div>
        </div>

        {/* ⚙️ Size & Quantity Controls */}
        <div className="p-4 text-center text-sm">
          
          {/* Select Size */}
          <div className="mb-4">
            <p className="font-semibold mb-2 uppercase">Size: {selectedSize}</p>
            <div className="flex gap-1 flex-wrap justify-center">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border-2 rounded text-xs font-medium transition-all ${
                    selectedSize === size
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-900 border-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Counter */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center border-2 border-gray-900 rounded-full">
              <button
                onClick={decrement}
                className="px-3 py-1 hover:bg-gray-100 rounded-l-full"
              >
                <Minus size={12} />
              </button>

              <span className="px-3 font-medium text-sm">{quantity}</span>

              <button
                onClick={increment}
                className="px-3 py-1 hover:bg-gray-100 rounded-r-full"
              >
                <Plus size={12} />
              </button>
            </div>
          </div>

          {/* 🛒 Add to Cart Button */}
          <button className="w-full bg-indigo-900 text-white py-2 rounded-full font-medium hover:bg-indigo-800 transition-colors mb-2">
            Add to cart
          </button>

          {/* 🔗 View Full Details Button */}
          <button className="flex items-center justify-center gap-1 text-xs font-medium hover:text-indigo-900 transition-colors">
            View full details
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
