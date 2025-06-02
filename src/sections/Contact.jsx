import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDownload,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");

  const sectionRef = useRef();
  const socialLinks = [
    {
      icon: <FaEnvelope />,
      url: "mailto:abhishek.nextgen.dev@gmail.com",
      color: "#EA4335",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/916202665965",
      color: "#25D366",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/abhishek-nextgen-dev",
      color: "#E4405F",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/abhishek-nextgen-dev",
      color: "#0077B5",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/abhishek-nextgen-dev ",
      color: "#ffff",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/abhisekh_tw",
      color: "#1DA1F2",
    },
  ];

  let Token = import.meta.env.VITE_TOKEN;

  if (!Token) {
    Swal.fire({
      icon: "error",
      title: "Error",
      theme: "dark",

      text: "Token is missing in .env file",
    });
  }

  let Handle_Submit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post(
        "/api/v1/Contact/create",
        {
          name: Name,
          email: Email,
          phone: Phone,
          message: Message,
        },
        {
          headers: {
            Authorization: `${Token}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success",
        theme: "dark",
        text: res.data.message,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        theme: "dark",
        text: error.response.data.message || "Something went wrong",
      });
    }
  };

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

        <div className="flex flex-col lg:flex-row gap-12 w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-container backdrop-blur-3xl rounded-3xl border border-white/10 p-8 shadow-2xl flex-1"
          >
            <form className="space-y-8" onSubmit={(e) => Handle_Submit(e)}>
              <div className="floating-input-group">
                <input
                  type="text"
                  onInput={(e) => setName(e.target.value)}
                  className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none transition-all"
                  placeholder="Your Name ✍️"
                />
              </div>

              <div className="floating-input-group">
                <input
                  type="email"
                  onInput={(e) => setEmail(e.target.value)}
                  className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none transition-all"
                  placeholder="Email 📧"
                />
              </div>

              <div className="floating-input-group Mobile">
                <input
                  onInput={(e) => setPhone(Number(e.target.value))}
                  type="text"
                  className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none transition-all"
                  placeholder="Your Phone Number  📞"
                />
              </div>

              <div className="floating-input-group">
                <textarea
                  onInput={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none transition-all"
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
            className="space-y-8 flex-1"
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
                    href="mailto:abhishek9661342993@gmail.com"
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
                  <div className="flex flex-wrap items-center gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all text-4xl flex items-center justify-center flex-1 min-w-[150px] max-[640px]:min-w-[100px]"
                        style={{ color: link.color }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <a
                  href="https://drive.google.com/file/d/10pjS0DfotznJo438YODA2d4G9rEYW4uC/view?usp=sharing"
                  target="_blank"
                >
                  <motion.button
                    whileHover={{ y: -3 }}
                    className="w-full bg-white/5 hover:bg-white/20 p-4 rounded-xl flex items-center justify-center gap-3 text-lg font-bold transition-colors cursor-pointer"
                    download="https://res.cloudinary.com/dbgzq41x2/image/upload/v1741687588/abhisekh_sgfwmz.pdf"
                  >
                    <FaDownload className="text-xl" />
                    Get My Blueprint
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
