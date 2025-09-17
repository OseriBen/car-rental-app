import React, { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/about.png";

export default function About() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"  
      ref={sectionRef}
      className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top text + image row */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-16">
          {/* Left text block */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              inView
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            }`}
          >
            <p className="uppercase tracking-[0.35em] text-sm text-gold mb-4">
              Finest Transport
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-snug mb-6">
              Ride To Destinations <br /> With Maximum Comfort
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              We provide the finest luxury cars with premium services that
              ensure your journey is as stylish as it is comfortable.
            </p>
          </div>

          {/* Right image block */}
          <div
            className={`flex justify-center transform transition-all duration-1000 ease-out delay-300 ${
              inView
                ? "translate-x-0 opacity-100"
                : "translate-x-16 opacity-0"
            }`}
          >
            <img
              src={aboutImg}
              alt="Luxury car"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 border-t border-gray-800 pt-12">
          {/* Feature 1 */}
          <div>
            <h3 className="text-lg font-medium mb-2">No Delays</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tortor condimentum lacinia quis vel eros donec odio. Feugiat
              fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <h3 className="text-lg font-medium mb-2">High Quality</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tortor condimentum lacinia quis vel eros donec odio. Feugiat
              fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <h3 className="text-lg font-medium mb-2">Premium Support</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tortor condimentum lacinia quis vel eros donec odio. Feugiat
              fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
            </p>
          </div>

          {/* Feature 4 */}
          <div>
            <h3 className="text-lg font-medium mb-2">A Diverse Selection</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tortor condimentum lacinia quis vel eros donec odio. Feugiat
              fermentum in posuere urna. Faucibus turpis in eun mi bibendum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
