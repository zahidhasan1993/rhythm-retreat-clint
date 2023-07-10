import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/Images/music.jpg"
const NewClasses = () => {
    return (
        <div className="relative mx-auto w-full max-w-7xl">
        <div className="py-16 sm:py-28 px-4 flex justify-center items-center bg-gradient-to-br from-gray-700 to-gray-900">
  
          {/* :IMAGE BACKGROUND */}
          <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover filter mix-blend-overlay" />
  
  
          {/* :PROMO */}
          <div className="relative max-w-2xl flex flex-col justify-center items-center text-center">
            {/* ::Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-extrabold tracking-wide">New Classes are here</h2>
            {/* ::Text */}
            <p className="mt-3 text-sm sm:text-base text-white font-medium">Find your music interest and choose your class to make your dream.</p>
            {/* ::Button */}
            <Link to='/classes' className="mt-6 py-2.5 px-6 shadow rounded bg-gray-50 text-sm sm:text-base text-gray-700 font-semibold hover:shadow-lg hover:bg-white hover:text-gray-900">Book New Arrivals</Link>
          </div>
  
        </div>
      </div>
    );
};

export default NewClasses;