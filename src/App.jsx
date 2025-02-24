import react, { useEffect, useRef, useState } from "react";
import Hero from "./section/Hero";
import Background from "./components/heroComponents/Background";
import Navbar from "./components/Navbar";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import ScrollVelocity from "./section/ScrollVelocity";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import gsap from "gsap";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const loadPromise = new Promise((resolve) =>
      window.addEventListener("load", resolve)
    );
    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 2000));

    Promise.all([loadPromise, timeoutPromise]).then(() => {
      if (isMounted) {
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
      window.removeEventListener("load", loadPromise);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="relative overflow-hidden">
      <Cursor />
      <Background />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <ScrollVelocity
        texts={["Abhisekh Kumar", "Backend Developer"]}
        velocity={100}
        className="custom-scroll-text bg-[#0C0C0D] text-zinc-200 font-[bold] select-none"
      />
    </div>
  );
};

export default App;
