import React from 'react'

const Hero = () => {
  return (
    <section className="w-full h-screen bg-black/50 absolute pointer-events-none">
     <div className="flex w-full h-full gap-4 flex-col items-center justify-center text-white px-4 ">
      <img
        src="https://avatars.githubusercontent.com/u/122656682?v=4" // Replace with your actual image path
        alt="Profile"
        className="w-30 h-30 rounded-full border-2 border-zinc-800"
      />
      <p className="shiny-text text-md text-zinc-400">Hi, I'm Abhisekh Kumar 👋</p>
      <p className="text-5xl w-[40%] font-light text-center leading-tight shiny-text">
  Building scalable backends, APIs, and full-stack solutions.
</p>

<button className="mt-4 bg-zinc-900 px-6 py-2 rounded"><span className='shiny-text'>Hire Me ↗</span></button>
    </div>
    </section>
  )
}

export default Hero