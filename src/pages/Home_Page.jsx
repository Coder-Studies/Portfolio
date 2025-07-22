import React from 'react'
import { Cursor } from 'react-simple-typewriter'
import Background from '../components/heroComponents/Background'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import AboutMe from '../sections/About'
import Skills from '../sections/Skills'
import Certificates from '../sections/Certificates'
import Projects from '../sections/Projects'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'
import ScrollVelocity from '../sections/ScrollVelocity'
import Services from '../sections/Services'

const Home_Page = () => {
  return (
      <div className="relative overflow-hidden bg-[#0C0C0D] text-zinc-200">
    <Cursor />
    <Background />
    <Navbar />
    <Hero />
    <AboutMe />
    <Skills />
    <Certificates />
    <Projects />
    <Services />
    <Testimonials />
    <Contact />
    <ScrollVelocity
      texts={["Abhishek Kumar", "Backend Developer"]}
      velocity={100}
      className="custom-scroll-text bg-[#0C0C0D] text-zinc-200 font-[bold] select-none mb-[4vh]"
    />
  </div>
  )
}

export default Home_Page