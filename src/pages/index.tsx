import React from "react";
import Navbar from "./navbar/index";
import Home from "./home/index";
import About from "./about/index";
import Skills from "./skills/index";
import Qualification from "./qualification/index";
import Contact from "./contact/index";
import Footer from "./footer/index";

export default function Pages() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Contact />
      <Footer />
    </div>
  );
}
