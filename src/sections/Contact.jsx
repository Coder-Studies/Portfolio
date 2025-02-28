import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  const sectionRef = useRef();
  const socialLinks = [
    { icon: <FaEnvelope />, url: "mailto:abhishek9661342993@gmail.com", color: "#b5b5b5" },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/abhishek-gupta",
      color: "#0A66C2",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/Code-With-Abhishek-Kumar",
      color: "#333",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/abhisekh_tw",
      color: "#1DA1F2",
    },
    {
      icon: <FaDribbble />,
      url: "https://dribbble.com/abhisekh",
      color: "#EA4C89",
    },
    {
      icon: <FaBehance />,
      url: "https://behance.net/abhisekh",
      color: "#1769FF",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0D] text-white min-h-screen w-full flex flex-col items-center justify-center px-10 max-[640px]:px-6 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10 mix-blend-soft-light" />

      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <h2 className="text-5xl max-[640px]:text-4xl font-bold shiny-text">
      🚀 Let's Create Something Amazing! ✨🔥
    </h2>
    <p className="text-xl mt-4 shiny-text">
      Your vision, our code - let's build the future together
    </p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="glass-container backdrop-blur-3xl rounded-3xl border border-white/10 p-8 shadow-2xl w-full max-w-2xl flex flex-col items-center"
  >
    <form className="space-y-8 w-full">
      <div className="floating-input-group">
        <input
          type="text"
          className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b5b5b5] transition-all"
          placeholder="Your Name ✍️"
        />
      </div>

      <div className="floating-input-group">
        <input
          type="email"
          className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b5b5b5] transition-all"
          placeholder="Email 📧"
        />
      </div>

      <div className="floating-input-group">
        <textarea
          rows="4"
          className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b5b5b5] transition-all"
          placeholder="Message 💬"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] hover:from-[#2d2d2d] hover:to-[#1a1a1a] p-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 transition-all"
      >
        <span className="text-xl">🚀</span>
        Launch Message
      </motion.button>
    </form>
  </motion.div>
</div>


      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C0C0D] to-transparent z-10" />
    </section>
  );
};

export default Contact;
