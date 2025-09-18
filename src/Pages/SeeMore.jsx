import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Booking from "../components/Booking";
import heroBg from "../assets/see-more-hero.jpg";


import card01 from "../assets/card01.png";
import card02 from "../assets/card02.png";
import card03 from "../assets/card03.png";
import card04 from "../assets/card04.png";
import card05 from "../assets/card05.png";
import card06 from "../assets/card06.png";
import card07 from "../assets/card07.png";
import card08 from "../assets/card08.png";
import card09 from "../assets/card09.png";
import card10 from "../assets/card10.png";
import card11 from "../assets/card11.png";
import card12 from "../assets/card12.png";

export default function SeeMore() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    trip: "",
    date: "",
    time: "",
    passengers: "",
    request: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  
  const cars = [
    { name: "Bentley Flying Spur", img: card01, price: 300 },
    { name: "Rolls-Royce Ghost", img: card02, price: 350 },
    { name: "Ferrari 488 Spider", img: card03, price: 400 },
    { name: "Mercedes G-Wagon", img: card04, price: 280 },
    { name: "Lamborghini Huracán", img: card05, price: 420 },
    { name: "Porsche 911 Turbo", img: card06, price: 380 },
    { name: "Range Rover Evoque", img: card07, price: 250 },
    { name: "BMW M8 Competition", img: card08, price: 320 },
    { name: "Audi R8 V10 Plus", img: card09, price: 340 },
    { name: "Maserati Levante", img: card10, price: 260 },
    { name: "Jaguar F-Type", img: card11, price: 270 },
    { name: "Tesla Model X Plaid", img: card12, price: 300 },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.trip ||
      !formData.date ||
      !formData.time ||
      !formData.passengers
    ) {
      setError("⚠ Please fill in all required fields.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess(" Booking Successful! We’ll contact you shortly.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      trip: "",
      date: "",
      time: "",
      passengers: "",
      request: "",
    });

    setTimeout(() => {
      setSelectedCar(null);
      setSuccess("");
    }, 2000);
  };

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#bfa37c] mb-4 uppercase tracking-wide">
            Explore Our Full Fleet
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover a wider range of luxury, sport, and SUV vehicles available
            for rent. Choose your dream car and book effortlessly.
          </p>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-white">
          Browse Your Limousine
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cars.map((car, i) => (
            <div
              key={i}
              className="bg-[#111] border border-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col hover:border-[#bfa37c] transition"
            >
              {/* Car Image */}
              <div className="w-full h-56 flex items-center justify-center bg-[#1a1a1a]">
                <img
                  src={car.img}
                  alt={car.name}
                  className="object-contain max-h-full"
                />
              </div>

              {/* Car Details */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-medium text-[#bfa37c] mb-2 uppercase tracking-wide">
                  {car.name}
                </h3>

                <div className="flex text-[#bfa37c] text-sm mb-3">
                  {"★★★★★".split("").map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <p className="text-lg font-semibold mb-6 text-white">
                  ${car.price}{" "}
                  <span className="text-gray-500 font-normal">/ Per hour</span>
                </p>

                <button
                  onClick={() => setSelectedCar(car)}
                  className="mt-auto border border-[#bfa37c] px-6 py-3 text-sm uppercase tracking-wider text-[#bfa37c] hover:bg-[#bfa37c] hover:text-black transition"
                >
                  Book Ride
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back to home button */}
        <div className="mt-16 text-center">
          <a
            href="/"
            className="border border-[#bfa37c] px-6 py-3 uppercase text-sm tracking-wider text-[#bfa37c] hover:bg-[#bfa37c] hover:text-black transition rounded"
          >
            ← Back to Home
          </a>
        </div>
      </section>

      {/* Booking Popup */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">
          <div className="bg-[#111] text-white max-w-2xl w-full rounded-lg p-8 relative shadow-lg border border-[#bfa37c]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-[#bfa37c] mb-6">
              Book Your Ride
            </h2>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
              />
              <select
                name="trip"
                value={formData.trip}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
              >
                <option value="" className="bg-black">
                  Trip Type
                </option>
                <option className="bg-black">Business</option>
                <option className="bg-black">Leisure</option>
                <option className="bg-black">Event</option>
              </select>

              <input
                type="text"
                value={selectedCar.name}
                readOnly
                className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2 col-span-2"
              />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
              />
              <input
                type="number"
                name="passengers"
                placeholder="No. of Passengers"
                value={formData.passengers}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2"
              />

              <textarea
                name="request"
                placeholder="Special Request"
                rows="2"
                value={formData.request}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-600 focus:border-[#bfa37c] outline-none py-2 col-span-2"
              ></textarea>

              <div className="col-span-2 text-center mt-4">
                <button
                  type="submit"
                  className="border border-[#bfa37c] px-8 py-3 uppercase text-sm tracking-wider text-[#bfa37c] hover:bg-[#bfa37c] hover:text-black transition"
                >
                  + Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Booking/Footer Section */}
      <Booking />
    </div>
  );
}
