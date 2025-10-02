import React from 'react';

const ShopByCategories = () => {
  const categories = [
    {
      id: 1,
      image: 'https://www.borjan.com.pk/cdn/shop/files/Men_7374f796-4be0-4fd3-bb05-c669d4bacd75.png?v=1759254103&width=990',
      link: '#men'
    },
    {
      id: 2,
      image: 'https://www.borjan.com.pk/cdn/shop/files/Women_5a9038e0-22f8-4b90-a531-f05626c1a709.png?v=1759254103&width=990',
      link: '#women'
    },
    {
      id: 3,
      image: 'https://www.borjan.com.pk/cdn/shop/files/1_d9558a27-0e8a-44c5-933d-2e3524889d5a.png?v=1759253983&width=990',
      link: '#new-in'
    },
    {
      id: 4,
      image: 'https://www.borjan.com.pk/cdn/shop/files/Bag.png?v=1759254103&width=990',
      link: '#bags'
    },
    {
      id: 5,
      image: 'https://www.borjan.com.pk/cdn/shop/files/kids.jpg?v=1753184982&width=990',
      link: '#kids'
    }
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center justify-center gap-4">
            <span className="w-16 md:w-24 lg:w-32 h-0.5 bg-black"></span>
            Shop by Categories
            <span className="w-16 md:w-24 lg:w-32 h-0.5 bg-black"></span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-fr">
          {/* Left Column - Men & Women (Square) */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {categories.slice(0, 2).map((category) => (
              <a
                key={category.id}
                href={category.link}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
              >
                <img
                  src={category.image}
                  alt="Category"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Center Column - New In (Double size - 2 columns) */}
          <div className="md:col-span-2 lg:col-span-2 md:row-span-1">
            <a
              href={categories[2].link}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 block h-full"
            >
              <img
                src={categories[2].image}
                alt="New In"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </a>
          </div>

          {/* Right Column - Bags & Kids (Square) */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {categories.slice(3, 5).map((category) => (
              <a
                key={category.id}
                href={category.link}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
              >
                <img
                  src={category.image}
                  alt="Category"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* WhatsApp & 360 View Buttons */}
        <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-50">
          {/* 360 View Button */}
          <button className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                <text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">360°</text>
              </svg>
            </div>
          </button>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ShopByCategories;