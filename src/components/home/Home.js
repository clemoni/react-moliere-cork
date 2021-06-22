import React from "react";

import { Header } from "./Header";
import { Info } from "./Info.js";
import { Navbar } from "./Navbar";
import { MainImg } from "./MainImg";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="header-info">
        <MainImg />
        <Header />
        <Info />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};
