import React, { useEffect } from "react";
import useChangeTitle from "../../Hooks/useChangeTitle";
import Banner from "./Banner";
import PopularClasses from "./PopularClasses";
import OurInsturctors from "./OurInsturctors";
import AOS from "aos";
import "aos/dist/aos.css";
import CallUs from "./CallUs";
import FeedBack from "./FeedBack";
import AboutUs from "./AboutUs";
import NewClasses from "./NewClasses";

const Home = () => {
  useChangeTitle("Home | Rhythm Retreate");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <AboutUs></AboutUs>

      <div data-aos="zoom-in-up">
        <PopularClasses></PopularClasses>
      </div>
      <div className="my-10">
        <NewClasses></NewClasses>
      </div>
      <div data-aos="fade-up">
        <OurInsturctors></OurInsturctors>
      </div>

      <div data-aos="zoom-in">
        <CallUs></CallUs>
      </div>
      <div data-aos="zoom-in-up">
        <FeedBack></FeedBack>
      </div>
    </div>
  );
};

export default Home;
