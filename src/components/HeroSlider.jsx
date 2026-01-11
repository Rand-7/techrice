"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    title: "من نحن؟",
    subtitle: "نؤمن بقوة التعاون والابتكار للارتقاء بعالم التقنية",
    image: "/images/about.jpg",
  },
  {
    title: "نهضة تقنية",
    subtitle: "نصنع حلولًا رقمية تواكب المستقبل",
    image: "/images/work2.jpg",
  },
  {
    title: "معًا نحو النجاح",
    subtitle: "فريق محترف بخبرة عالية",
    image: "/images/work1.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", 
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
      ))}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 text-center">
        <div className="rounded-2xl bg-[#F6E27F]/90 backdrop-blur-md px-8 py-6 md:px-14 md:py-8 shadow-2xl animate-fade-in">
          <h1 className="mb-3 text-3xl font-bold text-slate-900 md:text-5xl">
            {slides[current].title}
          </h1>

          <p className="mx-auto max-w-2xl text-sm text-slate-700 md:text-lg">
            {slides[current].subtitle}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-yellow-400"
                : "w-3 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
