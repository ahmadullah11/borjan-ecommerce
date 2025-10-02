import React from "react";

const ShopByCollection = () => {
  const collections = [
    {
      id: 1,
      image:
        "https://www.borjan.com.pk/cdn/shop/files/SKYWALK.jpg?v=1753185718&width=990",
      colSpan: "col-span-2 row-span-2", // Full height left side
    },
    {
      id: 2,
      image:
        "https://www.borjan.com.pk/cdn/shop/files/tot-ba-tot.jpg?v=1753185453&width=990",
      colSpan: "col-span-8", // Top right big
    },
    {
      id: 3,
      image:
        "https://www.borjan.com.pk/cdn/shop/files/DIGGER_347ce096-36ee-4db3-8643-d8b26d4908a0.jpg?v=1753185719&width=990",
      colSpan: "col-span-2 row-span-1", // Match height with id:2
    },
    {
      id: 4,
      image:
        "https://www.borjan.com.pk/cdn/shop/files/gen-z_dc72c6ae-27c7-4032-b6d9-e9ad745297ed.jpg?v=1753185613&width=990",
      colSpan: "col-span-2 row-span-1", // Match height with id:5
    },
    {
      id: 5,
      image:
        "https://www.borjan.com.pk/cdn/shop/files/Ba-collection_dc71f3b4-cb5d-48bd-a688-93d7251d0499.jpg?v=1748340908&width=990",
      colSpan: "col-span-8", // Bottom right big
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-4">
          <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-0.5 bg-black"></span>
          Shop by Collection
          <span className="hidden sm:block w-16 md:w-24 lg:w-32 h-0.5 bg-black"></span>
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 grid-rows-2 gap-4">
          {collections.map((item) => (
            <div
              key={item.id}
              className={`${item.colSpan} relative rounded-lg overflow-hidden group cursor-pointer`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`Collection ${item.id}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />

              {/* Just dark hover effect */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCollection;
