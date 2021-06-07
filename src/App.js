import React, { useEffect } from "react";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import LatestProjects from "./components/LatestProjects";
import Qualification from "./components/Qualification";
import Specializing from "./components/Specializing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Hero />
      <Specializing />
      <Expertise />
      <LatestProjects />
      <Qualification />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
