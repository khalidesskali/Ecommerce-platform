import React from "react";
import Header from "../components/ui/sections/Header";
import Hero from "../components/ui/sections/Hero";
import FeaturedProducts from "../components/ui/sections/FeaturedProducts";
import ShopByCategories from "../components/ui/sections/ShopByCategories";
import SeasonalBanner from "../components/ui/sections/SeasonalBanner";
import OurStory from "../components/ui/sections/OurStory";
import NewsLetter from "@/components/ui/sections/NewsLetter";
import Testimonial from "@/components/ui/sections/Testimonial";
import CTA from "@/components/ui/sections/CTA";
import Footer from "@/components/ui/sections/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <ShopByCategories />
        <SeasonalBanner />
        <OurStory />
        <NewsLetter />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
