import React from "react";
import "./App.scss";
import Navbar from "./conponents/navbar/Navbar";
import Hero from "./conponents/hero/Hero";
import Parallax from "./conponents/parallax/Parallax";
import Services from "./conponents/services/Services";
import Portfolio from "./conponents/portfolio/Portfolio";
import Contact from "./conponents/contact/Contact";
import Cursor from "./conponents/cursor/Cursor";
import Education from "./conponents/education/education";

function App() {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Education">
        <Education />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
