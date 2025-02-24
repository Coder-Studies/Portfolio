import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import CountUp from "./CoutUp";

const Loader = () => {
  return (
    <div className="fixed text-6xl font-[bold] top-0 left-0 z-[999999999] w-full h-screen flex items-center justify-center flex-col bg-zinc-900 text-zinc-200">
      <h1>🙏</h1>
      <h1>Namaskar</h1>
      <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={1.5}
        className="count-up-text absolute bottom-5 right-5"
      />
    </div>
  );
};

export default Loader;
