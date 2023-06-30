import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import Plans from "../components/Plans";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Plans />
      <Footer />
    </>
  );
};

export default HomeScreen;
