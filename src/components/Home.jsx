import React from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header className="bg-dark text-white" />
      <HeroSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
