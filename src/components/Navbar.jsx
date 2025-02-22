import React from 'react'
import CircularText from './homeComponents/CircularText'
import Magnet from './homeComponents/Magnet'

const Navbar = () => {
  return (
    <>
    <nav className='fixed top-0 left-1/2 -translate-x-1/2 z-[9999] w-[90%] mx-auto pt-2 flex items-center justify-between text-zinc-200 border-b-[1px] border-zinc-900'>
        <div className="">
        <Magnet disabled={false} magnetStrength={20} className="cursor-pointer">
        <CircularText
  text="ABHISEKH*KUMAR*"
  onHover="slowDown"
  spinDuration={40}
  className="custom"
/>
</Magnet>
        </div>
        <div className="links flex gap-2 -mt-4">
          {[ "Instagram /", "Linked In /","Github"].map((link, index) => (
            <a href="#"><Magnet disabled={false} magnetStrength={30} key={index} className="cursor-pointer">{link}</Magnet></a>
          ))}
        </div>
    </nav>
    </>
  )
}

export default Navbar