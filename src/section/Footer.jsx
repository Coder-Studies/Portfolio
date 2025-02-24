import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import Magnet from "../components/heroComponents/Magnet";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
      setCurrentDate(now.toLocaleDateString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative bg-[#0C0C0D] text-zinc-300 border-t border-[#ffffff10] backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-8 max-[640px]:px-6 pt-10 pb-6">
        <div className="flex flex-col md:flex-row gap-12 justify-between">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-4xl font-[bold] shiny-text">Let's Connect</h3>
            <div className="flex flex-col gap-2 font-[medium]">
              <p className="flex ml-1 items-center gap-4 hover:text-[#C02F17] transition-colors">
                <FaEnvelope className="text-xl" />
                abhisekh@dev.com
              </p>
              <p className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                Bagodar, Jharkhand, India
              </p>
              <p className="flex items-center gap-3">
                <span className="text-xl">🕒</span>
                <span className="flex flex-col">
                  <span>{currentTime}</span>
                  <span className="text-sm text-zinc-500">{currentDate}</span>
                </span>
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl font-[bold] shiny-text">Follow Me</h3>
            <div className="flex gap-6">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/Code-With-Abhishek-Kumar",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/abhishek-gupta-545aa2260/",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/abhishek_gupta.ig/",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl p-3 rounded-full bg-zinc-900 hover:bg-[#C02F17] transition-all"
                >
                  <Magnet
                    disabled={false}
                    magnetStrength={20}
                    className="cursor-pointer"
                  >
                    {social.icon}
                  </Magnet>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#ffffff10] mt-12 pt-8 text-center shiny-text font-[medium]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © {currentYear} Abhisekh Kumar. Designed & Developed With ❤️ By{" "}
            <a
              href="https://www.linkedin.com/in/dev-sameer-khan/"
              className="font-[semibold]"
            >
              Sameer Khan
            </a>{" "}
            🚀
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
