import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SbuGallery.css";
import { Pagination } from "swiper";



const SubGallery = () => {


  return (
    <div >
       <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
            clickable: true, 
          }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{ delay: 0 }} 
      >
        <SwiperSlide> <img src="https://source.unsplash.com/random/241x361/?1" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://source.unsplash.com/random/241x361/?2" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://source.unsplash.com/random/241x361/?3" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://source.unsplash.com/random/241x361/?4" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://source.unsplash.com/random/241x361/?5" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://source.unsplash.com/random/241x361/?1" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://source.unsplash.com/random/241x361/?1" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://source.unsplash.com/random/241x361/?1" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://source.unsplash.com/random/241x361/?1" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://source.unsplash.com/random/241x361/?1" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://source.unsplash.com/random/241x361/?1" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://source.unsplash.com/random/241x361/?1" alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default SubGallery;











