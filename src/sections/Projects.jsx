import { useEffect, useRef } from "react";
import { memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = memo(() => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  // Static project data
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my skills and projects.",
      features: ["Responsive Design", "Interactive Animations", "SEO Optimized"],
      techStack: ["React", "Tailwind CSS", "GSAP"],
      links: [
        { label: "GitHub", link: "https://github.com/portfolio-website" },
        { label: "Live Demo", link: "https://portfolio-website.com" },
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A scalable e-commerce platform with payment integration.",
      features: ["Product Management", "Secure Payments", "User Authentication"],
      techStack: ["Node.js", "Express", "MongoDB"],
      links: [
        { label: "GitHub", link: "https://github.com/ecommerce-platform" },
        { label: "Live Demo", link: "https://ecommerce-platform.com" },
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Chat Application",
      description: "A real-time chat application with WebSocket integration.",
      features: ["Real-Time Messaging", "Group Chats", "Media Sharing"],
      techStack: ["React", "Socket.IO", "Firebase"],
      links: [
        { label: "GitHub", link: "https://github.com/chat-application" },
        { label: "Live Demo", link: "https://chat-application.com" },
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sliderRef.current, {
        x: () => sliderRef.current.scrollWidth - window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `-=${sliderRef.current.scrollWidth - window.innerWidth}`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[200vw] max-[640px]:w-[350vw] min-h-screen overflow-hidden bg-gradient-to-r from-[#0C0C0D] to-[#1A1A1D] flex items-center"
    >
      <h2 className="absolute top-10 left-[22%] max-[640px]:left-[7%] max-[640px]:text-[8vw] text-5xl font-[bold] text-[#FFD700] z-10 shiny-text">
        My Projects 🚀
      </h2>
      <div
        ref={sliderRef}
        className="flex h-full items-center will-change-transform"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[150vw] max-[640px]:w-[250vw] flex flex-col items-center justify-center"
          >
            <div className="h-screen flex items-center justify-evenly gap-10 pt-20 px-20 max-[640px]:px-6 ">
              <iframe
                src={project.video}
                title={project.title}
                className="Video_Container w-[70%] max-[640px]:w-[50%] object-cover rounded-xl shadow-lg border border-white/20 h-[71vh] max-[640px]:hidden"
                allowFullScreen
              />

              <div className="About__Project w-[95vw] text-center text-white font-semibold px-6 py-6 max-[640px]:px-2 max-[640px]:py-4 bg-[#121212]/40 backdrop-blur-lg border border-gray-700/40 rounded-xl shadow-2xl max-[640px]:mt-0">
                {/* Project Title */}
                <h4 className="text-3xl text-[#32CD32] font-bold shiny-text text-[1.2vw] max-[640px]:text-[3.5vw] border-b border-[#32CD32] pb-2 w-fit mx-auto">
                  {project.title}
                </h4>

                {/* Description */}
                <div className="Project_Description w-full flex items-center justify-center max-[640px]:mt-[1.6vh]">
                  <p className="mt-3 max-[640px]:mt-2 text-gray-300 w-[85%] text-center text-[0.8vw] max-[640px]:text-[2.5vw] max-[640px]:w-full max-[640px]:text-left leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="mt-4 max-[640px]:mt-[2vh] pl-4 max-[640px]:pl-1 text-left space-y-2 max-[640px]:space-y-1">
                  <li className="text-[0.9vw] max-[640px]:text-[2vw] text-[#FFD700] font-bold border-l-4 border-[#FFD700] pl-2 mb-[2.5vh]">
                    Features:
                  </li>
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 w-fit text-[0.7vw] max-[640px]:text-[2vw] text-[#d1d5db] bg-white/5 px-3 py-1 rounded-md border border-white/10"
                    >
                      ✅ {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mt-6 max-[640px]:mt-4">
                  <h3 className="text-lg max-[640px]:text-[4vw] font-bold text-[#00C9A7] underline underline-offset-4">
                    Tech Stack:
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3 max-[640px]:gap-2 mt-3 max-[640px]:mt-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#2d2d2d]/70 text-sm max-[640px]:text-[3vw] text-white rounded-full border border-[#00C9A7]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-6 max-[640px]:mt-[3vh] w-full flex flex-col items-center">
                  {/* Section Title */}
                  <h3 className="text-lg max-[640px]:text-[4vw] font-bold text-[#00C9A7] underline underline-offset-4 mb-4">
                    Project Links:
                  </h3>

                  {/* Buttons */}
                  <div className="flex flex-wrap justify-center gap-4 max-[640px]:gap-2 w-fit">
                    {project.links.map((element, index) => (
                      <a
                        key={index}
                        href={element.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-[1.8vh] py-[1vh] bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-400 hover:to-lime-400 text-black font-semibold rounded-lg shadow-md text-[0.7vw] max-[640px]:text-[3.5vw] transition-all duration-200 ease-in-out"
                      >
                        {element.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
