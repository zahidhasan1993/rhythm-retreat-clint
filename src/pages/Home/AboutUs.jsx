import React from "react";
import Lottie from "react-lottie";
import img1 from "../../assets/Images/Lottie/148777-man-working-mobile-tablet.json";

const AboutUs = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: img1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="my-10 md:grid md:grid-cols-2">
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl font-bold">What We Do ?</h1>
        <p className="py-4 text-xl">
        Welcome to Rhythm Retreat! Our music school is dedicated to providing an enriching and inspiring musical education experience for students of all ages and skill levels.At Rhythm Retreat, we firmly believe that music has the power to touch hearts, ignite passions, and transform lives. Our team of talented and passionate instructors are committed to guiding and nurturing each student's musical journey. They bring a wealth of experience and expertise to the classroom, ensuring that every student receives personalized attention and instruction tailored to their unique goals and aspirations.
        </p>
      </div>
      <div className="">
        <Lottie options={defaultOptions}></Lottie>
      </div>
    </div>
  );
};

export default AboutUs;
