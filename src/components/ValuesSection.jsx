// export default function ValuesSection() {
//   return (
//     <section className="bg-white py-20" dir="rtl">
     
//       <div className="mb-12 text-center">
//         <span className="inline-block rounded-lg bg-[#FFF9D8] px-10 py-2 text-xl font-bold text-[#FDD308]">
//           قيمنا
//         </span>
//       </div>


//       <div className="mx-auto mb-32 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4">
//         {values.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center gap-6 rounded-[20px] border border-blue-50/50 bg-[#F9FFF6] py-12 shadow-sm transition-all hover:shadow-md"
//           >
           
//             <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bgColor} shadow-sm`}>
//                <img src={item.icon} alt={item.title} className="h-6 w-6 object-contain" />
//             </div>

//             <h3 className="text-xl font-bold text-gray-800">
//               {item.title}
//             </h3>
//           </div>
//         ))}
//       </div>


//       <div className="bg-[#F9FFF6] py-24">
//         <div className="mx-auto max-w-4xl px-4 text-center">
//           <span className="mb-8 inline-block rounded-lg bg-[#FFF9D8] px-10 py-2 text-xl font-bold text-[#FDD308]">
//             لماذا نحن؟
//           </span>

//           <p className="mx-auto mt-4 max-w-2xl text-xl font-medium text-gray-700 leading-loose">
//             فريقنا يتميز بتنوع المهارات والخبرات، مما يجعلنا قادرين على تقديم حلول مبتكرة ومصممة خصيصًا لتناسب احتياجات عملائنا.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// const values = [
//   {
//     title: "الابتكار المستمر",
//     icon: "/images/job.png", 
//     bgColor: "bg-[#D6F5FF]", 
//   },
//   {
//     title: "الشفافية",
//     icon: "/images/jobyellow.png", 
//     bgColor: "bg-[#FFF9D8]",
//   },
//   {
//     title: "الشفافية",
//     icon: "/images/jobyellow.png",
//     bgColor: "bg-[#FFF9D8]",
//   },
//   {
//     title: "الاحترافية",
//     icon: "/images/job.png",
//     bgColor: "bg-[#D6F5FF]",
//   },
// ];
"use client";

import { useEffect, useState } from "react";
import { fetchAPI } from "@/app/lib/api";
import { motion } from "framer-motion";


const staticStyles = [
  {
    icon: "/images/job.png",
    bgColor: "bg-[#D6F5FF]",
  },
  {
    icon: "/images/jobyellow.png",
    bgColor: "bg-[#FFF9D8]",
  },
  {
    icon: "/images/jobyellow.png",
    bgColor: "bg-[#FFF9D8]",
  },
  {
    icon: "/images/job.png",
    bgColor: "bg-[#D6F5FF]",
  },
];

export default function ValuesSection() {
  const [values, setValues] = useState([]);

  useEffect(() => {
  fetchAPI("/principles")
    .then((res) => {
      setValues(res); 
    })
    .catch(console.error);
}, []);

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeBlur = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8 },
  },
};


  return (
    <section className="bg-white py-20" dir="rtl">

      {/* Title */}
      <div className="mb-12 text-center">
        <span className="inline-block rounded-lg bg-[#FFF9D8] px-10 py-2 text-xl font-bold text-[#FDD308]">
          قيمنا
        </span>
      </div>

      {/* Values */}
<motion.div
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="mx-auto mb-32 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4"
>
        {values.map((item, index) => {
          const style = staticStyles[index % staticStyles.length];

          return (
            // <div
            //   key={item.id || index}
            //   className="flex flex-col items-center gap-6 rounded-[20px] border border-blue-50/50 bg-[#F9FFF6] py-12 shadow-sm transition-all hover:shadow-md"
            // >
            <div
             key={item.id || index}

  className="flex flex-col items-center gap-6 rounded-[20px] border border-blue-50/50 bg-[#F9FFF6] py-12 shadow-sm transition-all hover:shadow-md"
>

<div
  className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.bgColor} shadow-sm`}
>

                <img
                  src={style.icon}
                  alt={item.title}
                  className="h-6 w-6 object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-800">
                {item.title}
              </h3>
            </div>
          );
        })}
      </motion.div>

      {/* Why Us */}
<motion.div
  variants={fadeBlur}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="bg-[#F9FFF6] py-24"
>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="mb-8 inline-block rounded-lg bg-[#FFF9D8] px-10 py-2 text-xl font-bold text-[#FDD308]">
            لماذا نحن؟
          </span>

          <p className="mx-auto mt-4 max-w-2xl text-xl font-medium text-gray-700 leading-loose">
            فريقنا يتميز بتنوع المهارات والخبرات، مما يجعلنا قادرين على تقديم حلول مبتكرة
            ومصممة خصيصًا لتناسب احتياجات عملائنا.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
