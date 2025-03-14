import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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
      '🌍 Fully Deployed – Live on Render and integrated with a custom domain.'
    ],
    bg_color: '#19e64e',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    links: {
      frontendRepo: 'https://github.com/Coder-Studies/ciitm-frontend',
      backendRepo: 'https://github.com/Coder-Studies/Ciitm-Backend',
      liveSite: 'https://www.growrichmindset.in/',
      backendAPI: 'https://ciitm-backend.onrender.com/'
    },
    video: 'https://www.pexels.com/download/video/2516160/'
  },
  {
    id: 2,
    title: 'CIITM College Website',
    description:
      'A comprehensive MERN stack application designed to provide an efficient and interactive platform for students, faculty, and administrators. It features a robust backend, a seamless user interface, and a dynamic content management system.',
    features: [
      '🎓 Student Panel – Access courses, assignments, and academic records.',
      '🛠️ Admin Dashboard – Manage students, faculty, and website content with ease.',
      '🔐 Secure Authentication – Role-based access control for students and admins.',
      '⚡ High-Performance UI – Built with React, Tailwind CSS, and React Router DOM.',
      '📡 RESTful API Integration – Developed using Node.js, Express, and MongoDB.',
      '🌍 Fully Deployed – Live on Render and integrated with a custom domain.'
    ],
    bg_color: '#1ce345',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    links: {
      frontendRepo: 'https://github.com/Coder-Studies/ciitm-frontend',
      backendRepo: 'https://github.com/Coder-Studies/Ciitm-Backend',
      liveSite: 'https://www.growrichmindset.in/',
      backendAPI: 'https://ciitm-backend.onrender.com/'
    },
    video: 'https://www.pexels.com/download/video/2516160/'
  }
]

const Projects = () => {
  const containerRef = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sliderRef.current, {
        x: () => -sliderRef.current.scrollWidth + window.innerWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${sliderRef.current.scrollWidth - window.innerWidth}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className='relative w-[350vw] max-[640px]:w-[350vw] min-h-screen overflow-hidden bg-[#0C0C0D] flex items-center'
    >
      <h2 className='absolute bg-blend-difference top-10 left-[40vw] max-[640px]:left-[40vw]  text-[4.5vw] lg:text-[3vw] 2xl:text-[2vw] font-[bold] text-gray-100 z-10 shiny-text'>
        My Projects 🚀
      </h2>
      <div
        ref={sliderRef}
        className='flex h-full items-center will-change-transform gap-[1vw] mt-[1vh]'
      >
        {projects.map(project => (
          <div
            key={project.id}
            className='w-[95vw] max-[640px]:w-[100vw] flex flex-col items-center justify-center'
          >
            <div
              style={{ background: project.bg_color }}
              className='h-screen mt-[3vh] max-[850px]:w-full w-[80vw] flex flex-col items-center justify-items-center gap-10 pt-20 px-20 max-[640px]:px-6  bg-green-600'
            >
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className='w-full   max-[679px]:h-[25%] max-[679px]:w-[95%] h-[50%]  object-contain rounded-xl '
              />

              <div className='flex flex-col items-start gap-2 w-full'>
                <h4 className='   max-[679px]:text-[2.5vw]   text-[1.2vw]    text-white   text-left w-full font-semibold'>
                  {project.title}
                </h4>

                <div className='Description_Container flex flex-col items-start gap-4 w-full'>
                  <h6 className='max-[679px]:text-[2.5vw]  text-[0.8vw] text-yellow-600 font-bold bg-blend-difference'>
                    Description
                  </h6>
                  <p className='max-[679px]:text-[2.2vw]  max-[679px]:w-[80%] text-[0.8vw] text-white font-normal bg-blend-difference'>
                    {project.description}
                  </p>
                </div>

                <div className='Tech_Stack_Container w-full flex flex-col gap-2'>
                  <h6 className='max-[679px]:text-[2.5vw]  text-[0.8vw] text-yellow-600 font-bold bg-blend-difference'>
                    Tech Stack
                  </h6>

                  <div className='flex gap-[0.5vw] flex-wrap bg-blend-difference'>
                    {' '}
                    {project.techStack.map((tech, index) => (
                      <div
                        key={index}
                        className='bg-yellow-500 hover:bg-amber-600  p-2 rounded-md flex'
                      >
                        <p className='max-[679px]:text-[2.5vw]  text-[0.8vw] text-white font-medium'>
                          {tech}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="Link_container w-full flex gap-2 bg-red-500">
                
                  {
                    project.links.frontendRepo && (
                      <a href={project.links.frontendRepo} target='_blank' rel='noreferrer'>

                        <div className='bg-yellow-500 hover:bg-amber-600  p-2 rounded-md flex'>
                          <p className='max-[679px]:text-[2.5vw]  text-[0.8vw] text-white font-medium'>
                            Frontend Repo
                          </p>
                        </div>

                      </a>
                    )
                  }
                </div>

                {/* <div className='Features_Container w-full'>
                <h6 className='max-[679px]:text-[2.5vw]  text-[0.8vw] text-yellow-600 font-medium'>
                  Feature's
                </h6>
                {project.features.map((feature, index) => (
                  <div key={index} className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-yellow-500 rounded-full'></div>
                    <p className='max-[679px]:text-[1vw]  text-[0.8vw] text-white font-normal'>
                      {feature}
                    </p>
                  </div>
                ))}
              </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
