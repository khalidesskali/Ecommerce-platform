import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="mt-[65px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
