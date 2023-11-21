import React from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-dark text-white">
      <Header />
      <HeroSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
