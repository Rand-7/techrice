
// "use client";

// import { useEffect, useState } from "react";
// import { fetchAPI } from "../../../app/lib/api";
// import { motion } from "framer-motion";


// const Team = () => {
//   const [teamMembers, setTeamMembers] = useState([]);

// useEffect(() => {
//   fetchAPI("/team")
//     .then((res) => {
//       setTeamMembers(res); 
//     })
//     .catch(console.error);
// }, []);

// const titleAnim = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const gridAnim = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.12 },
//   },
// };

// const memberAnim = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

//   return (
//     <section className="py-20 bg-[#F9FFF2]" dir="rtl" id="team">
//       <div className="container mx-auto px-4 max-w-7xl">

// <motion.div
//   variants={titleAnim}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true }}
//   className="flex flex-col items-center text-center mb-16"
// >
//           <button className="md:absolute md:left-0 md:top-10 flex items-center gap-2 text-[#00C0ED] font-bold text-sm hover:underline mb-6 md:mb-0">
//              <span>عرض كامل الفريق</span>
//              <img src="/images/arrow.png" alt="arrow" className="w-4 h-4" /> 
//           </button>

//           <div className="bg-[#FFFCE4] px-12 py-2 rounded-lg mb-4 shadow-sm">
//             <h2 className="text-[#FFD700] text-xl md:text-2xl font-bold">
//               فريقنا
//             </h2>
//           </div>
//           <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
//             العقول المدبرة
//           </h3>
//         </motion.div>

//        <motion.div
//   variants={gridAnim}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true }}
//   className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
// >

//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//              variants={memberAnim}
//   whileHover={{ y: -6 }}
//   transition={{ type: "spring", stiffness: 200 }}
//   className="flex flex-col items-center group"
//             >
//               <motion.div  animate={{ y: [0, -6, 0] }}
//   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//   className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-lg">
//                 <img
//                   src="/images/about.jpg"
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>

//               <h4 className="text-sm font-bold text-[#00C0ED]">
//                 {member.role}
//               </h4>
//               <p className="text-gray-800 font-bold">
//                 {member.name}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Team;
"use client";

import { useEffect, useState } from "react";
import { fetchAPI } from "../../../app/lib/api";
import { motion } from "framer-motion";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetchAPI("/team")
      .then((res) => setTeamMembers(res))
      .catch(console.error);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-[#F9FFF2]" dir="rtl" id="team">
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="flex flex-col items-center text-center mb-16">
          <button className="md:absolute md:left-0 md:top-10 flex items-center gap-2 text-[#00C0ED] font-bold text-sm hover:underline mb-6 md:mb-0">
             <span>عرض كامل الفريق</span>
             <img src="/images/arrow.png" alt="arrow" className="w-4 h-4" /> 
          </button>

          <div className="bg-[#FFFCE4] px-12 py-2 rounded-lg mb-4 shadow-sm">
            <h2 className="text-[#FFD700] text-xl md:text-2xl font-bold">فريقنا</h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">العقول المدبرة</h3>
        </div>

<motion.div 
  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
>
  {teamMembers.map((member, index) => (
    <motion.div
      key={index}
      className="flex flex-col items-center group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <motion.div
        className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-lg"
        whileHover={{ scale: 1.1 }}
      >
        <img
          src="/images/about.jpg"
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <h4 className="text-sm font-bold text-[#00C0ED]">{member.role}</h4>
      <p className="text-gray-800 font-bold">{member.name}</p>
    </motion.div>
  ))}
</motion.div>


      </div>
    </section>
  );
};

export default Team;
