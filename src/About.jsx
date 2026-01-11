// export default function About() {
//   return (
//     <section className="bg-[#F9FFF6] py-20 relative overflow-hidden" dir="rtl">
      
//       <div className="max-w-4xl mx-auto text-center px-4 mb-20 relative z-10">
//         <div className="inline-block mb-6 rounded-lg bg-[#FFF9D8] px-10 py-2 shadow-sm">
//           <span className="text-2xl font-bold text-[#FDD308]">نحنُ</span>
//         </div>
//         <p className="text-[#4A4A4A] text-lg md:text-xl font-medium leading-loose max-w-3xl mx-auto">
//           نحن فريق تقني مكوّن من مجموعة من المحترفين في مجالات البرمجة، التصميم والتطوير. نهدف إلى تقديم حلول مبتكرة تلبي احتياجات عملائنا وتساعدهم على تحقيق أهدافهم بكفاءة.
//         </p>
//       </div>

//       <div className="relative w-full flex flex-col items-center gap-12 md:gap-16">
        
//         <div className="relative w-[92%] max-w-5xl min-h-[200px] bg-white rounded-[50px] md:rounded-[120px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#E8F8FF] flex items-center justify-center p-8 md:p-10">
//           <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
//             <div className="flex h-20 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-[#D6F5FF]">
//               <img src="/images/job.png" alt="vision" className="h-12 w-12 object-contain" />
//             </div>

//             <div className="text-center flex-1">
//               <div className="inline-block mb-3 rounded-lg bg-[#D6F5FF] px-10 py-1.5">
//                 <span className="text-xl font-bold text-[#00C0ED]">رؤيتنا</span>
//               </div>
//               <p className="text-[#555555] text-lg font-semibold leading-relaxed">
//                 رؤيتنا هي أن نكون من الرواد في مجال الحلول التقنية المبتكرة التي تؤثر بشكل إيجابي في المجتمع والمشاريع التي نعمل عليها.
//               </p>
//             </div>
            
//             <div className="hidden md:block w-24"></div>
//           </div>
//         </div>

//         <div className="relative w-[92%] max-w-5xl min-h-[200px] bg-white rounded-[50px] md:rounded-[120px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#FFF9D8] flex items-center justify-center p-8 md:p-10">
//           <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between gap-8">
//             <div className="flex h-20 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-[#FFF9D8]">
//               <img src="/images/initiative.png" alt="mission" className="h-12 w-12 object-contain" />
//             </div>

//             <div className="text-center flex-1">
//               <div className="inline-block mb-3 rounded-lg bg-[#FFF9D8] px-10 py-1.5">
//                 <span className="text-xl font-bold text-[#FDD308]">مهمتنا</span>
//               </div>
//               <p className="text-[#555555] text-lg font-semibold leading-relaxed">
//                 مهمتنا هي تقديم خدمات تقنية عالية الجودة تلبي احتياجات العملاء وتساهم في تحقيق تطلعاتهم من خلال الابتكار، التعاون، والاحترافية.
//               </p>
//             </div>

//             <div className="hidden md:block w-24"></div>
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { fetchAPI } from "../app/lib/api";
import { motion } from "framer-motion";


export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetchAPI("/who-are-we")
      .then((res) => {
        setAboutData(res);
      })
      .catch(console.error);
  }, []);

  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};


  if (!aboutData) return null; 

  return (
    <section className="bg-[#F9FFF6] py-20 relative overflow-hidden" dir="rtl">
      
      {/* المقدمة */}
      <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="max-w-4xl mx-auto text-center px-4 mb-20 relative z-10"
>

        <div className="inline-block mb-6 rounded-lg bg-[#FFF9D8] px-10 py-2 shadow-sm">
          <span className="text-2xl font-bold text-[#FDD308]">نحنُ</span>
        </div>
        <p className="text-[#4A4A4A] text-lg md:text-xl font-medium leading-loose max-w-3xl mx-auto">
          {aboutData.description}
        </p>
      </motion.div>

      <div className="relative w-full flex flex-col items-center gap-12 md:gap-16">

        {/* vision */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative w-[92%] max-w-5xl min-h-[200px] bg-white rounded-[50px] md:rounded-[120px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#E8F8FF] flex items-center justify-center p-8 md:p-10"
>

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="flex h-20 w-24 items-center justify-center rounded-2xl bg-[#D6F5FF]">
              <img src="/images/job.png" alt="vision" className="h-12 w-12" />
            </div>

            <div className="text-center flex-1">
              <div className="inline-block mb-3 rounded-lg bg-[#D6F5FF] px-10 py-1.5">
                <span className="text-xl font-bold text-[#00C0ED]">رؤيتنا</span>
              </div>
              <p className="text-[#555555] text-lg font-semibold leading-relaxed">
                {aboutData.vision}
              </p>
            </div>

            <div className="hidden md:block w-24"></div>
          </div>
        </motion.div>

        {/* mission */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="relative w-[92%] max-w-5xl min-h-[200px] bg-white rounded-[50px] md:rounded-[120px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#FFF9D8] flex items-center justify-center p-8 md:p-10"
>
          <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between gap-8">
            
            <div className="flex h-20 w-24 items-center justify-center rounded-2xl bg-[#FFF9D8]">
              <img src="/images/initiative.png" alt="mission" className="h-12 w-12" />
            </div>

            <div className="text-center flex-1">
              <div className="inline-block mb-3 rounded-lg bg-[#FFF9D8] px-10 py-1.5">
                <span className="text-xl font-bold text-[#FDD308]">مهمتنا</span>
              </div>
              <p className="text-[#555555] text-lg font-semibold leading-relaxed">
                {aboutData.mission}
              </p>
            </div>

            <div className="hidden md:block w-24"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
