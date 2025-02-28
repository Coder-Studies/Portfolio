import React from "react";
import Magnet from "../components/heroComponents/Magnet";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-black/50 absolute top-0 z-[99] pointer-events-none pt-20 max-[640px]:pt-10">
      <div className="flex w-full h-full gap-4 flex-col items-center justify-center text-white px-4 max-[640px]:px-2">
        <img
          src="https://res.cloudinary.com/dbgzq41x2/image/upload/v1740401689/dp_phjacv.svg"
          alt="Profile"
          className="w-30 h-30 rounded-full border-2 border-zinc-800 grayscale"
        />
        <p className="shiny-text text-md">Hi, I'm Abhishek Kumar 👋</p>
        <p className="text-[4vw] max-[640px]:text-[10vw] w-[45%] max-[640px]:w-full font-light text-center leading-tight shiny-text">
          Building scalable backends, APIs, and full-stack solutions.
        </p>

        <Magnet disabled={false} magnetStrength={20} className="cursor-pointer">
          <button className="mt-2 bg-zinc-900 px-6 py-2 rounded cursor-pointer pointer-events-auto">
            <a
              href="https://www.linkedin.com/in/abhishek-gupta-545aa2260/"
              target="_blank"
              className="shiny-text"
            >
              Hire Me ↗
            </a>
          </button>
        </Magnet>
      </div>
    </section>
  );
};

export default Hero;
