import React from "react";
import Hero from "../components/ui/sections/Hero";
import FeaturedProducts from "../components/ui/sections/FeaturedProducts";
import ShopByCategories from "../components/ui/sections/ShopByCategories";
import SeasonalBanner from "../components/ui/sections/SeasonalBanner";
import OurStory from "../components/ui/sections/OurStory";
import NewsLetter from "@/components/ui/sections/NewsLetter";
import Testimonial from "@/components/ui/sections/Testimonial";
import CTA from "@/components/ui/sections/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <ShopByCategories />
      <SeasonalBanner />
      <OurStory />
      <NewsLetter />
      <Testimonial />
      <CTA />
    </>
  );
};

export default HomePage;
