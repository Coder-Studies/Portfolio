import { useEffect, useMemo, useRef, useState } from "react";
import { memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import Swal from "sweetalert2";
import { setProjectData } from "../Store/Ui.Slice";
import { useDispatch, useSelector } from "react-redux";
import envConstant from "../../constant/env.constant.mjs";
gsap.registerPlugin(ScrollTrigger);

let Token = envConstant.TOKEN;

if (!Token) {
  Swal.fire({
    icon: "error",
    title: "Error",
    theme: "dark",

    text: "Token is missing in .env file",
  });
}

const Projects = memo(() => {
  let projectData = useSelector((state) => state.Ui.projects);

  // if (!projectData) {
  //   projectData = []
  // }

  let dispatch = useDispatch();

  const [projects, setProjects] = useState([]);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

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

  let get_All_Projects = async () => {
    try {
      if (projectData.length > 0) {
        setProjects(projectData);
        return;
      }

      let res = await axios.get("/api/v1/project/find", {
        headers: {
          Authorization: `${Token}`,
        },
      });

      let data = res.data.data;
      dispatch(setProjectData([...data]));
      setProjects(data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
      });
    }
  };

  useEffect(() => {
    get_All_Projects();
  }, [projectData]);

  return (
    <div
      ref={containerRef}
      className="relative w-[200vw] max-[640px]:w-[350vw] min-h-screen overflow-hidden bg-[#0C0C0D] flex items-center"
    >
      <h2 className="absolute top-10 left-[22%] max-[640px]:left-[7%] max-[640px]:text-[8vw] text-5xl font-[bold] text-gray-100 z-10 shiny-text">
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
                allowfullscreen="true"
              />

              <div className="About__Project w-[95vw] text-center text-white font-semibold px-6 py-6 max-[640px]:px-2 max-[640px]:py-4 bg-[#121212]/40 backdrop-blur-lg border border-gray-700/40 rounded-xl shadow-2xl max-[640px]:mt-0">
                {/* Project Title */}
                <h4 className="text-3xl text-[#C02F17] font-bold shiny-text text-[1.2vw] max-[640px]:text-[3.5vw] border-b border-[#C02F17] pb-2 w-fit mx-auto">
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
                  <li className="text-[0.9vw] max-[640px]:text-[2vw] text-[#f59e0b] font-bold border-l-4 border-[#f59e0b] pl-2 mb-[2.5vh]">
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
