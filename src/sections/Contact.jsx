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

      <div className="relative z-20 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl max-[640px]:text-4xl font-[bold] shiny-text">
            🚀 Let's Create Something Amazing! ✨🔥
          </h2>
          <p className="text-xl mt-4 shiny-text">
            Your vision, our code - let's build the future together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-container backdrop-blur-3xl rounded-3xl border border-white/10 p-8 shadow-2xl"
          >
            <form className="space-y-8">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-container backdrop-blur-3xl rounded-3xl border border-white/10 p-8 h-full shadow-2xl">
              <div className="space-y-10">
                <div className="group">
                  <h3 className="text-3xl font-bold flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] p-3 rounded-lg">
                      <FaEnvelope />
                    </span>
                    Direct Line
                  </h3>
                  <a
                    href="mailto:abhisekh@dev.com"
                    className="text-xl hover:text-white/70 transition-colors flex items-center gap-2"
                  >
                    abhishek9661342993@gmail.com
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </a>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    Digital Playground
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all text-3xl flex items-center justify-center"
                        style={{ color: link.color }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ y: -3 }}
                  className="w-full bg-white/5 hover:bg-white/20 p-4 rounded-xl flex items-center justify-center gap-3 text-lg font-bold transition-colors"
                >
                  <FaDownload className="text-xl" />
                  Get My Blueprint
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C0C0D] to-transparent z-10" />
    </section>
  );
};

export default Contact;
