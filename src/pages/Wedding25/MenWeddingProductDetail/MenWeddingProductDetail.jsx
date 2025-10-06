// import { useState } from 'react';
// import { Heart, Minus, Plus } from 'lucide-react';

// export default function MenWeddingProductDetail() {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState('36');
//   const [selectedColor, setSelectedColor] = useState('IVORY');

//   // ✅ Replace with your real image URLs
//   const imageUrls = [
//     "https://img4.dhresource.com/webp/m/f3/albu/jc/g/14/9fa48b15-bbba-4c65-81b6-3916dbb05dd0.jpg",
//     "https://snfproducts.pk/wp-content/uploads/2024/09/WhatsApp-Image-2024-10-10-at-05.53.05-1.jpeg",
//     "https://n.nordstrommedia.com/it/8de0f791-9861-4f67-bc07-ac1a6ad33ee5.jpeg?h=368&w=240&dpr=2",
//     "https://snfproducts.pk/wp-content/uploads/2023/07/WhatsApp-Image-2023-08-07-at-4.23.30-PM-1.jpeg"
//   ];

//   const sizes = ['36', '37', '38', '39', '40', '41'];
//   const colors = [
//     { name: 'IVORY', color: 'bg-amber-100 border-amber-300' }
//   ];

//   const relatedProducts = [
//     {
//       name: 'Women Slipper Heels-GOLDEN',
//       price: 6200,
//       installment: 2377,
//       image: 'https://img4.dhresource.com/webp/m/f3/albu/jc/g/14/9fa48b15-bbba-4c65-81b6-3916dbb05dd0.jpg'
//     },
//     {
//       name: 'Women Slipper Heels-SILVER',
//       price: 4000,
//       installment: 1533,
//       image: 'https://snfproducts.pk/wp-content/uploads/2024/09/WhatsApp-Image-2024-10-10-at-05.53.05-1.jpeg'
//     },
//     {
//       name: 'Women Sandal Heels-BLACK',
//       price: 4400,
//       installment: 1687,
//       image: 'https://n.nordstrommedia.com/it/8de0f791-9861-4f67-bc07-ac1a6ad33ee5.jpeg?h=368&w=240&dpr=2'
//     },
//     {
//       name: 'Women Slipper Heels-GOLDEN',
//       price: 4200,
//       installment: 1610,
//       image: 'https://snfproducts.pk/wp-content/uploads/2023/07/WhatsApp-Image-2023-08-07-at-4.23.30-PM-1.jpeg'
//     }
//   ];

//   const increment = () => setQuantity(q => q + 1);
//   const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

//   return (
//     <div className="min-h-screen bg-white p-6 lg:p-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
//         {/* Left Side - Images */}
//         <div className="flex gap-4">
//           {/* Thumbnail Column */}
//           <div className="flex flex-col gap-3">
//             {imageUrls.map((url, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`w-20 h-20 rounded-lg border-2 transition-all overflow-hidden ${
//                   selectedImage === index 
//                     ? 'border-gray-800 scale-105' 
//                     : 'border-gray-200 hover:border-gray-400'
//                 }`}
//               >
//                 <img
//                   src={url}
//                   alt={`Thumbnail ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </button>
//             ))}
//           </div>

//           {/* Main Image */}
//           <div className="flex-1 rounded-lg flex items-center justify-center min-h-[500px] bg-gray-50 border border-gray-200 overflow-hidden">
//             <img
//               src={imageUrls[selectedImage]}
//               alt="Main product"
//               className="max-h-[500px] object-contain p-4"
//             />
//           </div>
//         </div>

//         {/* Right Side - Product Details */}
//         <div className="flex flex-col">
//           <h1 className="text-3xl font-medium text-gray-900 mb-3">
//             Women Slipper Heels-IVORY
//           </h1>

//           <div className="text-3xl font-semibold text-gray-900 mb-4">
//             PKR 4,200
//           </div>

//           <div className="bg-purple-600 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-6 w-fit">
//             <span className="font-bold text-sm">badmou</span>
//             <span className="text-sm">Pay in 3 Installments of Rs. 1,610</span>
//           </div>

//           <p className="text-gray-600 text-sm leading-relaxed mb-6">
//             This sleek Women Slipper Heel is the perfect choice for formal occasions. 
//             The stylish design and comfortable fit provide a touch of elegance while 
//             keeping you on your feet all night long. Made for women who value both 
//             fashion and comfort.
//           </p>

//           {/* Color Selection */}
//           <div className="mb-6">
//             <div className="flex items-center gap-2 mb-3">
//               <span className="text-sm font-semibold text-gray-900">COLOR:</span>
//               <span className="text-sm text-gray-600">{selectedColor}</span>
//             </div>
//             <div className="flex gap-2">
//               {colors.map((color) => (
//                 <button
//                   key={color.name}
//                   onClick={() => setSelectedColor(color.name)}
//                   className={`w-10 h-10 rounded border-2 ${color.color} ${
//                     selectedColor === color.name 
//                       ? 'border-gray-900 ring-2 ring-offset-2 ring-gray-900' 
//                       : 'border-gray-300'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Size Selection */}
//           <div className="mb-6">
//             <div className="flex items-center gap-2 mb-3">
//               <span className="text-sm font-semibold text-gray-900">SIZE:</span>
//               <span className="text-sm text-gray-600">{selectedSize}</span>
//             </div>
//             <div className="flex gap-2 flex-wrap">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all ${
//                     selectedSize === size
//                       ? 'bg-gray-900 text-white border-gray-900'
//                       : 'bg-white text-gray-700 border-gray-300 hover:border-gray-900'
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity Selector */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className="flex items-center border border-gray-300 rounded-full">
//               <button
//                 onClick={decrement}
//                 className="p-3 hover:bg-gray-100 rounded-l-full transition-colors"
//               >
//                 <Minus size={16} />
//               </button>
//               <span className="px-6 font-medium">{quantity}</span>
//               <button
//                 onClick={increment}
//                 className="p-3 hover:bg-gray-100 rounded-r-full transition-colors"
//               >
//                 <Plus size={16} />
//               </button>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-3 mb-6">
//             <button className="flex-1 bg-indigo-900 text-white py-4 rounded-full font-semibold hover:bg-indigo-800 transition-colors">
//               Add to cart
//             </button>
//             <button className="p-4 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
//               <Heart size={24} />
//             </button>
//           </div>

//           {/* Product Info */}
//           <div className="border-t border-gray-200 pt-4">
//             <div className="flex items-center gap-4 text-sm mb-2">
//               <span className="text-gray-600">Barcode:</span>
//               <span className="font-medium text-gray-900">A14005674</span>
//             </div>
//             <div className="flex items-center gap-4 text-sm mb-4">
//               <span className="text-gray-600">Availability:</span>
//               <span className="font-medium text-green-600">In stock</span>
//             </div>
//           </div>

//           {/* Links */}
//           <div className="flex gap-6 text-sm font-medium text-gray-900 border-t border-gray-200 pt-4">
//             <button className="hover:text-indigo-900 transition-colors">Size Chart</button>
//             <button className="hover:text-indigo-900 transition-colors">Exchange Policy</button>
//             <button className="hover:text-indigo-900 transition-colors">Ask a Question</button>
//           </div>
//         </div>
//       </div>

//       {/* You Might Also Like Section */}
//       <div className="max-w-7xl mx-auto mt-20 border-t border-gray-200 pt-12">
//         <div className="flex items-center justify-center gap-4 mb-10">
//           <div className="h-px w-16 bg-gray-300"></div>
//           <h2 className="text-3xl font-medium text-gray-900">You Might Also Like</h2>
//           <div className="h-px w-16 bg-gray-300"></div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {relatedProducts.map((product, idx) => (
//             <div key={idx} className="group cursor-pointer">
//               <div className="aspect-square rounded-lg mb-4 overflow-hidden bg-gray-50 border border-gray-200">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover transition-transform group-hover:scale-105"
//                 />
//               </div>
//               <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
//               <p className="text-lg font-semibold text-gray-900 mb-1">
//                 PKR {product.price.toLocaleString()}
//               </p>
//               <div className="flex items-center gap-2 text-xs text-purple-600">
//                 <span className="bg-purple-600 text-white px-1.5 py-0.5 rounded font-bold">B</span>
//                 <span>Pay only Rs. {product.installment.toLocaleString()} now</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Customer Reviews Section */}
//       <div className="max-w-7xl mx-auto mt-20 border-t border-gray-200 pt-12">
//         <h2 className="text-3xl font-medium text-gray-900 text-center mb-10">Customer Reviews</h2>
        
//         <div className="flex flex-col items-center justify-center gap-4">
//           <div className="flex gap-1">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <svg
//                 key={star}
//                 className="w-6 h-6 text-gray-300"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//               </svg>
//             ))}
//           </div>
//           <p className="text-gray-600 text-sm">Be the first to write a review</p>
//           <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-2">
//             Write a review
//           </button>
//         </div>
//       </div>

//       {/* Floating Icons */}
//       <div className="fixed bottom-6 left-6 bg-gray-900 text-white p-4 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
//         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"/>
//         </svg>
//       </div>

//       <div className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full cursor-pointer hover:bg-green-600 transition-colors shadow-lg">
//         <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.18 0-.42.06-.59.27-.17.21-.65.64-.65 1.56 0 .92.67 1.81.76 1.94.09.13 1.26 1.99 3.11 2.72.85.34 1.34.36 1.82.31.3-.03.91-.37 1.04-.73.13-.36.13-.67.09-.73-.04-.06-.17-.1-.36-.18-.19-.08-.91-.45-1.05-.5-.14-.05-.29-.08-.44.08-.15.16-.56.7-.68.84-.12.14-.24.16-.43.08-.19-.08-.82-.3-1.56-.96-.58-.51-.97-1.14-1.08-1.33-.11-.19-.01-.29.08-.38.08-.08.19-.21.28-.32.09-.11.12-.19.18-.32.06-.13.03-.24-.02-.32-.05-.08-.44-1.12-.62-1.53-.17-.39-.34-.34-.44-.34-.1-.01-.23-.01-.35-.01"/>
//         </svg>
//       </div>
//     </div>
//   );
// }