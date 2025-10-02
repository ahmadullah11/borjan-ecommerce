import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickShopHovered, setIsQuickShopHovered] = useState(false);

  const displayPrice = product.salePrice || product.originalPrice;

  return (
    <div 
      className="relative bg-gray-100 rounded-lg overflow-hidden group"
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
          className="w-full h-[450px] object-cover transition-all duration-500" 
        />

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-x-0 bottom-0 transition-all duration-300">
            {/* Sizes */}
            <div className="px-4 py-2">
              <div className="flex justify-center items-center gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="w-10 h-8 text-gray-700 hover:text-gray-900 transition-all text-sm font-medium"
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

      {/* Product Info — CENTERED TEXT */}
      <div className="p-4 bg-white text-center">
        <h3 className="text-sm font-medium mb-2 hover:underline cursor-pointer mx-auto">
          {product.name}
        </h3>
        
        {/* Regular price in gray, no strikethrough */}
        <div className="text-gray-500 text-sm mb-2">
          Regular price PKR {product.originalPrice.toLocaleString()}
        </div>

        {/* Only show sale price if it exists and is different */}
        {product.salePrice && product.salePrice !== product.originalPrice && (
          <div className="text-red-600 font-bold text-lg mb-2">
            PKR {product.salePrice.toLocaleString()}
          </div>
        )}

        {/* EMI Banner - Centered */}
        <div className="flex justify-center">
          <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded flex items-center gap-1 text-xs">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
            </svg>
            <span className="font-medium">Pay only Rs. {Math.floor(displayPrice / 3).toLocaleString()} now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FavoritesWeddingSection = () => {
  const [activeTab, setActiveTab] = useState('Women');
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = ['Women', 'Men', 'Bags & Clutches'];

  const allProducts = {
    Women: [
      {
        id: 1,
        name: 'Women Slipper Heels-LIGHT BLUE',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkseKh79sZX2VBjTCZ9k2HD2q1mFkjdZiWA&s',
        hoverImage: 'https://ae01.alicdn.com/kf/S6f27778ee60640ff8120ab40091a0fa5V.jpg',
        originalPrice: 3888,
        sizes: [36, 37, 38, 39, 40, 41]
      },
      {
        id: 2,
        name: 'Women Slipper Heels-GOLDEN',
        image: 'https://www.borjan.com.pk/cdn/shop/files/1_af359e79-f055-4d5b-814c-d0f85669e1d1.png?v=1757096655',
        hoverImage: 'https://www.borjan.com.pk/cdn/shop/files/4_af6d834a-66be-4d3f-bfa1-14cd84531ee9.png?v=1757096655&width=1445',
        originalPrice: 4405,
        sizes: [36, 37, 38, 39, 40, 41]
      },
      {
        id: 3,
        name: 'Women Slipper Heels-KHAKI',
        image: 'https://www.borjan.com.pk/cdn/shop/files/B14006552-BLACK.png?v=1757097711',
        hoverImage: 'https://www.borjan.com.pk/cdn/shop/files/4_2919059b-ffe6-4589-880b-007aad1061ed.png?v=1757097711&width=1445',
        originalPrice: 4300,
        sizes: [36, 37, 38, 39, 40, 41]
      },
      {
        id: 4,
        name: 'Women Slipper Heels-TAN',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhefr8XHGUSBfN1xLyF9f701tOMMdXWPi9Fg&s',
        hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYvYGiJkq7jMrgzKm7I6VgnRvnoXtFr9OZg&s',
        originalPrice: 3800,
        sizes: [36, 37, 38, 39, 40, 41]
      },
      {
        id: 5,
        name: 'Women Slipper Heels-BEIGE',
        image: 'https://1ststep.pk/cdn/shop/files/seraphina_gold_heel_slippers_0412464_1_800x.webp?v=1726505569',
        hoverImage: 'https://rukminim2.flixcart.com/image/480/640/xif0q/shopsy-sandal/r/l/6/6-akh-001-6-ak-sky-white-original-imah8rfrzbmb8dkc.jpeg?q=90',
        originalPrice: 3500,
        sizes: [36, 37, 38, 39, 40, 41]
      }
    ],
    Men: [
      {
        id: 6,
        name: 'Men Formal Shoes-BLACK',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UkugrxSICS6s-KqlMDgxfoiivCv7J5fZw&s',
        hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qOJ76Fbk6jDmeFqUdSsOjTrMExGobfbXjwLDA6KPp3tD5-0LHRrzd5jntXqOdJJUa8w&usqp=CAU',
        originalPrice: 4500,
        sizes: [40, 41, 42, 43, 44, 45]
      },
      {
        id: 7,
        name: 'Men Casual Sneakers-WHITE',
        image: 'https://img.joomcdn.net/63cac80ca22a7a44a15963c06857f3e7091c2e11_original.jpeg',
        hoverImage: 'https://i.ebayimg.com/images/g/03cAAOSwyOBguPwa/s-l1200.jpg',
        originalPrice: 5200,
        sizes: [40, 41, 42, 43, 44, 45]
      },
      {
        id: 8,
        name: 'Men Loafers-BROWN',
        image: 'https://starlet.pk/cdn/shop/files/AB-410-4A-BRN-_3.jpg?v=1757007803&width=1500',
        hoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjabojB1m9hZMFk9BrDJilaL4ebib_SoC9EAW30OmVcLqDScrdfeFtUBoKgLLHkdaYUE&usqp=CAU',
        originalPrice: 3800,
        salePrice: 2660,
        sizes: [40, 41, 42, 43, 44, 45]
      },
      {
        id: 9,
        name: 'Men Sandals-TAN',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKs6aE6wfsj-eHEyj02AWqoxt8PkSN2UO0JGYlR6zofn3QfagH0OEBIhaBFhcsBhw2MD4&usqp=CAU',
        hoverImage: 'https://www.shutterstock.com/image-photo/brown-leather-sandals-on-mans-260nw-507206347.jpg',
        originalPrice: 2900,
        sizes: [40, 41, 42, 43, 44, 45]
      }
    ],
    'Bags & Clutches': [
      {
        id: 10,
        name: 'Leather Shoulder Bag-BLACK',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
        hoverImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
        originalPrice: 6500,
        sizes: [1]
      },
      {
        id: 11,
        name: 'Clutch Bag-GOLD',
        image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop',
        hoverImage: 'https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=400&h=400&fit=crop',
        originalPrice: 3500,
        sizes: [1]
      },
      {
        id: 12,
        name: 'Tote Bag-BEIGE',
        image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=400&fit=crop',
        hoverImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
        originalPrice: 5800,
        sizes: [1]
      },
      {
        id: 13,
        name: 'Crossbody Bag-BROWN',
        image: 'https://images.unsplash.com/photo-1564422170194-896b89110ef8?w=400&h=400&fit=crop',
        hoverImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
        originalPrice: 4200,
        sizes: [1]
      }
    ]
  };

  const products = allProducts[activeTab];
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-full mx-0">
        <div className="text-center mb-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm sm:text-3xl lg:text-4xl font-bold mb-6 flex items-center justify-center gap-4">
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-0.5 bg-black"></span>
            Your Favorites From Sale!
            <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-0.5 bg-black"></span>
          </h2>

          <div className="flex justify-center gap-6 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`text-sm sm:text-base font-medium pb-2 transition-colors ${
                  activeTab === tab
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed ml-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed mr-2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FavoritesWeddingSection;