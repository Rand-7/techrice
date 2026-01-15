
// "use client";

// import { useEffect, useState } from "react";
// import { fetchAPI } from "../../../app/lib/api";

// const Portfolio = () => {
//   const [projects, setProjects] = useState([]);

//   const localImages = [
//     { image: "/images/work1.jpg", isWide: false },
//     { image: "/images/work2.jpg", isWide: false },
//     { image: "/images/work3.jpg", isWide: true },
//   ];

// useEffect(() => {
//   fetchAPI("/workshops")
//     .then((res) => {
//       if (!Array.isArray(res)) return;

//       const mappedProjects = res.map((workshop, index) => ({
//         id: workshop._id,
//         title: workshop.title,
//         image: localImages[index % localImages.length].image,
//         isWide: localImages[index % localImages.length].isWide,
//       }));

//       setProjects(mappedProjects);
//     })
//     .catch(console.error);
// }, []);


//   if (!projects.length) return null;

//   return (
//     <section className="py-16 bg-white" dir="rtl" id="portfolio">
//       <div className="container mx-auto px-4 max-w-6xl">

//         <div className="flex flex-col items-center text-center mb-12 relative">
//           <button className="md:absolute md:left-0 md:top-10 flex items-center gap-2 text-[#00C0ED] font-bold text-sm hover:underline mb-4 md:mb-0">
//             <span>عرض جميع الأعمال</span>
//             <img src="/images/arrow.png" alt="arrow" className="w-4 h-4" /> 
//           </button>

//           <div className="bg-[#FFFCE4] px-10 py-2 rounded-lg mb-4">
//             <h2 className="text-[#FFD700] text-xl md:text-2xl font-bold">أعمالنا</h2>
//           </div>
//           <h3 className="text-xl md:text-2xl font-bold text-gray-800">أحدث الأعمال</h3>
//           <p className="text-gray-500 mt-1">بفضل مساعدة أعضاء الفريق</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className={`relative rounded-2xl overflow-hidden group h-80 ${
//                 project.isWide ? "md:col-span-2" : "md:col-span-1"
//               }`}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               <div
//                 className="absolute inset-0 z-10"
//                 style={{ backgroundColor: "#00C0ED33" }}
//               />

//               <div
//                 className="absolute bottom-0 left-0 right-0 py-4 px-6 z-20 flex justify-start items-center"
//                 style={{ backgroundColor: "#FDD30859" }}
//               >
//                 <span
//                   className="font-bold text-lg md:text-xl drop-shadow-sm"
//                   style={{ color: "#FDD308" }}
//                 >
//                   {project.title}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Portfolio;

"use client";

import { useEffect, useState } from "react";
import { fetchAPI } from "../../../app/lib/api";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const localImages = [
    { image: "/images/work1.jpg", isWide: false },
    { image: "/images/work2.jpg", isWide: false },
    { image: "/images/work3.jpg", isWide: true },
  ];

  useEffect(() => {
    fetchAPI("/workshops")
      .then((res) => {
        if (!Array.isArray(res)) return;

        const mappedProjects = res.map((workshop, index) => {
          const localImage = localImages[index % localImages.length];

          return {
            id: workshop._id,
            title: workshop.title,
            image: workshop.image_url && workshop.image_url !== ""
              ? workshop.image_url
              : localImage.image,
            isWide: localImage.isWide,
          };
        });

        setProjects(mappedProjects);
      })
      .catch(console.error);
  }, []);

  if (!projects.length) return null;

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="py-16 bg-white" dir="rtl" id="portfolio">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="flex flex-col items-center text-center mb-12 relative">
          <button
            onClick={() => setShowAll(true)}
            className="md:absolute md:left-0 md:top-10 flex items-center gap-2 text-[#00C0ED] font-bold text-sm hover:underline mb-4 md:mb-0"
          >
            <span>عرض جميع الأعمال</span>
            <img src="/images/arrow.png" alt="arrow" className="w-4 h-4" /> 
          </button>

          <div className="bg-[#FFFCE4] px-10 py-2 rounded-lg mb-4">
            <h2 className="text-[#FFD700] text-xl md:text-2xl font-bold">
              أعمالنا
            </h2>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            أحدث الأعمال
          </h3>
          <p className="text-gray-500 mt-1">بفضل مساعدة أعضاء الفريق</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className={`relative rounded-2xl overflow-hidden group h-80 ${
                project.isWide ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className="absolute inset-0 z-10"
                style={{ backgroundColor: "#00C0ED33" }}
              />

              <div
                className="absolute bottom-0 left-0 right-0 py-4 px-6 z-20 flex justify-start items-center"
                style={{ backgroundColor: "#FDD30859" }}
              >
                <span
                  className="font-bold text-lg md:text-xl drop-shadow-sm"
                  style={{ color: "#FDD308" }}
                >
                  {project.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
