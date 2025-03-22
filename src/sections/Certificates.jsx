import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCertificate, FaTrophy } from "react-icons/fa";

const certificates = [
  {
    title: "Advance Diploma in Computer Application Plus",
    organization: "ICS Dhanbad",
    date: "March 2021",
    description:
      "ADCA (Advanced Diploma in Computer Application) is a full one-year diploma program that provides basic computer knowledge in depth.",
    credential: "https://icsdhanbad.com/certificate-verification?sn=SRN-19616833&dob=08-02-2007",
    icon: <FaCertificate />,
  },
 
  {
    title: "Mentorship Program",
    organization: "Pregrad",
    date: "Nov 2023",
    description:
      "3 montorship program",
    credential: "https://media.licdn.com/dms/image/v2/D562DAQE1ZDTdz3WdaQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1712373466840?e=1742986800&v=beta&t=3TO-OSsOXNGAe_7svhYWe82PuvPgO7ebTTt33uJe5T0",
    icon: <FaTrophy />,
  },

];

const Certificates = () => {
  return (
    <div className="bg-[#0C0C0D] text-zinc-200 font-[bold] px-10 max-[640px]:px-4 py-30 max-[640px]:py-0">
      <h2 className="text-5xl text-center max-[640px]:text-4xl font-[bold] pl-10 max-[640px]:pl-0 mb-10 shiny-text">
        🏅 Certificates & Achievements 🎯
      </h2>
      <VerticalTimeline>
        {certificates.map((certificate, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#111", color: "#e4e4e7" }}
            contentArrowStyle={{ borderRight: "7px solid  #111" }}
            date={certificate.date}
            iconStyle={{ background: "#C02F17", color: "#e4e4e7" }}
            icon={certificate.icon}
          >
            <h3 className="vertical-timeline-element-title text-xl font-[semibold]">
              {certificate.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-zinc-400 font-[medium]">
              {certificate.organization}
            </h4>
            <p className="font-[regular]">
              {certificate.description}
              {certificate.credential && (
                <a
                  href={certificate.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C02F17] hover:underline ml-2"
                >
                  View Credential
                </a>
              )}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Certificates;
