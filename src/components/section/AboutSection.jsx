// "use client";
// import { useEffect, useState } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// const Counter = ({ value }) => {
//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue, { duration: 3000 });
//   const [displayValue, setDisplayValue] = useState(0);

//   useEffect(() => {
//     motionValue.set(value);
//     springValue.on("change", (latest) => {
//       setDisplayValue(Math.round(latest));
//     });
//   }, [value, motionValue, springValue]);

//   return <span>{displayValue}</span>;
// };

// const AboutSection = () => {
//   const stats = [
//     { label: "ورشة", value: 15 },
//     { label: "محافظات", value: 3 },
//     { label: "مبادرة", value: 1 },
//     { label: "فرص تدريب", value: 4 },
//     { label: "فرص عمل", value: 10 },
//     { label: "مستفيد", value: 600 },
//   ];

//   return (
//     <section className="relative bg-[#F9FFF2] py-20 overflow-hidden" dir="rtl">
//       <div className="container mx-auto px-4 mb-20">
//         <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
//           {stats.map((stat, index) => (
//             <div key={index} className="flex flex-col">
//               <span className="text-3xl font-bold text-gray-800">
//                 + <Counter value={stat.value} />
//               </span>
//               <span className="text-[#FFD700] font-bold mt-2">{stat.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="relative max-w-6xl mx-auto bg-white rounded-[100px] md:rounded-[200px] py-16 px-10 md:px-20 shadow-sm border border-yellow-50 mx-4">
//         <div className="flex flex-col md:flex-row items-center gap-12">
          
//           <div className="flex-1 text-right">
//             <div className="bg-[#FFFCE4] inline-block px-6 py-2 rounded-lg mb-4">
//               <h2 className="text-[#FFD700] text-2xl font-bold">من نحن؟</h2>
//             </div>
//             <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
//               مكان يجمع الشباب <span className="text-[#00C0ED]">التقنيين</span>
//             </h3>
//             <p className="text-gray-600 leading-relaxed text-lg mb-8">
//               ويساعدهم على التطور واكتساب الخبرة والانخراط في بيئة تدعم طموحاتهم المهنية بيئة تعلمهم وتطور مهاراتهم وتفتح أبواب العمل والخبرات. نحن فريق متخصص بالتكنولوجيا يجمع بين أصحاب الخبرة والشباب الطموح.
//             </p>
            
//             <button className="flex items-center gap-2 text-[#00C0ED] bg-[#F2FDFF] px-6 py-2 rounded-full font-bold hover:bg-[#00C0ED] hover:text-white transition-all">
//               <span>←</span>
//              <a href="/about"> إقرأ المزيد عنا</a>
//             </button>
//           </div>

//           <div className="flex-1 flex justify-center">
//             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
//               <img 
//                 src="/images/about.jpg" 
//                 alt="فريق العمل"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { fetchAPI } from "../../../app/lib/api"; 

// ===== Counter Animation =====
// const Counter = ({ value }) => {
//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue, { duration: 3000 });
//   const [displayValue, setDisplayValue] = useState(0);

//   useEffect(() => {
//     motionValue.set(value);
//     springValue.on("change", (latest) => {
//       setDisplayValue(Math.round(latest));
//     });
//   }, [value, motionValue, springValue]);

//   return <span>{displayValue}</span>;
// };
const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 1500;
    const incrementTime = 30;
    const step = Math.ceil((end - start) / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
};




// ===== Animations Variants =====
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const AboutSection = () => {
  const [whoAreWe, setWhoAreWe] = useState(null);
  const [homeStats, setHomeStats] = useState(null);

  useEffect(() => {
    fetchAPI("/who-are-we")
      .then(setWhoAreWe)
      .catch(console.error);
  }, []);
useEffect(() => {
  AOS.init({
    duration: 800,       
    easing: "ease-out",
    once: true,          
    offset: 120,         
  });
}, []);
  useEffect(() => {
    fetchAPI("/home")
      .then((res) => setHomeStats(res?.statistics))
      .catch(console.error);
  }, []);

  const stats = homeStats
    ? [
        { label: "ورشة", value: homeStats.workshops },
        { label: "محافظات", value: homeStats.governorates },
        { label: "مبادرة", value: Number(homeStats.initiative) },
        { label: "فرص تدريب", value: homeStats.training },
        { label: "فرص عمل", value: homeStats.jobs },
        { label: "مستفيد", value: homeStats.beneficiary },
      ]
    : [];

  if (!whoAreWe) return null;

  return (
<section
  className="relative bg-[#F9FFF2] py-20 overflow-hidden"
  dir="rtl"
  data-aos="fade-up"
>

      {/* ===== Stats ===== */}
<div
  className="container mx-auto px-0 mb-20"
  data-aos="fade-up"
  data-aos-delay="100"
>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
<div
  key={index}
  className="flex flex-col items-center"
  data-aos="zoom-in"
  data-aos-delay={index * 100}
>

<div className="flex flex-col items-center">
  
  {/* ===== Circle with Number ===== */}
  <motion.div
    className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-2"
    whileHover={{
      scale: 1.06,
      boxShadow: "0px 14px 30px rgba(0,0,0,0.18)",
    }}
    transition={{ type: "spring", stiffness: 300, damping: 18 }}
  >
    <span className="text-3xl font-bold text-gray-800">
      + <Counter value={stat.value} />
    </span>
  </motion.div>

  {/* ===== Label ===== */}
  <span className="text-[#FFD700] font-bold">
    {stat.label}
  </span>

</div>

            </div>
          ))}
        </div>
      </div>

      {/* ===== About Card ===== */}
<div
  className="relative max-w-6xl mx-auto bg-white rounded-[100px] md:rounded-[200px]
             py-16 px-10 md:px-20 shadow-sm border border-yellow-50 mx-4"
  data-aos="fade-up"
  data-aos-delay="200"
>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* ===== Text ===== */}
<div
  className="flex-1 text-right"
  data-aos="fade-right"
>

            <div className="bg-[#FFFCE4] inline-block px-6 py-2 rounded-lg mb-4">
              <h2 className="text-[#FFD700] text-2xl font-bold">
                من نحن؟
              </h2>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              {whoAreWe.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {whoAreWe.description}
            </p>

            <button className="flex items-center gap-2 text-[#00C0ED] bg-[#F2FDFF] px-6 py-2 rounded-full font-bold hover:bg-[#00C0ED] hover:text-white transition-all">
              <span>←</span>
              <a href="/about">إقرأ المزيد عنا</a>
            </button>
          </div>

          {/* ===== Image ===== */}
<div
  className="flex-1 flex justify-center"
  data-aos="fade-left"
>

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/images/about.jpg"
                alt="فريق العمل"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

