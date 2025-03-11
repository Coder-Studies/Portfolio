import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCertificate, FaTrophy } from 'react-icons/fa';

const certificates = [
   {
      title: 'Google Cloud Certification',
      organization: 'Google Cloud',
      date: 'Mar 2024',
      description:
         'Earned Professional Cloud Architect certification demonstrating cloud architecture expertise',
      credential: 'https://www.credential.net/abc123',
      icon: <FaCertificate />,
   },
   {
      title: 'AWS Certified Developer',
      organization: 'Amazon Web Services',
      date: 'Feb 2024',
      description: 'Associate-level certification validating cloud application development skills',
      credential: 'https://www.credly.com/certificates/aws-dev',
      icon: <FaCertificate />,
   },
   {
      title: 'Microsoft Learn AI Challenge',
      organization: 'Microsoft',
      date: 'Jan 2024',
      description: 'Won 2nd place in global AI development challenge with 5000+ participants',
      icon: <FaTrophy />,
   },
   {
      title: 'Hackathon Winner',
      organization: 'DevFest 2023',
      date: 'Nov 2023',
      description: '1st place in national-level hackathon for innovative e-commerce solution',
      icon: <FaTrophy />,
   },
   {
      title: 'Full Stack Development Certification',
      organization: 'Coursera',
      date: 'Oct 2023',
      description: 'Completed intensive full-stack development program with honors',
      credential: 'https://coursera.org/certificates/fullstack',
      icon: <FaCertificate />,
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
                  contentStyle={{ background: '#111', color: '#e4e4e7' }}
                  contentArrowStyle={{ borderRight: '7px solid  #111' }}
                  date={certificate.date}
                  iconStyle={{ background: '#C02F17', color: '#e4e4e7' }}
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
