import react, { useEffect, useRef, useState } from "react";
import Hero from "./section/Hero";
import Background from "./components/heroComponents/Background";
import Navbar from "./components/Navbar";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import ScrollVelocity from "./section/ScrollVelocity";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import Testimonials from "./section/Testimonials";
import About from "./section/About";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 5000);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Loader />
      ) : (
        <div className="relative overflow-hidden">
          <Cursor />
          <Background />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <ScrollVelocity
            texts={["Abhisekh Kumar", "Backend Developer"]}
            velocity={100}
            className="custom-scroll-text bg-[#0C0C0D] text-zinc-200 font-[bold] select-none"
          />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
