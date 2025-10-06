import React from "react";

export default function YouMightAlsoLike() {
  const relatedProducts = [
    {
      name: "Women Slipper Heels-GOLDEN",
      price: 6200,
      installment: 2377,
      image:
        "https://img4.dhresource.com/webp/m/f3/albu/jc/g/14/9fa48b15-bbba-4c65-81b6-3916dbb05dd0.jpg",
    },
    {
      name: "Women Slipper Heels-SILVER",
      price: 4000,
      installment: 1533,
      image:
        "https://snfproducts.pk/wp-content/uploads/2024/09/WhatsApp-Image-2024-10-10-at-05.53.05-1.jpeg",
    },
    {
      name: "Women Sandal Heels-BLACK",
      price: 4400,
      installment: 1687,
      image:
        "https://n.nordstrommedia.com/it/8de0f791-9861-4f67-bc07-ac1a6ad33ee5.jpeg?h=368&w=240&dpr=2",
    },
    {
      name: "Women Slipper Heels-GOLDEN",
      price: 4200,
      installment: 1610,
      image:
        "https://snfproducts.pk/wp-content/uploads/2023/07/WhatsApp-Image-2023-08-07-at-4.23.30-PM-1.jpeg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-20 border-t border-gray-200 pt-12">
      {/* Heading */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="h-px w-16 bg-gray-300"></div>
        <h2 className="text-3xl font-medium text-gray-900">
          You Might Also Like
        </h2>
        <div className="h-px w-16 bg-gray-300"></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="aspect-square rounded-lg mb-4 overflow-hidden bg-gray-50 border border-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              {product.name}
            </h3>
            <p className="text-lg font-semibold text-gray-900 mb-1">
              PKR {product.price.toLocaleString()}
            </p>
            <div className="flex items-center gap-2 text-xs text-purple-600">
              <span className="bg-purple-600 text-white px-1.5 py-0.5 rounded font-bold">
                B
              </span>
              <span>
                Pay only Rs. {product.installment.toLocaleString()} now
              </span>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
