import React from 'react'
import Particles from '../Particles'

const Background = () => {
  return (
    <section className="w-full h-screen bg-zinc-900 fixed top-0">
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.03}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
    </section>
  )
}

export default Background