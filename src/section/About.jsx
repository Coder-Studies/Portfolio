import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    title: "🏆 UI/UX Competition",
    desc: "Received a participation certificate from Gravity Coding.",
    date: "Oct 2023",
  },
  {
    title: "🎖️ HTML Challenge",
    desc: "Completed Gravity Coding's HTML challenge successfully.",
    date: "Nov 2023",
  },
  {
    title: "🚀 MERN Project",
    desc: "Built a full-fledged MERN website for CIITM.",
    date: "Jan 2024",
  },
  {
    title: "🔥 Awwwards-Level Animation",
    desc: "Created Recokus, an advanced animated website.",
    date: "Feb 2024",
  },
  {
    title: "🛠 React Admin Panel",
    desc: "Developed a full-featured admin panel with JSON server.",
    date: "Dec 2023",
  },
];

const Achievements = () => {
  return (
    <section className="relative bg-[#0C0C0D] text-zinc-200 h-fit flex flex-col pb-20 px-20 max-[640px]:px-6 overflow-hidden">
      <h2 className="text-4xl font-[bold] mb-20 shiny-text">
        🏅 Certificates & Achievements 🎯
      </h2>
      <div className="w-full flex gap-6 max-[640px]:flex-col">
        {achievements.map((item, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={500}
            className="certificate bg-zinc-900 py-6 px-4 rounded-lg w-72 max-[640px]:w-full shadow-lg cursor-grabbing"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-zinc-300 mt-2">{item.desc}</p>
              <span className="text-sm text-zinc-500 mt-2 block">
                {item.date}
              </span>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
