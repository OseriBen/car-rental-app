import React from "react";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/about.png";
import heroBg from "../assets/hero-slide-3.jpg"; 
import middleImg from "../assets/middle.png";   
import Booking from "../components/Booking";    

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* overlay */}
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl text-[#bfa37c] font-bold leading-snug mb-6">
            ABOUT US
          </h1>
          <p className="uppercase tracking-[0.35em] text-sm text-gold mb-4">
            We Have Been The Best Since 2007
          </p>
        </div>
      </section>

      {/* About Section (same as main page) */}
      <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-16">
          {/* Left text */}
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-gold mb-4">
              Finest Transport
            </p>
            <h2 className="text-4xl md:text-5xl text-[#bfa37c] font-semibold leading-snug mb-6">
              Ride To Destinations <br /> With Maximum Comfort
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              We provide the finest luxury cars with premium services that
              ensure your journey is as stylish as it is comfortable.
            </p>
          </div>

          {/* Right image */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="Luxury car"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 border-t border-gray-800 pt-12">
          <div>
            <h3 className="text-lg font-medium mb-2">No Delays</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tortor condimentum lacinia quis vel eros donec odio. Feugiat
              fermentum in posuere urna.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">High Quality</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tortor condimentum lacinia quis vel eros donec odio. Feugiat
              fermentum in posuere urna.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Premium Support</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tortor condimentum lacinia quis vel eros donec odio. Feugiat
              fermentum in posuere urna.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">A Diverse Selection</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tortor condimentum lacinia quis vel eros donec odio. Feugiat
              fermentum in posuere urna.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Promo Section (Image left + Text right) */}
      <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left image */}
          <div className="flex justify-center">
            <img
              src={middleImg}
              alt="Promo"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right promo text */}
          <div className="flex flex-col justify-center">
            <div className="bg-black/80 border border-gray-800 px-8 py-10 rounded-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-[#bfa37c] mb-4">
                Get 15% OFF Your First Booking
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Start your luxury journey today and save big on your first ride.
                Premium cars, unmatched comfort, and style that leaves an impression.
              </p>
              <button className="mt-auto border border-[#bfa37c] px-6 py-3 text-sm uppercase tracking-wider text-[#bfa37c] hover:bg-[#bfa37c] hover:text-black transition">
                + Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking + Footer */}
      <Booking />
    </div>
  );
}
