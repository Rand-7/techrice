// "use client";
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState, useEffect } from 'react';

// export default function Navbar() {
//   const pathname = usePathname();
//   const [activeSection, setActiveSection] = useState('');

//   const navLinks = [
//     { name: 'الرئيسية', href: '/' },
//     { name: 'من نحن', href: '/about' }, 
//     { name: 'خدماتنا', href: '/#services' },
//     { name: 'أعمالنا', href: '/#portfolio' },
//     { name: 'فريقنا', href: '/#team' },
//     { name: 'تواصل معنا', href: '/#contact' },
//   ];


//   useEffect(() => {
//     if (pathname === '/about') {
//       setActiveSection('/about');
//     } else if (pathname === '/') {
//       if (!window.location.hash) setActiveSection('/');
//     }
//   }, [pathname]);

//   const handleLinkClick = (href) => {
//     setActiveSection(href);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/90 backdrop-blur-md shadow-sm" dir="rtl">
      
//       <div className="flex items-center gap-2">
//         <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm border border-gray-50">
//           <img src="/images/logo.jpg" alt="النهضة التقنية" className="w-full h-full object-cover" />
//         </div>
//         <span className="text-xl font-bold text-gray-800">النهضة التقنية</span>
//       </div>

//       <div className="hidden md:flex items-center gap-8">
//         {navLinks.map((link, index) => {
         
//           const isActive = activeSection === link.href;

//           return (
//             <Link
//               key={index}
//               href={link.href}
//               onClick={() => handleLinkClick(link.href)}
//               className={`transition-all duration-300 font-medium px-3 py-1 rounded-lg ${
//                 isActive 
//                 ? 'text-[#00BAF2] bg-blue-50' 
//                 : 'text-gray-600 hover:text-[#00BAF2] hover:bg-gray-50'
//               }`}
//             >
//               {link.name}
//             </Link>
//           );
//         })}
//       </div>
//     </nav>
//   );
// }
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "خدماتنا", href: "/#services" },
    { name: "أعمالنا", href: "/#portfolio" },
    { name: "فريقنا", href: "/#team" },
    { name: "تواصل معنا", href: "/#contact" },
  ];

  useEffect(() => {
    if (pathname === "/about") setActiveSection("/about");
    else if (pathname === "/" && !window.location.hash)
      setActiveSection("/");
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleLinkClick = (href) => {
    setActiveSection(href);
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm"
      dir="rtl"
    >
      
      <div className="flex items-center justify-between px-8 py-4">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm border border-gray-50">
            <img
              src="/images/logo.jpg"
              alt="النهضة التقنية"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold text-gray-800">
            النهضة التقنية
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={index}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`transition-all duration-300 font-medium px-3 py-1 rounded-lg ${
                  isActive
                    ? "text-[#00BAF2] bg-blue-50"
                    : "text-gray-600 hover:text-[#00BAF2] hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* MOBILE ICON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* OVERLAY + MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              ref={menuRef}
              className="md:hidden absolute top-full left-0 right-0 z-50 bg-white/95 backdrop-blur-xl px-6 py-6 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href;
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`transition-all duration-300 font-medium px-4 py-2 rounded-lg ${
                        isActive
                          ? "text-[#00BAF2] bg-blue-50"
                          : "text-gray-600 hover:text-[#00BAF2] hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
