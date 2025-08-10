import React from "react";
import Header from "../components/ui/sections/Header";
import Hero from "../components/ui/sections/Hero";
import FeaturedProducts from "../components/ui/sections/FeaturedProducts";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
    </>
  );
};

export default HomePage;
