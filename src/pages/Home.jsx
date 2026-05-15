import React from 'react'
import slide1 from "../images/inventory2.jpg";
import slide2 from "../images/inventory1.jpg";
import { useState, useEffect } from 'react';

const Home = () => {
    const slides = [
    {
      image: slide1,
      title: "Big Summer Sale",
      subtitle: "Up to 50% off selected items"
    },
    {
      image: slide2,
      title: "New Arrivals",
      subtitle: "Fresh styles just dropped"
    }
  ];

  const [index, setIndex] = useState(0);

  // Auto change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
         <div className="w-full">

      {/* HERO SECTION */}
      <div className="relative w-full h-[90vh]">

        {/* IMAGE */}
        <img
          src={slides[index].image}
          alt="slide"
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center">

          <h1 className="text-5xl font-bold">
            {slides[index].title}
          </h1>

          <p className="text-lg mt-4">
            {slides[index].subtitle}
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200">
            Shop Now
          </button>

        </div>

      </div>

    </div>
    </div>
  )
}

export default Home