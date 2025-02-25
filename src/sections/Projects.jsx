import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Lazyflix - Netflix Clone",
    description: "",
    video: "https://www.pexels.com/download/video/2278095/",
  },
  {
    id: 2,
    title: "Recokus - Awwwards Clone",
    description: "",
    video: "https://www.pexels.com/download/video/2516159/",
  },
  {
    id: 3,
    title: "CIITM College Website",
    description: "",
    video: "https://www.pexels.com/download/video/2516160/",
  },
  {
    id: 4,
    title: "Admin Panel Dashboard",
    description: "",
    video: "https://www.pexels.com/download/video/2516159/",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".project-slide");

      const animation = gsap.to(sliderRef.current, {
        xPercent: -100 - (sections.length - 3),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.5,
          start: "top top",
          end: () =>
            "+=" + (containerRef.current.offsetWidth - window.innerWidth),
          invalidateOnRefresh: true,
        },
      });

      sections.forEach((section) => {
        gsap.fromTo(
          section.querySelector(".project-text"),
          { y: -10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
              containerAnimation: animation,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[400vw] min-h-screen overflow-x-hidden bg-[#0C0C0D] flex items-center"
    >
      <h2 className="absolute shiny-text top-10 left-[9%] max-[640px]:left-[4%] text-5xl font-[bold] text-white z-10">
        My Projects 🚀
      </h2>
      <div
        ref={sliderRef}
        className="flex w-full h-full items-center will-change-transform"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-slide w-screen flex flex-col items-center justify-center"
          >
            <div className="w-full h-screen relative flex items-center justify-evenly max-[640px]:flex-col pt-20 px-6">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className="w-[50%] max-[640px]:w-full h-[70%] max-[640px]:h-1/2 object-cover rounded-xl"
              />
              <div className="text-center project-text text-white text-3xl font-[semibold] px-6 py-2 rounded-lg">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
