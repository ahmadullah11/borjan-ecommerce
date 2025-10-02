import React, { useState } from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const InstaStyleFeed = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      type: "video",
      src: "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQM0CoxnMLBucXN24Fb_ZmYcqrolSbGBwSAqiGzx-OhoKp3DrsFbOLx0j1meB44Awb4DNTHfVgvRDAtXT62MoYV6TMMAKCrhObHSGN4.mp4?_nc_cat=107&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=EXo4Li0nXNEQ7kNvwEhqYt9&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTExOTk3MDQxNjkxMDQxMSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjQyLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=84f7ac4701a1551e&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9EOTRCRThDQzMxODRGM0JBRDg3N0QxMTlBNDJBNDg4Rl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQVg2QlNGS1c3TWREbjRGQU1fcUVONXRJSVpOYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmloHf7e2m_QMVAigCQzMsF0BFVWBBiTdMGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=lv9rkLUP2Q3uRM6xfRv_hA&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQEPtnJJMKQwleyOuumeJtvdP096E3Tt76xWBMoFh63sbIaNEUR1C-3IfzgR_mh0PjDaPqGTFfMV&oh=00_AfZOc1HdgBo0zeub0V8faaFoUjj5kGNXPbK1cc7353MtaQ&oe=68DEC984",
      icon: <MdSlowMotionVideo className="text-4xl" />,
    },
    {
      type: "image",
      src: "https://scontent.cdninstagram.com/v/t39.30808-6/556074636_1223836633110107_2613410011436947779_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=mQ9y1NFkYrwQ7kNvwFe0m5o&_nc_oc=AdkdxjijIGMMU3Zu-p703Js_3-0F055gJdHn9S9ucLBak02jIK3pfRXV2H035VJWlb8&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=CHoGUrdggx074UqJkfRKCw&oh=00_AfaVLb1kfgCUGBdipGGzQV2Tn1nTiAVeNNH8qCIa8pdcxg&oe=68E2E95D",
      icon: <FaInstagram className="text-4xl" />,
    },
    {
      type: "video",
      src: "https://scontent.cdninstagram.com/o1/v/t2/f2/m86/AQP4SA6prCRuVINdxS0TMWhbfdGZIRod-6ELZpKM6wSM_ay8t9XGdE6ko4onnHlLg-ZQ7g66ov1GcxUCk8r7DHXGMc1c1el9HGDIzTQ.mp4?_nc_cat=101&_nc_sid=5e9851&_nc_ht=scontent.cdninstagram.com&_nc_ohc=gBy3LKoZD3AQ7kNvwE9RsNV&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6Mzc4MjczMDY1MjAzMjE0MiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=aa1f4d97013e7a8c&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC83QjQ2QkMzNjcwQkJDRERBRUYwREVDMkJBQkU1NTQ5OF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HT1NaOFNBM0N2S3RsLWNEQU14VmhaZVd2OHBRYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmnPLczPOXuA0VAigCQzMsF0Avan752yLRGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=CHoGUrdggx074UqJkfRKCw&edm=ANo9K5cEAAAA&_nc_zt=28&_nc_tpa=Q5bMBQGTr69cxnagNQ-mxUx3Imh4gqCRyUdr40pY54lOETVsKl-dVOJgt2Tg5j0b3ZGf7RQf9NzxuJOn&oh=00_Afap7wJ4N-HzHMyPBHGp19u6h6oKdVOehLiApBsPqnj9Mw&oe=68DED8C2",
      icon: <MdSlowMotionVideo className="text-4xl" />,
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaInstagram className="text-4xl" />,
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaInstagram className="text-4xl" />,
    },
  ];

  const openModal = (item) => {
    setModalContent(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  // Carousel navigation
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 4 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 4 >= items.length ? 0 : prev + 1
    );
  };

  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 max-w-screen-2xl mx-auto">
      {/* Section Title */}
      <div className="flex items-center justify-center mb-10">
        <h2 className="text-xl md:text-2xl font-semibold uppercase tracking-wider">
          INSTA STYLE FEED
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute -left-6 md:-left-10 bg-black text-white p-3 rounded-full z-10 hover:bg-gray-800"
        >
          <IoIosArrowBack size={24} />
        </button>

        {/* Visible Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer group h-72 md:h-96"
              onClick={() => openModal(item)}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={`Item ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white">{item.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute -right-6 md:-right-10 bg-black text-white p-3 rounded-full z-10 hover:bg-gray-800"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>

      {/* Modal */}
      {showModal && modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <button
                onClick={closeModal}
                className="float-right text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ×
              </button>
              <div className="mt-4">
                {modalContent.type === "video" ? (
                  <video
                    src={modalContent.src}
                    controls
                    className="w-full max-h-[70vh] object-contain"
                    autoPlay
                  />
                ) : (
                  <img
                    src={modalContent.src}
                    alt="Modal content"
                    className="w-full max-h-[70vh] object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstaStyleFeed;
