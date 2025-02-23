import React from 'react'
import Particles from '../Particles'

const Background = () => {
  return (
    <section className="w-full h-screen bg-zinc-900 mix-blend-difference">
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={300}
    particleSpread={25}
    speed={0.09}
    particleBaseSize={90}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
    </section>
  )
}

export default Background