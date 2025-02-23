import react from "react";
import Hero from "./section/Hero";
import Background from "./components/heroComponents/Background";
import Navbar from "./components/Navbar";
import Skills from "./section/Skills";
import Projects from "./section/Projects";
import ScrollVelocity from "./section/ScrollVelocity";

const App = () => {
  return (
    <div className="relative overflow-hidden">
      <Background />
      <Navbar />
      <Hero />
      <Skills />  
      <ScrollVelocity
        texts={["Abhisekh Kumar", "Backend Developer"]}
        velocity={100}
        className="custom-scroll-text bg-[#0C0C0D] text-zinc-100"
      />
      <Projects />
    </div>
  );
};

export default App;
