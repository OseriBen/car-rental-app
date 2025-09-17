import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";  
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Booking from "./components/Booking";
import Cars from "./components/Cars";
import About from "./components/About";

// Pages
import SeeMore from "./Pages/SeeMore"; 
import AboutPage from "./Pages/AboutPage"; 
import ContactPage from "./Pages/ContactPage"; 

function Home() {
  const heroRef = useRef(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sticky navbar with slide-down animation */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transform transition-all duration-500 ${
          showSticky ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <Navbar variant="sticky" />
      </div>

      {/* Hero section */}
      <Hero innerRef={heroRef} />

      {/* About section */}
      <About />

      {/* Cars section */}
      <Cars />

      {/* Booking section */}
      <Booking />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/see-more" element={<SeeMore />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
