// src/pages/ContactPage.jsx
import React from "react";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-400 mb-8">Reach out for bookings, questions, and support.</p>

        {/* small form (optional) */}
        <form className="grid gap-4 max-w-md">
          <input className="bg-black border border-gray-700 px-4 py-2 rounded" placeholder="Your name" />
          <input className="bg-black border border-gray-700 px-4 py-2 rounded" placeholder="Email" />
          <textarea className="bg-black border border-gray-700 px-4 py-2 rounded" placeholder="Message" rows="5" />
          <button className="px-6 py-3 bg-yellow-400 text-black rounded font-medium">Send</button>
        </form>
      </main>
    </div>
  );
}
