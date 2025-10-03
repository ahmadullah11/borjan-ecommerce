import { useState } from 'react';
import { Heart, Minus, Plus } from 'lucide-react';

export default function WomenWeddingProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('36');
  const [selectedColor, setSelectedColor] = useState('IVORY');

  const thumbnails = [
    { id: 0, bg: 'bg-gradient-to-br from-gray-100 to-gray-200' },
    { id: 1, bg: 'bg-gradient-to-br from-amber-50 to-stone-100' },
    { id: 2, bg: 'bg-gradient-to-br from-stone-100 to-amber-100' },
    { id: 3, bg: 'bg-gradient-to-br from-gray-50 to-stone-200' }
  ];

  const sizes = ['36', '37', '38', '39', '40', '41'];
  const colors = [
    { name: 'IVORY', color: 'bg-amber-100 border-amber-300' }
  ];

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="min-h-screen bg-white p-6 lg:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side - Images */}
        <div className="flex gap-4">
          {/* Thumbnail Column */}
          <div className="flex flex-col gap-3">
            {thumbnails.map((thumb) => (
              <button
                key={thumb.id}
                onClick={() => setSelectedImage(thumb.id)}
                className={`w-20 h-20 rounded-lg ${thumb.bg} border-2 transition-all ${
                  selectedImage === thumb.id 
                    ? 'border-gray-800 scale-105' 
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                  {thumb.id === 0 && '👠'}
                  {thumb.id === 1 && '👡'}
                  {thumb.id === 2 && '📦'}
                  {thumb.id === 3 && '👢'}
                </div>
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className={`flex-1 ${thumbnails[selectedImage].bg} rounded-lg flex items-center justify-center min-h-[500px] relative`}>
            <div className="absolute top-6 left-6 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
              Borjan
            </div>
            <div className="text-6xl">👠</div>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-medium text-gray-900 mb-3">
            Women Slipper Heels-IVORY
          </h1>

          <div className="text-3xl font-semibold text-gray-900 mb-4">
            PKR 4,200
          </div>

          <div className="bg-purple-600 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-6 w-fit">
            <span className="font-bold text-sm">badmou</span>
            <span className="text-sm">Pay in 3 Installments of Rs. 1,610</span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            This sleek Women Slipper Heel is the perfect choice for formal occasions. 
            The stylish design and comfortable fit provide a touch of elegance while 
            keeping you on your feet all night long. Made for women who value both 
            fashion and comfort.
          </p>

          {/* Color Selection */}
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

          {/* Size Selection */}
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

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-full">
              <button
                onClick={decrement}
                className="p-3 hover:bg-gray-100 rounded-l-full transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="px-6 font-medium">{quantity}</span>
              <button
                onClick={increment}
                className="p-3 hover:bg-gray-100 rounded-r-full transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex-1 bg-indigo-900 text-white py-4 rounded-full font-semibold hover:bg-indigo-800 transition-colors">
              Add to cart
            </button>
            <button className="p-4 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              <Heart size={24} />
            </button>
          </div>

          {/* Product Info */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center gap-4 text-sm mb-2">
              <span className="text-gray-600">Barcode:</span>
              <span className="font-medium text-gray-900">A14005674</span>
            </div>
            <div className="flex items-center gap-4 text-sm mb-4">
              <span className="text-gray-600">Availability:</span>
              <span className="font-medium text-green-600">In stock</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm font-medium text-gray-900 border-t border-gray-200 pt-4">
            <button className="hover:text-indigo-900 transition-colors">Size Chart</button>
            <button className="hover:text-indigo-900 transition-colors">Exchange Policy</button>
            <button className="hover:text-indigo-900 transition-colors">Ask a Question</button>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="fixed bottom-6 left-6 bg-gray-900 text-white p-4 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"/>
        </svg>
      </div>

      <div className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full cursor-pointer hover:bg-green-600 transition-colors shadow-lg">
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.18 0-.42.06-.59.27-.17.21-.65.64-.65 1.56 0 .92.67 1.81.76 1.94.09.13 1.26 1.99 3.11 2.72.85.34 1.34.36 1.82.31.3-.03.91-.37 1.04-.73.13-.36.13-.67.09-.73-.04-.06-.17-.1-.36-.18-.19-.08-.91-.45-1.05-.5-.14-.05-.29-.08-.44.08-.15.16-.56.7-.68.84-.12.14-.24.16-.43.08-.19-.08-.82-.3-1.56-.96-.58-.51-.97-1.14-1.08-1.33-.11-.19-.01-.29.08-.38.08-.08.19-.21.28-.32.09-.11.12-.19.18-.32.06-.13.03-.24-.02-.32-.05-.08-.44-1.12-.62-1.53-.17-.39-.34-.34-.44-.34-.1-.01-.23-.01-.35-.01"/>
        </svg>
      </div>
    </div>
  );
}