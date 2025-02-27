import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0C0C0D] text-zinc-200 flex items-center justify-center px-20  max-[640px]:px-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto relative z-10 w-full">
        <div className="space-y-8 relative flex-1 lg:w-1/2">
          <h2 className="text-5xl shiny-text xl:text-6xl font-bold leading-tight overflow-hidden bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] bg-clip-text text-transparent">
            {`Hey, I'm `.split(" ").map((word, i) => (
              <span key={i} className="word inline-block mr-3">
                {word}
              </span>
            ))}
            <span className="word inline-block">Abhishek</span>
            <span className="word inline-block">Kumar</span>
            <motion.span
              className="word inline-block ml-3"
              animate={{ rotate: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              👋
            </motion.span>
          </h2>

          <div className="space-y-4">
            <p className="text-xl text-zinc-300 leading-relaxed">
              A{" "}
              <span className="font-semibold border-b-2 border-zinc-600 hover:border-zinc-400 transition-colors shiny-text">
                full-stack web developer
              </span>{" "}
              specializing in building scalable backend systems and robust APIs.
              Expert in{" "}
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 text-transparent bg-clip-text shiny-text">
                Node.js ecosystems
              </span>{" "}
              and cloud-native architectures, I engineer solutions that power
              modern web applications.
            </p>

            <p className="text-xl text-zinc-300 leading-relaxed">
              Backend specialist focused on{" "}
              <span className="border-b-2 border-zinc-700 hover:border-zinc-500 transition-colors shiny-text">
                microservices architecture
              </span>{" "}
              and{" "}
              <span className="border-b-2 border-zinc-700 hover:border-zinc-500 transition-colors shiny-text">
                database optimization
              </span>
              . When not architecting systems, I contribute to{" "}
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 text-transparent bg-clip-text shiny-text">
                open-source
              </span>{" "}
              or mentor aspiring backend developers 🛠️
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-center flex-1 lg:w-1/2">
          <div className="w-full max-w-[400px] h-[500px] relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#222] to-[#111] rounded-3xl transform rotate-2 scale-105 group-hover:rotate-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-[#0C0C0D] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://avatars.githubusercontent.com/u/122656682?v=4"
                alt="Abhisekh Kumar"
                className="w-full grayscale rotate-y-180 h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0D]/90 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#ffffff08] backdrop-blur-lg rounded-xl border border-zinc-800 hover:bg-[#1a1a1a] transition-colors">
              <h3 className="text-xl font-bold bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                Currently Architecting
              </h3>
              <p className="text-zinc-400 mt-1">
                High-performance API gateway system
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
