import { useState } from "react";
import { X, Minus, Plus, ArrowRight } from "lucide-react";

export default function WomenQuickAddModal({ product, onClose }) {
  const [selectedSize, setSelectedSize] = useState("36");
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
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

        {/* Content */}
        <div className="p-4 text-center text-sm">
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

          {/* Quantity */}
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

          <button className="w-full bg-indigo-900 text-white py-2 rounded-full font-medium hover:bg-indigo-800 transition-colors mb-2">
            Add to cart
          </button>

          <button className="flex items-center justify-center gap-1 text-xs font-medium hover:text-indigo-900 transition-colors">
            View full details
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
