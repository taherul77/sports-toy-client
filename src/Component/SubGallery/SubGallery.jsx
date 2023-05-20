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
        <SwiperSlide> <img className="shadow-sm bg-slate-200 rounded-xl" src="https://i.ibb.co/R780MCw/venson-kinkong-x7-badminton-racket-removebg-preview.png" alt="" /></SwiperSlide>
        <SwiperSlide> <img className="shadow-sm bg-slate-200 rounded-xl" src="https://i.ibb.co/35Xc7Mp/0336463-super-cricket-bat-removebg-preview.png" alt="" /></SwiperSlide>
        <SwiperSlide> <img className="shadow-sm bg-slate-200 rounded-xl" src="https://i.ibb.co/pRcm8RQ/Expert1-Transparent-removebg-preview.png" alt="" /></SwiperSlide>
        <SwiperSlide> <img className="shadow-sm bg-slate-200 rounded-xl" src="https://i.ibb.co/s5nZFR8/51e-Gqbwh-RCL-removebg-preview.png" alt="" /></SwiperSlide>
        <SwiperSlide> <img className="shadow-sm bg-slate-200 rounded-xl" src="https://i.ibb.co/PDQg8gQ/images-2-removebg-preview.png" alt="" /></SwiperSlide>
        <SwiperSlide> <img className="shadow-sm bg-slate-200 rounded-xl" src="https://i.ibb.co/gt5Y2P0/85035769-h-removebg-preview.png" alt="" /></SwiperSlide>
        <SwiperSlide> <img className="shadow-sm bg-slate-200 rounded-xl" src="" alt="" /></SwiperSlide>
        <SwiperSlide> <img className="shadow-sm bg-slate-200 rounded-xl" src="" alt="" /></SwiperSlide>
        <SwiperSlide> <img className="shadow-sm bg-slate-200 rounded-xl" src="" alt="" /></SwiperSlide>
        <SwiperSlide> <img className="shadow-sm bg-slate-200 rounded-xl" src="" alt="" /></SwiperSlide>
        <SwiperSlide> <img className="shadow-sm bg-slate-200 rounded-xl" src="" alt="" /></SwiperSlide>
       
        
      </Swiper>
    </div>
  );
};

export default SubGallery;











