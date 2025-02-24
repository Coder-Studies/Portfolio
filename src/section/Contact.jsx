import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaDownload,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const socialLinks = [
    { icon: <FaEnvelope />, url: "mailto:abhisekh@dev.com" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/abhishek-gupta" },
    { icon: <FaGithub />, url: "https://github.com/Code-With-Abhishek-Kumar" },
    { icon: <FaTwitter />, url: "https://twitter.com/abhisekh_tw" },
    { icon: <FaDribbble />, url: "https://dribbble.com/abhisekh" },
    { icon: <FaBehance />, url: "https://behance.net/abhisekh" },
  ];

  return (
    <section className="contact-section relative bg-[#0C0C0D] text-white min-h-screen w-full flex flex-col items-center justify-center px-10 max-[640px]:px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,#1e1e1e,#0C0C0D)] opacity-30"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-12 text-center z-10"
      >
        📬 Get In Touch
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12 w-full z-10">
        <motion.div
          transition={{ type: "spring", stiffness: 300 }}
          className="w-[70%] max-[640px]:w-full backdrop-blur-lg bg-[rgba(255,255,255,0.05)] p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] shadow-xl"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-lg mb-2">Your Name ✍️</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-zinc-950 text-white border border-gray-600 focus:outline-none focus:border-[#C02F17]"
              />
            </div>
            <div>
              <label className="block text-lg mb-2">Email 📧</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-zinc-950 text-white border border-gray-600 focus:outline-none focus:border-[#C02F17]"
              />
            </div>
            <div>
              <label className="block text-lg mb-2">Message 💬</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-lg bg-zinc-950 text-white border border-gray-600 focus:outline-none focus:border-[#C02F17]"
              ></textarea>
            </div>
            <motion.button className="w-full bg-[#C02F17] hover:bg-[#A02814] transition-all p-3 rounded-lg text-lg font-semibold">
              Send Message 🚀
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 space-y-8 backdrop-blur-lg shadow-xl bg-[rgba(255,255,255,0.05)] p-8 rounded-2xl border border-[rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-4">
            <h3 className="text-3xl font-bold flex items-center gap-3">
              <FaEnvelope className="text-[#C02F17]" />
              Direct Contact
            </h3>
            <p className="text-lg">abhisekh@dev.com</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Social Profiles</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-lg bg-zinc-900 hover:bg-[#C02F17] transition-colors text-2xl"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.button className="w-full bg-[#18181b] hover:bg-[#C02F17] p-4 rounded-lg flex items-center justify-center gap-2 text-lg font-semibold transition-all">
            <FaDownload />
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
