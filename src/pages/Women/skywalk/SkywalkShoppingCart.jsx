import { useState, useRef, useEffect } from "react";
import { X, Minus, Plus, ChevronDown } from "lucide-react";

export default function SkywalkShoppingCart({ onClose }) {
  const [showNote, setShowNote] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      brand: "BORJAN",
      name: "Women Slipper Heels-GOLDEN",
      price: 4300,
      color: "GOLDEN",
      size: 41,
      actualPrice: 4300,
      barcode: "B14006915",
      quantity: 3,
      image:
        "https://img4.dhresource.com/webp/m/f3/albu/jc/g/14/9fa48b15-bbba-4c65-81b6-3916dbb05dd0.jpg",
    },
    {
      id: 2,
      brand: "BORJAN",
      name: "Women Slipper Heels-GOLDEN",
      price: 4300,
      color: "GOLDEN",
      size: 36,
      actualPrice: 4300,
      barcode: "B14006915",
      quantity: 1,
      image:
        "https://snfproducts.pk/wp-content/uploads/2024/09/WhatsApp-Image-2024-10-10-at-05.53.05-1.jpeg",
    },
  ]);

  const cartRef = useRef(null);

  // ✅ Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div
        ref={cartRef}
        className="bg-white w-full max-w-md h-full overflow-y-auto shadow-xl flex flex-col"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
          <h2 className="text-2xl font-normal">Your cart</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 pt-4 pb-2">
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
              PRODUCT
            </h3>
          </div>

          {/* Items */}
          <div className="px-6">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex gap-4 py-6 ${
                  index !== cartItems.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="w-24 h-24 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-600 mb-1">{item.brand}</p>
                  <h4 className="font-medium text-sm mb-2 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-900 mb-3">
                    PKR {item.price.toLocaleString()}
                  </p>

                  <div className="space-y-0.5 text-xs text-gray-900">
                    <p>
                      <span className="font-medium">Color:</span> {item.color}
                    </p>
                    <p>
                      <span className="font-medium">Size:</span> {item.size}
                    </p>
                    <p>
                      <span className="font-medium">Actual Price:</span> PKR{" "}
                      {item.actualPrice.toLocaleString()}
                    </p>
                    <p>
                      <span className="font-medium">Barcode:</span>{" "}
                      {item.barcode}
                    </p>
                  </div>

                  <p className="text-base font-medium mt-3">
                    PKR {(item.price * item.quantity).toLocaleString()}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center border-2 border-gray-900 rounded-full w-fit mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={16} strokeWidth={2} />
                    </button>
                    <span className="px-4 text-sm font-medium min-w-[40px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={16} strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Note */}
          <div className="px-6 py-6 border-t border-gray-200">
            <button
              onClick={() => setShowNote(!showNote)}
              className="flex items-center justify-between w-full text-left"
            >
              <span className="text-sm">Add Order Note</span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  showNote ? "rotate-180" : ""
                }`}
              />
            </button>
            {showNote && (
              <textarea
                className="w-full mt-4 p-3 border border-gray-300 rounded text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:border-transparent"
                rows="4"
                placeholder="Add special instructions for your order..."
              />
            )}
          </div>

          {/* Subtotal */}
          <div className="px-6 py-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-normal">Subtotal</span>
              <span className="text-lg font-normal">
                PKR {calculateSubtotal().toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-gray-600">
              Taxes and shipping calculated at checkout
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="p-6 space-y-3 bg-white border-t border-gray-200">
          <button className="w-full bg-indigo-900 text-white py-4 rounded-full font-medium text-sm hover:bg-indigo-800 transition-colors">
            View Cart
          </button>
          <button className="w-full bg-indigo-900 text-white py-4 rounded-full font-medium text-sm hover:bg-indigo-800 transition-colors">
            Check out
          </button>
          <button className="w-full bg-indigo-900 text-white py-4 rounded-full font-medium text-sm hover:bg-indigo-800 transition-colors">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
