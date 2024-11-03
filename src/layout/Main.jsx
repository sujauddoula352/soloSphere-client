import React from "react";
import Navbar from "../componants/navBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../componants/footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
