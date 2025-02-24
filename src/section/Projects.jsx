import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Lazyflix - Netflix Clone",
    date: "Jan 2024",
    description:
      "Built using React, Firebase, and Tailwind. Includes smooth scrolling and an admin panel.",
    icon: <FaCode />,
  },
  {
    title: "Recokus - Awwwards Clone",
    date: "Dec 2023",
    description: "A high-end, Framer Motion-based animation-heavy website.",
    icon: <FaCode />,
  },
  {
    title: "Sarkari Results Clone",
    date: "Nov 2023",
    description:
      "Dynamic React app using the Sarkari Result API for real-time data.",
    icon: <FaCode />,
  },
];

const Projects = () => {
  return (
    <div className="bg-[#0C0C0D] text-zinc-200 font-[bold] px-10 max-[640px]:px-4 pb-20">
      <h2 className="text-5xl font-[bold] text-center mb-10 shiny-text">
        My Projects 🚀
      </h2>
      <VerticalTimeline>
        {projects.map((project, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#18181b", color: "#e4e4e7" }}
            contentArrowStyle={{ borderRight: "7px solid  #18181b" }}
            date={project.date}
            iconStyle={{ background: "#C02F17", color: "#e4e4e7" }}
            icon={project.icon}
          >
            <h3 className="vertical-timeline-element-title text-xl font-[semibold]">
              {project.title}
            </h3>
            <p className="font-[regular]">{project.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Projects;
