// "use client";

// const Services = () => {
//   const services = [
//     {
//       title: "فرص العمل",
//       description: "نوفر للشباب التقني فرص عمل حقيقية في شركات رائدة تساعدهم على اكتساب خبرة عملية وتطوير مهاراتهم.",
//       iconBg: "bg-cyan-100",
//       iconPath: "/images/job.png", 
//       borderColor: "border-b-cyan-400"
//     },
//     {
//       title: "المبادرات",
//       description: "نطلق مبادرات مبتكرة تهدف إلى تحفيز الإبداع والتعاون بين الشباب لبناء مشاريع تقنية ناجحة.",
//       iconBg: "bg-yellow-100",
//       iconPath: "/images/initiative.png", 
//       borderColor: "border-b-yellow-400"
//     },
//     {
//       title: "الدورات",
//       description: "نقدم دورات تدريبية متخصصة تغطي أحدث التقنيات والأساليب، مع مدربين محترفين.",
//       iconBg: "bg-yellow-100",
//       iconPath: "/images/courses.png", 
//       borderColor: "border-b-yellow-400"
//     },
//     {
//       title: "ورش العمل",
//       description: "ننظم ورش عمل تفاعلية تتيح للمشاركين تطبيق ما تعلموه عملياً تحت إشراف خبراء.",
//       iconBg: "bg-cyan-100",
//       iconPath: "/images/workshops.png", 
//       borderColor: "border-b-cyan-400"
//     }
//   ];

//  return (
//     <section className="py-16 bg-[#F9FFF2]" dir="rtl" id="services">
//       <div className="container mx-auto px-4 max-w-5xl"> 
        
//         <div className="flex flex-col items-center text-center mb-16 relative">
//            <button className="md:absolute md:left-0 md:top-10 flex items-center gap-2 text-[#00C0ED] font-bold text-sm hover:underline mb-6 md:mb-0">
//              <span>عرض جميع الخدمات</span>
//              <img src="/images/arrow.png" alt="arrow" className="w-4 h-4" /> 
//           </button>

//           <div className="bg-[#FFFCE4] px-10 py-2 rounded-lg mb-4 shadow-sm">
//             <h2 className="text-[#FFD700] text-xl md:text-2xl font-bold">خدماتنا</h2>
//           </div>
//           <h3 className="text-xl md:text-2xl font-bold text-gray-800">تمكين الشباب التقني</h3>
//           <p className="text-gray-500 mt-1 text-sm md:text-base">من خلال تأمين كل من</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//           {services.map((service, index) => (
//             <div 
//               key={index} 
//               className={`bg-white p-6 rounded-xl shadow-sm border-b-4 ${service.borderColor} flex flex-col items-start text-right transition-all hover:shadow-md`}
//             >
//               <div className={`${service.iconBg} p-2 rounded-lg mb-4`}>
//                 <img src={service.iconPath} alt={service.title} className="w-6 h-6 object-contain" />
//               </div>
              
//               <h4 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h4>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

"use client";

import { useEffect, useState } from "react";
import { fetchAPI } from "../../../app/lib/api"; 

const iconsMap = {
  "فرص العمل": {
    iconBg: "bg-cyan-100",
    iconPath: "/images/job.png",
    borderColor: "border-b-cyan-400",
  },
  "المبادرات": {
    iconBg: "bg-yellow-100",
    iconPath: "/images/initiative.png",
    borderColor: "border-b-yellow-400",
  },
  "الدورات": {
    iconBg: "bg-yellow-100",
    iconPath: "/images/courses.png",
    borderColor: "border-b-yellow-400",
  },
  "ورش العمل": {
    iconBg: "bg-cyan-100",
    iconPath: "/images/workshops.png",
    borderColor: "border-b-cyan-400",
  },
};

const Services = () => {
const [services, setServices] = useState([]);

useEffect(() => {
  fetchAPI("/services")
    .then(res => {
      setServices(res); 
    })
    .catch(err => console.log(err));
}, []);


  return (
    <section className="py-16 bg-[#F9FFF2]" dir="rtl" id="services">
      <div className="container mx-auto px-4 max-w-5xl">

        <div className="flex flex-col items-center text-center mb-16 relative">
          <button className="md:absolute md:left-0 md:top-10 flex items-center gap-2 text-[#00C0ED] font-bold text-sm hover:underline mb-6 md:mb-0">
            <span>عرض جميع الخدمات</span>
            <img src="/images/arrow.png" alt="arrow" className="w-4 h-4" />
          </button>

          <div className="bg-[#FFFCE4] px-10 py-2 rounded-lg mb-4 shadow-sm">
            <h2 className="text-[#FFD700] text-xl md:text-2xl font-bold">
              خدماتنا
            </h2>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            تمكين الشباب التقني
          </h3>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            من خلال تأمين كل من
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const style =
              iconsMap[service.service_name] || iconsMap["فرص العمل"];

            return (
              <div
                key={service._id || index}
                className={`bg-white p-6 rounded-xl shadow-sm border-b-4 ${style.borderColor} flex flex-col items-start text-right transition-all hover:shadow-md`}
              >
                <div className={`${style.iconBg} p-2 rounded-lg mb-4`}>
                  <img
                    src={style.iconPath}
                    alt={service.service_name}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {service.service_name}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
