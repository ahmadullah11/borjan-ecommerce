import { useState } from 'react';
import { Heart, Minus, Plus, X } from 'lucide-react';
import WomenWeddingShoppingCart from './WomenWeddingShoppingCart'; // ✅ import your cart component
import YouMightAlsoLike from "./YouMightAlsoLike";

export default function WomenWeddingProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('36');
  const [selectedColor, setSelectedColor] = useState('IVORY');
  const [showCart, setShowCart] = useState(false); // ✅ state to control left-side cart panel

  // ✅ Replace with your real image URLs
  const imageUrls = [
    "https://img4.dhresource.com/webp/m/f3/albu/jc/g/14/9fa48b15-bbba-4c65-81b6-3916dbb05dd0.jpg",
    "https://snfproducts.pk/wp-content/uploads/2024/09/WhatsApp-Image-2024-10-10-at-05.53.05-1.jpeg",
    "https://n.nordstrommedia.com/it/8de0f791-9861-4f67-bc07-ac1a6ad33ee5.jpeg?h=368&w=240&dpr=2",
    "https://snfproducts.pk/wp-content/uploads/2023/07/WhatsApp-Image-2023-08-07-at-4.23.30-PM-1.jpeg"
  ];

  const sizes = ['36', '37', '38', '39', '40', '41'];
  const colors = [{ name: 'IVORY', color: 'bg-amber-100 border-amber-300' }];

  const relatedProducts = [
    { name: 'Women Slipper Heels-GOLDEN', price: 6200, installment: 2377, image: imageUrls[0] },
    { name: 'Women Slipper Heels-SILVER', price: 4000, installment: 1533, image: imageUrls[1] },
    { name: 'Women Sandal Heels-BLACK', price: 4400, installment: 1687, image: imageUrls[2] },
    { name: 'Women Slipper Heels-GOLDEN', price: 4200, installment: 1610, image: imageUrls[3] },
  ];

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="relative min-h-screen bg-white p-6 lg:p-12 overflow-hidden">
      
      {/* ✅ Left Slide-in Cart */}
      <div
        className={`fixed top-0 left-0 h-full w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-500 ${
          showCart ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Shopping Cart</h2>
          <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gray-900">
            <X size={24} />
          </button>
        </div>
        {/* Your imported cart component */}
        <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
          <WomenWeddingShoppingCart />
        </div>
      </div>

      {/* ✅ Main Page (product detail) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side - Images */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {imageUrls.map((url, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg border-2 transition-all overflow-hidden ${
                  selectedImage === index 
                    ? 'border-gray-800 scale-105' 
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <img src={url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="flex-1 rounded-lg flex items-center justify-center min-h-[500px] bg-gray-50 border border-gray-200 overflow-hidden">
            <img src={imageUrls[selectedImage]} alt="Main product" className="max-h-[500px] object-contain p-4" />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium text-gray-900 mb-3">Women Slipper Heels-IVORY</h1>
          <div className="text-3xl font-semibold text-gray-900 mb-4">PKR 4,200</div>

          <div className="bg-purple-600 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-6 w-fit">
            <span className="font-bold text-sm">badmou</span>
            <span className="text-sm">Pay in 3 Installments of Rs. 1,610</span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            This sleek Women Slipper Heel is the perfect choice for formal occasions.
            The stylish design and comfortable fit provide a touch of elegance while
            keeping you on your feet all night long.
          </p>

          {/* Color */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold text-gray-900">COLOR:</span>
              <span className="text-sm text-gray-600">{selectedColor}</span>
            </div>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-10 h-10 rounded border-2 ${color.color} ${
                    selectedColor === color.name 
                      ? 'border-gray-900 ring-2 ring-offset-2 ring-gray-900' 
                      : 'border-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold text-gray-900">SIZE:</span>
              <span className="text-sm text-gray-600">{selectedSize}</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
                    selectedSize === size
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-full">
              <button onClick={decrement} className="p-3 hover:bg-gray-100 rounded-l-full transition-colors">
                <Minus size={16} />
              </button>
              <span className="px-6 font-medium">{quantity}</span>
              <button onClick={increment} className="p-3 hover:bg-gray-100 rounded-r-full transition-colors">
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* ✅ Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setShowCart(true)} // ✅ show cart when clicked
              className="flex-1 bg-indigo-900 text-white py-4 rounded-full font-semibold hover:bg-indigo-800 transition-colors"
            >
              Add to cart
            </button>
            <button className="p-4 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              <Heart size={24} />
            </button>
          </div>

        </div>
      </div>
      <YouMightAlsoLike />
    </div>
  );
}
