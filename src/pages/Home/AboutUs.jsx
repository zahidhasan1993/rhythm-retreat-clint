import React from "react";
import img1 from "../../assets/Images/banner2/asba-drums-CLKiyzlZ274-unsplash.jpg";
import img2 from "../../assets/Images/banner2/benjamin-lehman-0h2F-Ib2Zdo-unsplash.jpg"
import img3 from "../../assets/Images/banner2/david-wayne-IcDiblvV9Ig-unsplash.jpg"
import img4 from "../../assets/Images/banner2/edgar-5HltXT-6Vgw-unsplash.jpg"
import img5 from "../../assets/Images/banner2/felicia-buitenwerf-kGLYLMVs83g-unsplash.jpg"
import img6 from "../../assets/Images/banner2/michelen-studios-Do1EdrDi1ac-unsplash.jpg"
import img7 from "../../assets/Images/banner2/sara-budhwani-1J9dYe4wkEI-unsplash.jpg"
import { Link } from "react-router-dom";


const AboutUs = () => {

  return (
    <div className="relative overflow-hidden bg-white mt-10">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              What we do ?
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Welcome to Rhythm-Retreat! We inspire through music. Experienced instructors, diverse instruments, personalized lessons, state-of-the-art facilities, and a vibrant community. Theory, technique, creativity, and performance opportunities. Join us for a lifelong musical adventure.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={img1}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={img2}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={img3}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={img4}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={img5}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={img6}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={img7}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/classes"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Book Your Class
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
