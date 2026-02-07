"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BrandScroller() {
  const trackRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setScrollWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  const brands = [
    "https://installdashcam.in/assets/customer1-DOUBqQLr.jpg",
    "https://installdashcam.in/assets/customer2-CfrxmUx2.jpg",
    "https://installdashcam.in/assets/customer3-CUgGN7VD.jpg",
    "https://installdashcam.in/assets/customer4-BTKninds.jpg",
    "https://installdashcam.in/assets/customer5-BQnKL1Hl.jpg",
    "https://installdashcam.in/assets/omai-B6-_CY3U.jpg",
    "https://installdashcam.in/assets/customer7-Dm-k3KzQ.jpg",
    "https://installdashcam.in/assets/customer8-BHD2pgXp.jpg",
    "https://installdashcam.in/assets/customer9-iZt8T4ED.jpg",
  ];

  return (
    <section
      className="py-24 pb-40 bg-white overflow-hidden"
      id="services"
    >
      <div className="container-custom">
        <h2 className="text-[36px] font-bold text-center text-black mb-2">
          Dashcam Brands We Install
        </h2>
        <p className="text-center text-black/90 text-lg mb-16 font-normal">
          Trusted by leading dashcam manufacturers across PAN India
        </p>

        <div className="relative overflow-hidden px-4 z-10">
          <motion.div
            ref={trackRef}
            className="flex"
            animate={{ x: [0, -scrollWidth] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration:
                typeof window !== "undefined" && window.innerWidth < 768
                  ? 18
                  : 30,
            }}
          >
            {[...brands, ...brands].map((imgUrl, index) => (
              <div
                key={index}
                className="w-44 sm:w-48 md:w-52 lg:w-60 h-44 sm:h-48 md:h-52 lg:h-60 mx-3 sm:mx-4 bg-white rounded-[24px] flex items-center justify-center p-5 shadow-lg flex-shrink-0"
              >
                <img
                  src={imgUrl}
                  alt={`Brand ${index + 1}`}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
