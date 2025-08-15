import React from "react";
import Header from "../components/ui/sections/Header";
import Hero from "../components/ui/sections/Hero";
import FeaturedProducts from "../components/ui/sections/FeaturedProducts";
import ShopByCategories from "../components/ui/sections/ShopByCategories";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <ShopByCategories />
      </main>
    </>
  );
};

export default HomePage;
