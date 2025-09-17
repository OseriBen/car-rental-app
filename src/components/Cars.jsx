import React from "react";
import { Link } from "react-router-dom"; 



import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import car5 from "../assets/car5.jpg";
import car6 from "../assets/car6.jpg";

const cars = [
  {
    name: "Lamborghini Urus",
    type: "Sport SUV",
    price: "from $180/hour",
    description: "A luxury super SUV that blends performance with comfort.",
    image: car1,
  },
  {
    name: "Ferrari Roma",
    type: "Sport",
    price: "from $250/hour",
    description: "Elegant and powerful, designed for the ultimate driving thrill.",
    image: car2,
  },
  {
    name: "Range Rover Autobiography",
    type: "4x4 SUV",
    price: "from $200/hour",
    description: "Luxury and off-road capability in perfect harmony.",
    image: car3,
  },
  {
    name: "Rolls-Royce Phantom",
    type: "Luxury Sedan",
    price: "from $300/hour",
    description: "The pinnacle of elegance and unmatched luxury travel.",
    image: car4,
  },
  {
    name: "Porsche Panamera",
    type: "Sport Sedan",
    price: "from $220/hour",
    description: "A sports car feel in a luxury sedan body.",
    image: car5,
  },
  {
    name: "Bentley Continental GT",
    type: "Grand Tourer",
    price: "from $270/hour",
    description: "A handcrafted masterpiece for style and performance.",
    image: car6,
  },
];

export default function Cars() {
  return (
    <section
      id="cars"
      className="bg-black py-20 px-6 md:px-12 lg:px-20 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-wide uppercase mb-12 ">
          Our Most Popular This Week
        </h2>

        {/* Cars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {cars.map((car, i) => (
            <div
              key={i}
              className="relative group rounded-lg overflow-hidden shadow-md max-w-xs mx-auto"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 text-white flex flex-col justify-center items-start px-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="uppercase font-bold tracking-wide text-lg mb-3">
                  {car.type}
                </p>
                <p className="text-2xl font-semibold mb-3">
                  <span className="text-yellow-400">{car.price}</span>
                </p>
                <p className="text-sm leading-relaxed max-w-[250px]">
                  {car.description}
                </p>
              </div>

              {/* Car name + rating */}
              <div className="mt-3 text-center">
                <p className="text-base font-medium">{car.name}</p>
                <div className="flex justify-center text-yellow-500 text-sm mt-1">
                  ★★★★☆
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See more button */}
        <div className="mt-12">
          <Link
            to="/see-more"
            className="inline-block border border-yellow-400 px-8 py-3 uppercase tracking-wider text-sm text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  );
}
