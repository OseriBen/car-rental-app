import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; 
import call from "../assets/call.png";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import bookingBg from "../assets/booking-bg.jpg";

export default function Booking() {
  const [car, setCar] = useState("");
  const [time, setTime] = useState("");

  const cars = [
    "Rolls-Royce Phantom",
    "Bentley Continental GT",
    "Lamborghini Urus",
    "Ferrari Roma",
    "Aston Martin DB11",
    "Porsche Panamera",
    "Maserati Quattroporte",
    "Mercedes-Maybach S-Class",
    "Range Rover Autobiography",
    "BMW 7 Series",
    "Audi A8 L",
    "Jaguar XJ",
    "Cadillac Escalade Platinum",
    "McLaren GT",
    "Bugatti Chiron",
    "Pagani Huayra",
    "Koenigsegg Jesko",
    "Rolls-Royce Cullinan",
    "Lexus LS 500",
    "Tesla Model S Plaid",
  ];

  // generate times (00:00 → 23:30, 30-min steps)
  const times = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hh = h.toString().padStart(2, "0");
      const mm = m.toString().padStart(2, "0");
      times.push(`${hh}:${mm}`);
    }
  }

  return (
    <section
      id="booking"
      className="relative text-white py-20 px-6 md:px-12 lg:px-20 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bookingBg})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-7xl">
        {/* Booking content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light leading-snug mb-4">
              Do You Require A Car? <br />
              <span className="font-normal text-yellow-400">
                Get In Touch With Us
              </span>
            </h2>

            <p className="uppercase tracking-widest text-sm text-gray-400 mb-6">
              Finest Car Rental
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              Suspendisse in est ante in nibh mauris cursus mattis molestie
              laoreet id donec ultrices tincidunt arcu non sodales neque.
            </p>

            {/* Contact */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-15 flex items-center justify-center rounded-full">
                <img src={call} alt="call" />
              </div>
              <div>
                <p className="text-gray-200">
                  Phone:{" "}
                  <span className="font-medium text-white">
                    (+234) 345 6789 0123
                  </span>
                </p>
                <p className="text-gray-200">
                  Email:{" "}
                  <span className="font-medium text-white">
                    luxeautos@yahoo.com
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (FORM) */}
          <div>
            <h3 className="text-2xl font-medium mb-4">Ride Details / Distance</h3>
            <p className="text-gray-400 mb-8">
              Complete the form below and we'll contact you as soon as possible
            </p>

            <form className="space-y-6">
              {/* Select Car */}
              <div>
                <select
                  value={car}
                  onChange={(e) => setCar(e.target.value)}
                  className="w-full border-b border-gray-600 bg-transparent focus:outline-none focus:border-yellow-400 py-2 text-sm text-white"
                >
                  <option value="" className="text-black">
                    Select a car
                  </option>
                  {cars.map((c, i) => (
                    <option key={i} value={c} className="text-black">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pickup Location */}
              <div>
                <input
                  type="text"
                  placeholder="Pick up location"
                  className="w-full border-b border-gray-600 bg-transparent focus:outline-none focus:border-yellow-400 py-2 text-sm text-white placeholder-gray-400"
                />
              </div>

              {/* Select Time */}
              <div className="flex items-center gap-4">
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-1/2 border-b border-gray-600 bg-transparent focus:outline-none focus:border-yellow-400 py-2 text-sm text-white"
                >
                  <option value="" className="text-black">
                    Select time
                  </option>
                  {times.map((t, i) => (
                    <option key={i} value={t} className="text-black">
                      {t}
                    </option>
                  ))}
                </select>
                <input
                  type="date"
                  className="w-1/2 border-b border-gray-600 bg-transparent focus:outline-none focus:border-yellow-400 py-2 text-sm text-white placeholder-gray-400"
                />
              </div>

              {/* Drop-off Location */}
              <div>
                <input
                  type="text"
                  placeholder="Drop off location"
                  className="w-full border-b border-gray-600 bg-transparent focus:outline-none focus:border-yellow-400 py-2 text-sm text-white placeholder-gray-400"
                />
              </div>

              {/* Drop-off Time */}
              <div className="flex items-center gap-4">
                <select className="w-1/2 border-b border-gray-600 bg-transparent focus:outline-none focus:border-yellow-400 py-2 text-sm text-white">
                  <option value="" className="text-black">
                    Select time
                  </option>
                  {times.map((t, i) => (
                    <option key={i} value={t} className="text-black">
                      {t}
                    </option>
                  ))}
                </select>
                <input
                  type="date"
                  className="w-1/2 border-b border-gray-600 bg-transparent focus:outline-none focus:border-yellow-400 py-2 text-sm text-white placeholder-gray-400"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full border border-yellow-400 py-3 uppercase tracking-wider text-sm text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
              >
                + Send
              </button>
            </form>
          </div>
        </div>

        {/* Car Brand Logos */}
        <div className="flex flex-wrap justify-center gap-10 mb-16 opacity-90">
          {[logo1, logo2, logo3, logo4, logo5, logo6, logo7].map(
            (logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Brand logo ${i + 1}`}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            )
          )}
        </div>

        {/* Footer */}
        <footer className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-700 pt-12">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">
              LUXE AUTOS
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Rent a car with premium service, finest vehicles and an
              unforgettable experience.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-black transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-black transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-black transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="/see-more" className="hover:text-yellow-400">
                  Vehicle Fleet
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-sm text-gray-400 mb-4">
              Want updates about our latest cars & services? Join our newsletter.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-l bg-gray-900 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-black px-6 rounded-r hover:bg-yellow-500 transition"
              >
                →
              </button>
            </form>
          </div>
        </footer>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2025 Luxe Autos. All rights reserved.
        </div>
      </div>
    </section>
  );
}
