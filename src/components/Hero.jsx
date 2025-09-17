import React from "react";
import Navbar from "./Navbar";
import heroVideo from "../assets/luxury-car.mp4"; 


export default function Hero({ innerRef }) {
  return (
    <section
      id="home"
      ref={innerRef}
      className="relative bg-black"
    >
      <Navbar variant="primary" />

      {/* Hero video with overlay + text */}
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Background video */}
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[520px] md:h-[580px] object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="uppercase tracking-[0.5em] text-xs md:text-sm mb-3 text-gray-300">
            Your Dream Car is closer than you think
          </span>
          <h1 className="font-semibold uppercase tracking-[0.35em] text-5xl md:text-8xl text-white-400 drop-shadow-lg">
            LUXE AUTOS
          </h1>
        </div>
      </div>
    </section>
  );
}
