import { useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import axios from 'axios'
import Swal from 'sweetalert2'
import { setProjectData } from '../Store/Ui.Slice'
import { useDispatch, useSelector } from 'react-redux'
import envConstant from '../../constant/env.constant.mjs'
gsap.registerPlugin(ScrollTrigger)



let Token = envConstant.TOKEN






if (!Token) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    theme: 'dark',

    text: 'Token is missing in .env file'
  })
}




const Projects = useMemo(() => {
  let projectData = useSelector(state => state.Ui.projects)


  // if (!projectData) {
  //   projectData = []
  // }
  
  let dispatch = useDispatch()



  const [projects, setProjects] = useState([])
  const containerRef = useRef(null)
  const sliderRef = useRef(null)


 

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
        setProjects(projectData)
        return
      }

      let res = await axios.get('/api/v1/project/find', {
        headers: {
          Authorization: `${Token}`
        }
      })

      let data = res.data.data
      dispatch(setProjectData([...data]))
      setProjects(data)
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response.data.message
      })
    }
  }



  useEffect(() => {

    
    get_All_Projects()
  
    
  }, [projectData])



  return (
    <div
      ref={containerRef}
      className='relative w-[200vw] max-[640px]:w-[350vw] min-h-screen overflow-hidden bg-[#0C0C0D] flex items-center'
    >
      <h2 className='absolute top-10 left-[22%] max-[640px]:left-[3.5%] text-5xl font-[bold] text-gray-100 z-10 shiny-text'>
        My Projects 🚀
      </h2>
      <div
        ref={sliderRef}
        className='flex h-full items-center will-change-transform'
      >
        {projects.map(project => (
          <div
            key={project.id}
            className='w-[150vw] max-[640px]:w-[250vw] flex flex-col items-center justify-center'
          >
            <div className='h-screen flex items-center justify-evenly gap-10 pt-20 px-20 max-[640px]:px-6'>
              <iframe
                src={project.video}
                title={project.title}
                className='Video_Container w-[70%] max-[640px]:w-[50%] h-[80%] max-[640px]:h-[93%] object-cover rounded-xl shadow-lg border border-white/20'
                allowfullscreen='true'
              />


              <div className='About__Project w-[95vw]  text-center max-[640px]:h-[83v] text-white font-[semibold] px-6 max-[640px]:px-2 py-6 max-[640px]:py-4 bg-[#121212]/30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg  max-[640px]:mt-0'>
                <h4 className='text-3xl max-[640px]:text-[5vw] text-[#C02F17] shiny-text'>
                  {project.title}
                </h4>

                <div className="Project_Description w-full  flex items-center justify-center">
                <p className='mt-3 max-[640px]:mt-1 text-gray-300 max-[640px]:text-[4vw] w-[85%]  text-center'>
                  {project.description}
                </p>

                </div>
              
                <ul className='mt-4 max-[640px]:mt-2 pl-4 max-[640px]:pl-1 text-left text-gray-400 space-y-2 max-[640px]:space-y-1 max-[640px]:text-[3vw]'>
                  {project.features.map((feature, index) => (
                    <li key={index} className='flex items-center gap-2 w-fit'>
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
                <div className='mt-4 max-[640px]:mt-1'>
                  <h3 className='text-lg max-[640px]:text-[4vw] font-[semibold]'>
                    Tech Stack:
                  </h3>
                  <div className='flex flex-wrap justify-center gap-2 max-[640px]:gap-1 mt-2 max-[640px]:mt-1'>
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 max-[640px]:text-[3vw] bg-gray-700/50 backdrop-blur-md rounded-md'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='mt-6 max-[640px]:mt-2 flex flex-wrap justify-center gap-4 max-[640px]:gap-2 max-[640px]:text-[3.5vw]'>
                  <a
                    href={project.links.frontendRepo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-blue-600/50 backdrop-blur-md hover:bg-blue-500 rounded-lg text-white'
                  >
                    Frontend Repo
                  </a>
                  <a
                    href={project.links.backendRepo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-green-600/50 backdrop-blur-md hover:bg-green-500 rounded-lg text-white'
                  >
                    Backend Repo
                  </a>
                  <a
                    href={project.links.liveSite}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-purple-600/50 backdrop-blur-md hover:bg-purple-500 rounded-lg text-white'
                  >
                    Live Website
                  </a>
                  <a
                    href={project.links.backendAPI}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-orange-600/50 backdrop-blur-md hover:bg-orange-500 rounded-lg text-white'
                  >
                    Backend API
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})

export default Projects
