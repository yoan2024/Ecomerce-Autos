import React, { useState } from "react";
import Hero from "../components/Hero";
import FeaturedCars from "../components/FeaturedCars";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div className="w-screen bg-slate-800   flex flex-col items-center justify-center">
      <Hero />
      <FeaturedCars />
      <CallToAction />
    </div>
  );
};

export default Home;
