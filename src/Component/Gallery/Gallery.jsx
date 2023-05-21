import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Gallery = () => {
  useEffect(() => {
    AOS.init();
}, []);


  return (
    <div>
      <section data-aos="fade-up" className="py-6 ">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
              className="object-cover w-full shadow-sm bg-slate-200  rounded-3xl"
              src="https://i.ibb.co/QPN9KgQ/360-F-56891171-Of5iv-HXk3y-We-Ja-X7t-Za-EYP9osibeas-Jo-removebg-preview.png"
            />
            <img
              className="object-cover w-full shadow-sm bg-slate-200 rounded-3xl"
              src="https://i.ibb.co/pPCptwQ/2020-Easton-ADV-360-USA-Transparent-Long-Product-removebg-preview.png"
            />
            <img
              className="object-cover  shadow-sm bg-slate-200  w-full  rounded-3xl"
              src="https://i.ibb.co/M5VHKGt/0325468-fcb-football-300-removebg-preview.png"
            />
            <img
              className="object-cover  shadow-sm bg-slate-200  w-full  rounded-3xl"
              src="https://i.ibb.co/KrhtL0j/photo-1609710228159-0fa9bd7c0827-removebg-preview.png"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 mt-6">
            <img
              className="object-cover  shadow-sm bg-slate-200  w-full  rounded-3xl"
              src="https://i.ibb.co/3cvJ5F6/football-157930-1280-removebg-preview.png"
            />
            <img
              className="object-cover  shadow-sm bg-slate-200  w-full  rounded-3xl"
              src="https://i.ibb.co/mFTgqTq/middle-2-A23260-Rapid-Pro-Shadow.png"
            />
            <img
              className="object-cover  shadow-sm bg-slate-200  w-full  rounded-3xl"
              src="https://i.ibb.co/CwDK1BP/images-1-removebg-preview.png"
            />
            <img
              className="object-cover  shadow-sm bg-slate-200  w-full  rounded-3xl"
              src="https://i.ibb.co/XVtKVy6/p2407253-removebg-preview.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
