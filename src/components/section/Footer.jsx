"use client";

const Footer = () => {
  return (
    <footer className="relative bg-white" dir="rtl">
      <div 
        className="absolute top-0 left-0 right-0 h-[1.5px]" 
        style={{
          background: "linear-gradient(to left, transparent, #00C0ED, #FDD308, transparent)"
        }}
      />

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo على اليسار */}
          <div className="flex items-center gap-3 order-1 md:order-1">
             <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm border border-gray-50">
               <img src="/images/logo.jpg" alt="النهضة التقنية" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-lg font-bold text-gray-800 tracking-tight">النهضة التقنية</h2>
          </div>

          {/* روابط سياسة الخصوصية وشروط الخدمة */}
          <div className="flex gap-10 text-gray-500 text-sm font-semibold order-2 md:order-2">
            <a href="#" className="hover:text-[#00C0ED] transition-all duration-300">سياسة الخصوصية</a>
            <a href="#" className="hover:text-[#00C0ED] transition-all duration-300">شروط الخدمة</a>
          </div>

          {/* حقوق النشر على الطرف الآخر */}
          <div className="text-gray-400 text-xs md:text-sm font-medium order-3 md:order-3">
            <span className="opacity-80">النهضة التقنية - جميع الحقوق محفوظة</span> 
            <span className="mr-1 text-[#00C0ED]">2026</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
