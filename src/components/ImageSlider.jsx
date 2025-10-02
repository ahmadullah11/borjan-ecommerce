import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider() {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        className="w-full h-full"
        onInit={(swiper) => {
          // attach custom buttons
          swiper.params.navigation.prevEl = ".custom-prev";
          swiper.params.navigation.nextEl = ".custom-next";
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img
            src="https://images.vexels.com/media/users/3/194700/raw/aa5b7c80ff2c80f764e2cabf5492a701-buy-online-slider-template.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_1280.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_640.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Custom Arrows */}
      <button
        className="custom-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 
        bg-transparent text-black rounded-full p-2 transition duration-300 
        hover:bg-black hover:text-white"
      >
        <IoIosArrowDropleft size={30} />
      </button>

      <button
        className="custom-next absolute top-1/2 right-4 z-10 -translate-y-1/2 
        bg-transparent text-black rounded-full p-2 transition duration-300 
        hover:bg-black hover:text-white"
      >
        <IoIosArrowDropright size={30} />
      </button>
    </div>
  );
}
