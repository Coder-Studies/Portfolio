import react from "react";
import Hero from "./section/Hero";
import Background from "./components/heroComponents/Background";
import Navbar from "./components/Navbar";
import Skills from "./section/Skills";

const App = () => {
  return (
    <div className="relative overflow-hidden">
    <Background/>
    <Navbar/>
    <Hero/>
    <Skills/>
    </div>
  );
};

export default App;
