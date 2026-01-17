// "use client";

// const Contact = () => {
//   return (
//     <section className="py-20 bg-white" dir="rtl" id="contact">
//       <div className="container mx-auto px-4 max-w-6xl">
        
//         <div className="flex flex-col items-center text-center mb-16 relative">
//           <button className="md:absolute md:left-0 md:top-10 flex items-center gap-2 text-[#00C0ED] font-bold text-sm hover:underline mb-4 md:mb-0">
//              <span>عرض المزيد</span>
//              <img src="/images/arrow.png" alt="arrow" className="w-4 h-4" /> 
//           </button>

//           <div className="bg-[#FFFCE4] px-12 py-2 rounded-lg mb-4 shadow-sm">
//             <h2 className="text-[#FFD700] text-xl md:text-2xl font-bold">تواصل معنا</h2>
//           </div>
//           <h3 className="text-2xl font-bold text-gray-800">دعنا نبني شيئاً مذهلاً</h3>
//           <p className="text-gray-500 mt-2">نحن هنا للمساعدة إلى الارتقاء للمستوى التالي</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
//           <div className="space-y-10 order-1"> 
//             <div className="flex flex-col gap-10">
//               <div className="flex items-center justify-end gap-4 group">
//                 <span className="text-gray-800 font-bold text-lg">Techrise@gmail.com</span>
//                 <div className="bg-[#E0F7FF] p-3 rounded-lg">
//                   <img src="/images/mail.png" className="w-6 h-6 object-contain" alt="mail" />
//                 </div>
//               </div>

//               <div className="flex items-center justify-end gap-4 group">
//                 <span className="text-gray-800 font-bold text-lg" dir="ltr">+963-999999999</span>
//                 <div className="bg-[#FFFCE4] p-3 rounded-lg">
//                   <img src="/images/phone.png" className="w-6 h-6 object-contain" alt="phone" />
//                 </div>
//               </div>

//               <div className="flex items-center justify-end gap-4 group">
//                 <span className="text-gray-800 font-bold text-lg">Homs-Syria</span>
//                 <div className="bg-[#E0F7FF] p-3 rounded-lg">
//                   <img src="/images/location.png" className="w-6 h-6 object-contain" alt="location" />
//                 </div>
//               </div>
//             </div>

//             <div className="w-full h-56 bg-[#FFFCE4] rounded-2xl shadow-inner border border-yellow-50 flex items-center justify-center text-yellow-600/50">
//                 خريطة الموقع التقريبي
//             </div>
//           </div>

//           <div className="space-y-6 order-2">
//             <div className="flex flex-col gap-2">
//               <label className="font-bold text-gray-700 mr-2">الاسم</label>
//               <input 
//                 type="text" 
//                 placeholder="أدخل الاسم الكامل"
//                 className="w-full p-4 bg-[#F9FFF2] rounded-xl outline-none border border-transparent focus:border-[#00C0ED] transition-all text-sm"
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="font-bold text-gray-700 mr-2">البريد الإلكتروني</label>
//               <input 
//                 type="email" 
//                 placeholder="example@gmail.com"
//                 className="w-full p-4 bg-[#F9FFF2] rounded-xl outline-none border border-transparent focus:border-[#00C0ED] transition-all text-sm text-left"
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="font-bold text-gray-700 mr-2">الرسالة</label>
//               <textarea 
//                 rows="5"
//                 placeholder="أدخل الرسالة"
//                 className="w-full p-4 bg-[#F9FFF2] rounded-xl outline-none border border-transparent focus:border-[#00C0ED] transition-all text-sm resize-none"
//               ></textarea>
//             </div>

//             <button className="w-full bg-[#00C0ED] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#0096ba] transition-all text-lg">
//               إرسال الرسالة
//             </button>
//           </div>

//         </div> 
//       </div>
//     </section>
//   );
// };

// export default Contact;
"use client";

import { useEffect, useState } from "react";
import { fetchAPI, postAPI } from "../../../app/lib/api";
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
  const [contactInfo, setContactInfo] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
  fetchAPI("/contact")
    .then((res) => {
      setContactInfo(res); 
    })
    .catch(console.error);
}, []);

useEffect(() => {
  fetchAPI("/contact")
    .then((res) => setContactInfo(res))
    .catch(console.error);

  AOS.init({
    duration: 800,
    easing: "ease-out",
    once: true, 
  });
}, []);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const response = await postAPI("/messages", formData);

    if (response) {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section className="py-20 bg-white" dir="rtl" id="contact">
      <div className="container mx-auto px-6 lg:px-12" >

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-down">
          <div className="bg-[#FFFCE4] px-12 py-2 rounded-lg mb-4 shadow-sm">
            <h2 className="text-[#FFD700] text-xl md:text-2xl font-bold">
              تواصل معنا
            </h2>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">
            دعنا نبني شيئاً مذهلاً
          </h3>
          <p className="text-gray-500 mt-2">
            نحن هنا للمساعدة للارتقاء للمستوى التالي
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-10" dir="ltr" data-aos="fade-right">

            <div className="flex flex-col gap-10">
              <div className="flex items-center justify-end gap-4">
                <span className="text-gray-800 font-bold text-lg">
                  {contactInfo?.email || "Loading..."}
                </span>
                <div className="bg-[#E0F7FF] p-3 rounded-lg">
                  <img src="/images/mail.png" className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-center justify-end gap-4">
                <span className="text-gray-800 font-bold text-lg">
                  {contactInfo?.phone || "Loading..."}
                </span>
                <div className="bg-[#FFFCE4] p-3 rounded-lg">
                  <img src="/images/phone.png" className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-center justify-end gap-4">
                <span className="text-gray-800 font-bold text-lg">
                  {contactInfo?.address || "Loading..."}
                </span>
                <div className="bg-[#E0F7FF] p-3 rounded-lg">
                  <img src="/images/location.png" className="w-6 h-6" />
                </div>
              </div>
            </div>

<img
  src="/images/contact-map.png" // عدلي المسار حسب الصورة عندك
  alt="خريطة الموقع"
  className="w-full h-56 object-cover rounded-2xl"
/>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6"data-aos="fade-left">
            <label className="font-bold text-gray-700 mr-2">الاسم</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="الاسم الكامل"
              required
              className="w-full p-4 bg-[#F9FFF2] rounded-xl outline-none placeholder-gray-400 text-black"
            />
<label className="font-bold text-gray-700 mr-2">البريد الإلكتروني</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
              className="w-full p-4 bg-[#F9FFF2] rounded-xl outline-none text-left placeholder-gray-400 text-black"
            />
<label className="font-bold text-gray-700 mr-2">عنوان الرسالة</label>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="عنوان الرسالة"
              required
              className="w-full p-4 bg-[#F9FFF2] rounded-xl outline-none placeholder-gray-400 text-black" />
<label className="font-bold text-gray-700 mr-2">ادخل الرسالة</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="أدخل الرسالة"
              required
              className="w-full p-4 bg-[#F9FFF2] rounded-xl outline-none resize-none placeholder-gray-400 text-black"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00C0ED] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#0096ba] transition-all cursor-pointer"
            >
              {loading ? "جارٍ الإرسال..." : "إرسال الرسالة"}
            </button>

            {status === "success" && (
              <p className="text-green-600 font-bold text-center">
                 تم إرسال الرسالة بنجاح
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 font-bold text-center">
                 حدث خطأ أثناء الإرسال
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;

