// "use client";
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';

// const Hero = () => {
//   const slides = [
//     {
//       id: 1,
//       title: "ننهض بالتقنية معاً",
//       text: "نحن نؤمن بقوة التعاون والابتكار لنرتقي بعالم التقنية ونبني مستقبلاً أفضل للجميع",
//       image: "/images/hero.jpg"
//     },
//     {
//       id: 2,
//       title: "ابتكار بلا حدود",
//       text: "نقدم حلولاً تقنية ذكية تساهم في نمو أعمالكم وتطوير مهارات الشباب الطموح",
//       image: "/images/about.jpg" 
//     },
//     {
//       id: 3,
//       title: "بيئة تقنية متكاملة",
//       text: "نجمع بين أصحاب الخبرة والشباب لخلق مجتمع تقني يواكب التطور العالمي",
//       image: "/images/hero.jpg"
//     }
//   ];

//   return (
//     <section className="relative h-[100vh] w-full overflow-hidden" dir="rtl">
//       <Swiper
//         modules={[Autoplay, Pagination, EffectFade]}
//         effect="fade" 
//         loop={true}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{
//           clickable: true,
//           el: '.custom-pagination', 
//         }}
//         className="h-full w-full"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative h-full w-full flex items-center justify-center">
              
//               <div className="absolute inset-0 z-0">
//                 <img 
//                   src={slide.image} 
//                   className="w-full h-full object-cover" 
//                   alt={slide.title}
//                 /> 
//                 <div 
//                   className="absolute inset-0" 
//                   style={{
//                     background: `linear-gradient(to bottom, #00C0ED33, rgba(0, 0, 0, 0.4))`
//                   }}
//                 /> 
//               </div>

//               <div className="relative z-10 text-center max-w-4xl px-4 animate-fadeIn">
//                 <div className="bg-[#FDD308]/90 inline-block px-10 py-5 rounded-2xl mb-6 shadow-lg">
//                   <h1 className="text-4xl md:text-6xl font-black text-[#00BAF2]">
//                     {slide.title}
//                   </h1>
//                 </div>

//                 <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl border-b-[6px] border-[#FFD700]">
//                   <p className="text-lg md:text-2xl text-gray-800 font-bold leading-relaxed">
//                     {slide.text}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

//         <div className="custom-pagination absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3"></div>
//       </Swiper>

//       <style jsx global>{`
//         .custom-pagination .swiper-pagination-bullet {
//           width: 12px;
//           height: 12px;
//           background: #FFD700 !important;
//           opacity: 0.4;
//           border-radius: 50%;
//           transition: all 0.3s ease;
//         }
//         .custom-pagination .swiper-pagination-bullet-active {
//           width: 40px;
//           height: 12px;
//           border-radius: 10px;
//           opacity: 1;
//           box-shadow: 0 0 10px rgba(253, 211, 8, 0.5);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;
"use client";
import React, { useEffect, useState } from "react";
import { fetchAPI } from "../../../app/lib/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const DEFAULT_HERO_IMAGES = [
  "/images/hero.jpg",
  "/images/about.jpg",
  "/images/hero.jpg",
];

const Hero = () => {
  const [home, setHome] = useState(null);
  const [images, setImages] = useState(DEFAULT_HERO_IMAGES);

  useEffect(() => {
    async function loadHome() {
      const data = await fetchAPI("/home");
      if (data) {
        setHome(data);

        if (data.banner_image && data.banner_image.trim() !== "") {
          setImages([data.banner_image]);
        } else {
          setImages(DEFAULT_HERO_IMAGES);
        }
      }
    }
    loadHome();
  }, []);

  if (!home) return null;

  return (
    <section className="relative h-[100vh] w-full overflow-hidden" dir="rtl">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex items-center justify-center">
              {/* IMAGE */}
              <div className="absolute inset-0 z-0">
                <img src={image} alt="hero" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#00C0ED33] to-black/40" />
              </div>

              <div className="relative z-10 text-center max-w-4xl px-4 cursor-default">
                <div className="animate-slideDown bg-[#FDD308]/90 inline-block px-10 py-5 rounded-2xl mb-6 shadow-lg">
                  <h1 className="text-4xl md:text-6xl font-black text-[#00BAF2]">
                    {home.title}
                  </h1>
                </div>

                <div className="animate-fadeUp bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl border-b-[6px] border-[#FFD700]">
                  <p className="text-lg md:text-2xl text-gray-800 font-bold leading-relaxed">
                    {home.content}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="custom-pagination absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3" />
      </Swiper>

      {/* Animations */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #ffd700 !important;
          opacity: 0.4;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 40px;
          height: 12px;
          border-radius: 10px;
          opacity: 1;
          box-shadow: 0 0 10px rgba(253, 211, 8, 0.5);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-slideDown { animation: slideDown 0.9s ease-out; }
        .animate-fadeUp { animation: fadeUp 1.1s ease-out; }
      `}</style>
    </section>
  );
};

export default Hero;

