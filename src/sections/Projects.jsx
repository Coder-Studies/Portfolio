import { useEffect, useRef } from 'react';
import '../index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const projects = [
   {
      id: 1,
      title: 'CIITM College Website',
      description:
         'A comprehensive MERN stack application designed to provide an efficient and interactive platform for students, faculty, and administrators. It features a robust backend, a seamless user interface, and a dynamic content management system.',
      features: [
         '🎓 Student Panel – Access courses, assignments, and academic records.',
         '🛠️ Admin Dashboard – Manage students, faculty, and website content with ease.',
         '🔐 Secure Authentication – Role-based access control for students and admins.',
         '⚡ High-Performance UI – Built with React, Tailwind CSS, and React Router DOM.',
         '📡 RESTful API Integration – Developed using Node.js, Express, and MongoDB.',
         '🌍 Fully Deployed – Live on Render and integrated with a custom domain.',
      ],
      techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      links: [
         {
            image: 'https://res.cloudinary.com/dbgzq41x2/image/upload/v1740401689/dp_phjacv.svg',
            title: 'Frontend Repository',
            url: 'https://github.com/Coder-Studies/ciitm-frontend',
         },
         {
            image: 'https://res.cloudinary.com/dbgzq41x2/image/upload/v1740401689/dp_phjacv.svg',
            title: 'Backend Repository',
            url: 'https://github.com/Coder-Studies/Ciitm-Backend',
         },

         {
            image: 'https://res.cloudinary.com/dbgzq41x2/image/upload/v1740401689/dp_phjacv.svg',
            title: 'Live Site',
            url: 'https://www.growrichmindset.in/',
         },
         {
            image: 'https://res.cloudinary.com/dbgzq41x2/image/upload/v1740401689/dp_phjacv.svg',
            title: 'Backend API',
            url: 'https://ciitm-backend.onrender.com/',
         },
      ],

      video: 'https://www.pexels.com/download/video/2516160/',
   },


   {
    id: 2,
    title: 'CIITM text Website',
    description:
       'A comprehensive MERN stack application designed to provide an efficient and interactive platform for students, faculty, and administrators. It features a robust backend, a seamless user interface, and a dynamic content management system.',
    features: [
       '🎓 Student Panel – Access courses, assignments, and academic records.',
       '🛠️ Admin Dashboard – Manage students, faculty, and website content with ease.',
       '🔐 Secure Authentication – Role-based access control for students and admins.',
       '⚡ High-Performance UI – Built with React, Tailwind CSS, and React Router DOM.',
       '📡 RESTful API Integration – Developed using Node.js, Express, and MongoDB.',
       '🌍 Fully Deployed – Live on Render and integrated with a custom domain.',
    ],
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    links: [
       {
          image: 'https://res.cloudinary.com/dbgzq41x2/image/upload/v1740401689/dp_phjacv.svg',
          title: 'Frontend Repository',
          url: 'https://github.com/Coder-Studies/ciitm-frontend',
       },
       {
          image: 'https://res.cloudinary.com/dbgzq41x2/image/upload/v1740401689/dp_phjacv.svg',
          title: 'Backend Repository',
          url: 'https://github.com/Coder-Studies/Ciitm-Backend',
       },

       {
          image: 'https://res.cloudinary.com/dbgzq41x2/image/upload/v1740401689/dp_phjacv.svg',
          title: 'Live Site',
          url: 'https://www.growrichmindset.in/',
       },
       {
          image: 'https://res.cloudinary.com/dbgzq41x2/image/upload/v1740401689/dp_phjacv.svg',
          title: 'Backend API',
          url: 'https://ciitm-backend.onrender.com/',
       },
    ],

    video: 'https://www.pexels.com/download/video/2516160/',
 },
];

const Projects = () => {
   const containerRef = useRef(null);
   const sliderRef = useRef(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         gsap.to(sliderRef.current, {
            x: () => -sliderRef.current.scrollWidth + window.innerWidth,
            ease: 'none',
            scrollTrigger: {
               trigger: containerRef.current,
               start: 'top top',
               end: () => `+=${sliderRef.current.scrollWidth - window.innerWidth}`,
               scrub: 1.8,
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
         className="relative w-[200vw] max-[640px]:w-[350vw] min-h-screen overflow-hidden bg-[#0C0C0D] flex items-center"
      >
         <h2 className="absolute top-10 left-[20%] max-[640px]:left-[3.5%] text-5xl font-[bold] text-gray-100 z-10 shiny-text">
            My Projects 🚀
         </h2>
         <div ref={sliderRef} className="flex h-full items-center will-change-transform gap-[2vw]">
            {projects.map((project) => (
               <div
                  key={project.id}
                  className="w-[90vw] max-[640px]:w-[300vw] flex flex-col items-center justify-center ml-[3vw]"
               >
                  <div className="h-screen flex flex-col   gap-3 pt-20 px-20 max-[640px]:px-6 bg-red-700 Project-Glassmorphism">
                 <h3 className='text-[1vw] font-semibold mix-blend-difference'>{project.title}</h3>

                     <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        className="w-[95%] max-[640px]:w-[30%] h-[50%] max-[640px]:h-[60%] object-cover rounded-xl shadow-lg border border-white/20"
                     />

                     <div className="w-full flex flex-col gap-2">
                        <h1 className="text-sm text-amber-300 mix-blend-difference">Description</h1>
                        <p className="w-[80%]">{project.description}</p>
                     </div>

                     <div className="Technology_Container flex flex-col gap-2">
                        <h4 className="text-sm  text-amber-200 mix-blend-difference">Tool & Technology</h4>
                        <div className="flex gap-2">
                           {project.techStack.map((tech) => (
                              <span
                                 key={tech}
                                 className="text-xs bg-white/20 px-2 py-1 rounded-md hover:bg-white/30"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>
                     </div>

                     <div className="Link_Container flex flex-col gap-2.5">
                        <h4 className="text-sm  text-amber-100 mix-blend-difference">Link</h4>
                        <div className="flex gap-2">
                           {project.links.map((link) => (
                              <a
                                 href
                                 key={link.title}
                                 hrefLang={link.url}
                                 target="_blank"
                                 className="flex items-center gap-2 bg-white/20 p-2 rounded-md hover:bg-white/30"
                              >
                                 <img src={link.image} alt="" className="h-5 w-5" />
                                 <span>{link.title}</span>
                              </a>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Projects;
