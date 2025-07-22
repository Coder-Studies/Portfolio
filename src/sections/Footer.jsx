import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

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
    <footer className="relative bg-[#0C0C0D] text-zinc-200 border-t border-[#ffffff10] backdrop-blur-3xl">
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
              <div className="flex gap-4 ml-1">
                <FaEnvelope className="text-xl" />
                <a
                  href="mailto:abhishek.nextgen.dev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white/70 transition-colors group"
                >
                  abhishek.nextgen.dev@gmail.com
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              </div>
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
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-[bold] shiny-text">Follow Me</h3>
            <div className="flex gap-6">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/abhishek-nextgen-dev",
                  color: "#111",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/abhishek-nexgen-dev",
                  color: "#0A66C2",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/abhishek.nextgen.dev",
                  color: "#E1306C",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl p-3 rounded-full bg-zinc-900 hover:bg-zinc-100 transition-all"
                  style={{ "--hover-color": social.color }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = social.color)
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Important Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-[bold] shiny-text">Important Links</h3>
            <ul className="list-none space-y-2">
              {[
                { name: "Terms and Conditions", link: "/terms-and-conditions" },
                { name: "Public Contact Details", link: "/public-contact-details" },
                { name: "Refund and Cancellation Policy", link: "/refund-and-cancellation-policy" },
                { name: "Shipping and Delivery Policy", link: "/shipping-and-delivery-policy" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-[#1E90FF] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#ffffff10] mt-12 pt-8 text-center shiny-text font-[medium]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © {currentYear} Abhishek Kumar
           
            🚀
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
