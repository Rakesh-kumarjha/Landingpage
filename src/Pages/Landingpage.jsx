import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Destinations from "../components/dropdown";
import Stats from "../components/Sats";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Card from "../components/Card";

export const Landingpage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Stats />
      <Destinations />
      <Card />
      <Services />
      <Footer />
    </div>
  );
};
